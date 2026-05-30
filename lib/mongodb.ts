import mongoose from 'mongoose';
import { Resolver } from 'dns/promises';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: CachedConnection | undefined;
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function buildDirectUri(srvUri: string): Promise<string> {
  const resolver = new Resolver();
  resolver.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

  const url = new URL(srvUri);
  const host = url.hostname;

  console.log('[MongoDB] Resolving SRV for:', host);

  const [srvRecords, txtRecords] = await Promise.all([
    resolver.resolveSrv(`_mongodb._tcp.${host}`),
    resolver.resolveTxt(host).catch(() => [] as string[][]),
  ]);

  console.log('[MongoDB] SRV records found:', srvRecords.map(r => `${r.name}:${r.port}`));

  const hosts = srvRecords.map(r => `${r.name}:${r.port}`).join(',');
  const txtOptions = txtRecords.flat().join('&');

  const userInfo = url.username
    ? `${url.username}:${encodeURIComponent(decodeURIComponent(url.password))}@`
    : '';
  const dbPath = url.pathname;
  const appName = url.searchParams.get('appName');
  const extraParams = appName ? `&appName=${appName}` : '';

  const directUri = `mongodb://${userInfo}${hosts}${dbPath}?${txtOptions}&tls=true${extraParams}`;
  return directUri;
}

async function connectDB() {
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    let connectionUri = MONGODB_URI;

    if (MONGODB_URI.startsWith('mongodb+srv://')) {
      try {
        connectionUri = await buildDirectUri(MONGODB_URI);
        console.log('[MongoDB] Using direct URI (SRV resolved manually)');
      } catch (err) {
        console.error('[MongoDB] SRV manual resolution failed, falling back to original URI:', err);
        connectionUri = MONGODB_URI;
      }
    }

    cached.promise = mongoose.connect(connectionUri, { bufferCommands: false }).then((m) => {
      console.log('✅ MongoDB connected successfully');
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('❌ MongoDB connection error:', e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;
