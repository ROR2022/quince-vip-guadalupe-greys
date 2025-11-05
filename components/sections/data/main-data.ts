export const quinceMainData = {
  hero: {
    name: "Guadalupe Greys",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince3.jpeg",
    quote:
      "La vida es un viaje mágico, y hoy celebro un capítulo especial lleno de sueños y esperanza.",
    backgroundCarrouselImages: [
      "/images/quince1.jpeg",
      "/images/quince2.jpeg",
      "/images/quince3.jpeg",
      "/images/quince4.jpeg",
    ],
  },
  welcomeSection: {
    message:
      "Con mucha alegría y emoción, te invito a celebrar mis XV años. Será un día lleno de magia, amor y momentos inolvidables. ¡Espero contar con tu presencia para hacer de este día algo realmente especial!",
    backgroundImage: "/images/aurora_1.jpeg",
  },
  event: {
    celebrant: "Guadalupe Greys",
    //Padres María de Jesús Gutiérrez y Andres Ramírez
    parents: {
      father: "Andres Martínez",
      mother: "Maria de Jesús Sanchez",
      message: `Hoy, mi corazón rebosa de gratitud. 
                Doy gracias a Dios por cada paso de mi vida y a mis padres  
                por cuidarme y guiarme en este camino.
                Hace quince años mis padres agradecieron a Dios por mi vida. 
                Hoy, yo agradezco a Dios por ellos, por su infinito amor y paciencia.`,
      backgroundImage: "/images/quinceB&B8.jpeg",
    },
    //Padrino Ma. Asunción Ramirez y Juan Gutiérrez
    godparents: {
      godfather: "Juan Hernández",
      godmother: "Ma. Asunción Jiménez",
    },
    date: {
      full: "Sábado 15 de Noviembre 2025",
      isoDate: "2025-11-15T13:00:00",
      day: "Sábado",
      dayNumber: "15",
      month: "Noviembre",
      year: "2025",
      date: "15 de Noviembre 2025",
      mensaje1: "¡La cuenta regresiva ha comenzado!",
      mensaje2: "TAN SOLO FALTAN",
      backgroundCarrouselImages: [
        "/images/quinceAzul1.jpg",
        "/images/quinceAzul2.jpg",
        "/images/quinceAzul3.jpg",
        "/images/quinceAzul4.jpg",
        "/images/quinceAzul5.jpg",
        "/images/quinceAzul6.jpg",
      ],
    },
    //Misa a la 1pm parroquia Santa fe de Guadalupe, la Sauceda Guanajuato.
    ceremony: {
      time: "13:00 hrs.",
      venue: "Parroquia Santa Fe de Guadalupe",
      address: "Santa fe de Guadalupe, la Sauceda Guanajuato.",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/WfeVYukpQg3CWC2T8",
      ceremonyImage: "/images/quince6.jpeg",
    },
    party: {
      time: "14:00 hrs.",
      venue: "Salón Texano",
      address: "Santa fe de Guadalupe, la Sauceda Guanajuato.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/qNFsbPPuwyCSMUim9",
    },
    dressCode: "Formal - Rosa solo la quinceañera",
    restrictions: "",
  },
  timeline: {
    title: "Itinerario del Evento",
    timelineImage: "/images/quinceLila1.png",
    mensaje: `Cada momento de este día especial ha sido cuidadosamente planeado 
    para crear recuerdos inolvidables. 
    Desde la ceremonia hasta la celebración, cada detalle refleja el amor y 
    la alegría que compartimos. ¡Espero que disfrutes cada instante tanto como yo!`,
    images: [
      "/images/quinceAmarillo1.jpg",
      "/images/quinceAmarillo2.jpg",
      "/images/quinceB&B1.jpeg",
      "/images/quinceB&B6.jpeg",
      "/images/quinceB&B7.jpeg",
    ],
    events: [
      {
        id: "event1",
        time: "13:00 hrs.",
        title: "Misa de Acción de Gracias",
        description: "Ceremonia en la Parroquia Santa Fe de Guadalupe.",
        icon: "⛪",
      },
      {
        id: "event2",
        time: "14:00 hrs.",
        title: "Recepción en Salón Texano",
        description: "Comida, baile y celebración en el Salón Texano.",
        icon: "🎉",
      },
      {
        id: "event3",
        time: "15:00 hrs.",
        title: "Brindis y Palabras",
        description: "Brindis especial y palabras de agradecimiento.",
        icon: "🥂",
      },
      {
        id: "event4",
        time: "16:00 hrs.",
        title: "Baile de Quinceañera",
        description: "Primer baile y apertura de la pista de baile.",
        icon: "💃",
      },
      {
        id: "event5",
        time: "18:00 hrs.",
        title: "Corte de Pastel",
        description: "Momento especial del corte de pastel.",
        icon: "🍰",
      },
      {
        id: "event6",
        time: "19:00 hrs.",
        title: "Baile y Diversión",
        description: "Música, baile y diversión para todos los invitados.",
        icon: "🎶",
      },
      {
        id: "event7",
        time: "20:00 hrs.",
        title: "Mariachi",
        description: "Presentación especial de mariachi.",
        icon: "🎺",
      },
      {
        id: "event8",
        time: "21:00 hrs.",
        title: "Despedida y Agradecimientos",
        description: "Palabras finales y despedida de los invitados.",
        icon: "🙏",
      },
    ],
  },
  dressCode:{
    title: "Código de Vestimenta",
    message: "¡Vístete para impresionar!",
    subtitle: "Código de vestimenta formal - Rosa solo la quinceañera",
    restriction: "Restricción: No niños",
    backgroundImage: "/images/dressCode1.png",
  },
  countdown: {
    targetDate: "December 27, 2025 17:00:00",
    backgroundImage: "/images/countdown-bg.jpg",
  },
  attendance: {
    whatsappNumber: "5217444025882", //+52 1 744 402 5882
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente",
    subtitle: "Confirmar antes del evento.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir.",
      },
    },
    images:[
      "/images/quince5.png",
      "/images/quince6.jpeg",
      "/images/quince7.jpeg",
      "/images/quince8.png",
    ],
    thankYouMessage:
      "¡Gracias por confirmar tu asistencia! Nos alegra que puedas acompañarnos en este día tan especial.",
  },
  gifts: {
    title: "Lista de Regalos",
    subtitle: "Tu presencia es el mejor regalo, pero si deseas contribuir, aquí tienes algunas ideas.",
    message:
      "Agradezco de corazón tu generosidad y apoyo en este día tan especial. ¡Gracias por ser parte de mi vida!",
    giftsOptions: [
      {
        id: "lluviaSobres",
        name: "Lluvia de Sobres",
        icon: "💌",
        description:
          "Tu presencia es el mejor regalo, pero si deseas contribuir, una lluvia de sobres sería muy apreciada.",
        image: "/images/gifts/envelope.png",
        link: "https://example.com/lluvia-de-sobres",
      },
      {
        id: "regaloSorpresa",
        name: "Regalo Sorpresa",
        icon: "🎁",
        description:
          "Si prefieres dar un regalo físico, una sorpresa especial siempre es bienvenida.",
        image: "/images/gifts/gift-box.png",
        link: "https://example.com/mesa-de-regalos",
      }
    ],
  },
  gallery: {
    title: "Recuerdos Especiales",
    subtitle: "Momentos inolvidables",
    description:
      "Cada imagen captura la esencia de este día tan especial. ¡Gracias por ser parte de estos recuerdos inolvidables!",
    images: [
      {
        id: "image1",
        src: "/images/rapunzel1.jpeg",
        alt: "Guadalupe Greys en sus XV años",
        caption: "Guadalupe Greys radiante en su día especial.",
      },
      {
        id: "image2",
        src: "/images/rapunzel2.jpeg",
        alt: "Baile de Quinceañera",
        caption: "El emotivo primer baile de Guadalupe Greys.",
      },
      {
        id: "image3",
        src: "/images/rapunzel3.jpeg",
        alt: "Corte de Pastel",
        caption: "El dulce momento del corte de pastel.",
      },
      {
        id: "image4",
        src: "/images/rapunzel4.jpeg",
        alt: "Celebración con Familia y Amigos",
        caption: "Guadalupe Greys rodeada de sus seres queridos.",
      },
      {
        id: "image5",
        src: "/images/rapunzel5.jpg",
        alt: "Detalles del Evento",
        caption: "Cada detalle hecho con amor para este día especial.",
      },
      {
        id: "image6",
        src: "/images/rapunzel6.jpg",
        alt: "Diversión en la Pista de Baile",
        caption: "Momentos de alegría y baile con todos los invitados.",
      },
      {
        id: "image7",
        src: "/images/rapunzel7.jpg",
        alt: "Sesión de Fotos",
        caption: "Capturando recuerdos que durarán toda la vida.",
      },
      {
        id: "image8",
        src: "/images/rapunzel8.jpg",
        alt: "Guadalupe Greys y sus Padres",
        caption: "Un momento especial con sus queridos padres.",
      },
    ],
    imagesUrls: [
      "/images/rapunzel1.jpeg",
      "/images/rapunzel2.jpeg",
      "/images/rapunzel3.jpeg",
      "/images/rapunzel4.jpeg",
      "/images/rapunzel5.jpeg",
      "/images/rapunzel6.jpeg",
      "/images/rapunzel7.jpeg",
      "/images/rapunzel8.jpeg",
    ],
  },
  qrcodeSection:{
    title: "Escanea el Código QR",
    celebrant: "Guadalupe Greys",
    message: "Para acceder fácilmente a la invitación en tu dispositivo móvil.",
    mainImage: "/images/qrcode-bg.jpg",
  },
  music: {
    src: "/music/quinceanera-song.mp3",
    title: "Canción de Quinceañera",
    artist: "Artista Invitado",
  },
  // 🎵 Configuración de audio
  audio: {
    src: "/audio/musica.mp3",
    fallbacks: ["/audio/musica.ogg", "/audio/musica.wav"],
    title: "Música de Fondo de Boda",
    startTime: 10, // 0:13 - Donde empieza la letra
    endTime: 200, // 1:25 - Final del segmento
    volume: 0.7, // 60% de volumen
    loop: true, // Loop en el rango especificado
    preload: "metadata", // Precargar solo metadatos
    enabled: true, // Control habilitado
    position: {
      desktop: { bottom: "2rem", right: "2rem" },
      mobile: { bottom: "1rem", right: "1rem" },
    },
    styling: {
      size: {
        desktop: "60px",
        mobile: "50px",
      },
      colors: {
        primary: "#e3aaaa",
        hover: "#d48c8c",
        background: "rgba(255, 255, 255, 0.8)",
        icon: "#333",
      },
    },
  },
 VIP_COLORS: {
  rosaAurora: '#d22d2e',      // Rosa principal vibrante (tint medio del rojo base)
  lavandaAurora: '#b415b4',   // Lavanda principal (morado armónico)
  oroAurora: '#e17204',       // Oro principal (naranja dorado complementario)
  blancoSeda: '#ffffff',      // Blanco puro
  cremaSuave: '#f7dfdf',      // Crema suave (tint claro rosado)
  rosaIntensa: '#540000',     // Rosa intenso (shade oscuro del base)
  lavandaIntensa: '#4a004a',  // Lavanda intensa (morado oscuro)
  oroIntensio: '#4a2400',     // Oro intenso (naranja oscuro)
  rosaDelicada: '#f07a7b'     // Rosa delicada (tint suave rosado)
},
  customInvitations:{
    adminPassword: "admin1234",
    invitationUrl: "https://quince-vip-guadalupe-greys.vercel.app/",
    suggested_messages: [
  "¡Querida amiga! Te invito a celebrar conmigo el día más mágico de mi vida. ¡Espero verte brillar junto a mí!",
  "¡Familia querida! Este día especial no sería lo mismo sin ustedes. ¡Los espero con mucho amor!",
  "¡Hola! Me encantaría que seas parte de mi celebración de XV años. ¡Será una noche inolvidable!",
  "¡Queridos padrinos! Su presencia es fundamental en este momento tan especial. ¡Los espero con cariño!",
  "¡Amigos del alma! Vengan a celebrar conmigo esta nueva etapa. ¡Será una fiesta increíble!",
    ]
  },
  videoFondos: [
    {
      id: "splash",
      src: "/video/quinceVideo1.mp4",
      type: "video/mp4",
    }
  ]
};
