export async function register() {
  console.log('[instrumentation] register() called, runtime:', process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const dns = await import('dns');
    console.log('[instrumentation] DNS servers BEFORE:', dns.getServers());
    dns.setServers(['8.8.8.8', '8.8.4.4']);
    console.log('[instrumentation] DNS servers AFTER:', dns.getServers());
  }
}
