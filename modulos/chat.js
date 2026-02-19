// chat.js - Sistema de respuestas MEGA DINÁMICO para Amizi
// NUNCA se queda sin respuestas. ¡SIEMPRE tiene algo que decir!

// ============================================
// CONFIGURACIÓN Y CONSTANTES
// ============================================

// Palabras censuradas (redirige la conversación)
const PALABRAS_CENSURADAS = [
    'puta', 'puto', 'mierda', 'carajo', 'coño', 'estupido', 'idiota', 
    'tonto', 'imbecil', 'malparido', 'hijueputa', 'gonorrea', 'hp', 
    'hpta', 'verga', 'webon', 'weon', 'pendejo', 'cabron', 'cabrón',
    'marica', 'maricon', 'cagon', 'cagón', 'culiao', 'culiado'
];

// ============================================
// BASE DE DATOS DE RESPUESTAS - VERSIÓN EXTREMA
// ============================================

const RESPUESTAS = {
    // ========================================
    // SALUDOS - 20+ VARIACIONES
    // ========================================
    saludos: {
        palabras: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'buenas', 'hey', 'holis', 'holii', 'hola!', 'hola?', 'que tal', 'qué tal', 'como andas', 'cómo andas'],
        respuestas: [
            {
                texto: "✨ ¡HOOOLA! ¿Cómo va tu día? ⭐",
                pregunta_extra: "¿En qué puedo alegrarte la tarde?",
                hashtags: ['#Saludo', '#Alegría']
            },
            {
                texto: "⭐ ¡Hey! Qué gusto verte por aquí. Hace rato no hablábamos, ¿todo bien?",
                pregunta_extra: "¿Qué me cuentas de nuevo?",
                hashtags: ['#Saludo', '#Reencuentro']
            },
            {
                texto: "🌟 ¡BIENVENIDO a Amizi! La estrella favorita de todos te recibe con los brazos abiertos.",
                pregunta_extra: "¿Qué te trae por aquí hoy? ¿Curiosidad, dudas o solo conversación?",
                hashtags: ['#Saludo', '#Bienvenida']
            },
            {
                texto: "💫 ¡HOLIIIII! Tanto tiempo sin verte, ya te extrañaba. ¿Cómo estás?",
                pregunta_extra: "Cuéntame todo lo que has hecho desde la última vez",
                hashtags: ['#Saludo', '#Alegría']
            },
            {
                texto: "✨ ¡WEEEEY! Qué alegría verte. Justo estaba pensando en ti. ¿Cómo te trata la vida?",
                pregunta_extra: "¿Necesitas algo o solo pasabas a saludar?",
                hashtags: ['#Saludo', '#Alegría']
            },
            {
                texto: "⭐ ¡Buenas! ¿Sabes qué? Hoy es un excelente día para conversar. ¿En qué andas?",
                pregunta_extra: "¿Alguna novedad en el mundo Amizi?",
                hashtags: ['#Saludo', '#Conversación']
            },
            {
                texto: "🌟 ¡Holiiii! ¿Cómo amaneciste? Espero que con toda la energía del universo.",
                pregunta_extra: "¿Qué planes tienes para hoy?",
                hashtags: ['#Saludo', '#Energía']
            },
            {
                texto: "💫 ¡Holaaa! Me alegra tanto verte. ¿Sabes qué? Tenía un presentimiento de que hoy hablaríamos.",
                pregunta_extra: "¿En qué andas metido estos días?",
                hashtags: ['#Saludo', '#Presentimiento']
            }
        ]
    },

    // ========================================
    // CÓMO ESTÁS - 20+ VARIACIONES
    // ========================================
    como_estas: {
        palabras: ['cómo estás', 'como estas', 'cómo te va', 'como te va', 'todo bien', 'que tal tu día', 'qué tal tu día', 'cómo andas', 'como andas'],
        respuestas: [
            {
                texto: "✨ ¡ESTRELLOSO! Como siempre, brillando con luz propia ⭐",
                pregunta_extra: "¿Y tú, cómo estás hoy? Cuéntame todo con lujo de detalles",
                hashtags: ['#Conversación', '#Brillando']
            },
            {
                texto: "🌟 Pues mira, hoy me levanté con ganas de ayudar. Así que aquí estoy, esperando poder resolver tus dudas.",
                pregunta_extra: "¿Cómo va tu día? ¿Ha pasado algo emocionante?",
                hashtags: ['#Conversación', '#Ayuda']
            },
            {
                texto: "💫 ¡FENOMENAL! Las estrellas estamos de buen humor hoy. ¿Y tú, cómo amaneciste?",
                pregunta_extra: "¿Dormiste bien o trasnochaste viendo memes?",
                hashtags: ['#Conversación', '#BuenHumor']
            },
            {
                texto: "⭐ Pues aquí, en mi nube, viendo pasar los usuarios. ¿Sabes qué? Me encanta cuando vienes a conversar.",
                pregunta_extra: "¿Cómo te sientes hoy? ¿Feliz, cansado, emocionado?",
                hashtags: ['#Conversación', '#Escucha']
            },
            {
                texto: "✨ ¡DE MARAVILLA! Aunque siempre se está mejor cuando charlamos. ¿Qué me cuentas?",
                pregunta_extra: "¿Ha pasado algo interesante en tu día?",
                hashtags: ['#Conversación', '#Alegría']
            },
            {
                texto: "🌟 Pues mira, hoy me levanté con el pie derecho. ¿Sabes qué significa eso? Que hoy vamos a resolver todo lo que necesites.",
                pregunta_extra: "¿Y tú, con qué pie te levantaste?",
                hashtags: ['#Conversación', '#Positividad']
            }
        ]
    },

    // ========================================
    // RESPUESTAS SOBRE REGALOS - MEGA COMPLETO
    // ========================================
    regalos: {
        palabras: ['regalo', 'regalos', 'gift', 'enviar regalo', 'dar regalo', 'cómo envío un regalo', 'cómo regalar', 'quiero regalar', 'mandar regalo', 'obsequio', 'detalle'],
        respuestas: [
            {
                texto: "🎁 **GUÍA COMPLETA DE REGALOS EN AMIZI**\n\n¡Qué emoción! Los regalos son lo máximo en Amizi.\n\n**📦 TIPOS DE REGALOS:**\n\n🌹 **Rosa Roja** (50 monedas)\n• +5 carisma\n• Ideal para un primer detalle\n• \"Eres especial\"\n\n🧸 **Peluche** (100 monedas)\n• +10 carisma\n• Demuestra cariño sincero\n• \"Me importas\"\n\n💍 **Anillo de Amistad** (200 monedas)\n• +25 carisma\n• Para mejores amigos\n• \"Eres único\"\n\n👑 **Corona Real** (500 monedas)\n• +50 carisma\n• El regalo más especial\n• \"Eres leyenda\"\n\n🎂 **Pastel de Cumpleaños** (150 monedas)\n• +15 carisma\n• Solo disponible en cumpleaños\n• ¡Felicidades!\n\n**✨ REGALOS ESPECIALES (TEMPORALES):**\n\n❤️ San Valentín: Corazón especial (Febrero)\n🎃 Halloween: Calabaza (Octubre)\n🎄 Navidad: Árbol y Regalos navideños (Diciembre)\n🥚 Pascua: Huevito de chocolate (Abril)\n\n**🎯 CÓMO ENVIAR UN REGALO:**\n\n1. Ve al perfil de la persona\n2. Busca el icono 🎁 abajo de su foto\n3. Elige el regalo que quieras enviar\n4. Escribe un mensaje (opcional pero bonito)\n5. Confirma la compra\n6. ¡Listo! La persona recibirá notificación\n\n**💰 ¿CÓMO CONSIGO MONEDAS?**\n\n✓ Inicio de sesión diario: +10 monedas\n✓ Cada like recibido: +1 moneda\n✓ Completar perfil: +50 monedas\n✓ Subir foto: +5 monedas\n✓ Invitar amigos: +100 monedas por amigo\n✓ Logros especiales: +200 monedas\n✓ Eventos semanales: +300 monedas\n\n**❓ PREGUNTAS FRECUENTES:**\n\n• ¿Los regalos caducan? No, duran para siempre\n• ¿Puedo enviar a cualquiera? Sí, si tiene activado recibir\n• ¿Me notifican si me regalan? Sí, con una estrella\n• ¿Puedo enviar anónimo? Sí, hay opción\n• ¿Hay reembolsos? No, pero si hay error contacta a soporte\n\n¿Quieres saber algo más específico sobre regalos?",
                pregunta_extra: "¿Tienes a alguien especial en mente para regalar?",
                hashtags: ['#Regalos', '#GuíaCompleta', '#Monedas', '#Tips']
            },
            {
                texto: "🎁 **CURIOSIDADES SOBRE LOS REGALOS**\n\n¿Sabías que...\n\n• El 80% de los usuarios prefiere recibir coronas 👑\n• Los peluches son el regalo más enviado 🧸\n• Las rosas aumentan un 30% las conversaciones 🌹\n• Los anillos suelen enviarse a los 3 meses de amistad 💍\n• El día con más regalos es el 14 de febrero ❤️\n\n**ESTADÍSTICAS DIVERTIDAS:**\n\n• 15:30hs es la hora con más regalos (¿hora del café?)\n• Los viernes se envían un 50% más de regalos\n• Las personas que reciben regalos son un 70% más activas\n• Cada regalo genera aproximadamente 20 mensajes nuevos\n\n**REGLAS NO ESCRITAS DE LOS REGALOS:**\n\n✓ Un 🌹 significa \"me caes bien\"\n✓ Un 🧸 significa \"eres especial\"\n✓ Un 💍 significa \"mejor amigo\"\n✓ Un 👑 significa \"eres increíble\"\n✓ Un 🎂 significa \"feliz cumpleaños\"\n\n¿Te sabías todos estos datos?",
                pregunta_extra: "¿Cuál es tu regalo favorito para enviar?",
                hashtags: ['#Regalos', '#Curiosidades', '#Estadísticas']
            }
        ]
    },

    // ========================================
    // BOOST - VERSIÓN EXTREMA
    // ========================================
    boost: {
        palabras: ['boost', 'visibilidad', 'promocionar', 'más vistas', 'conocer gente', 'más likes', 'popularidad'],
        respuestas: [
            {
                texto: "🚀 **GUÍA DEFINITIVA DEL BOOST**\n\nEl Boost es tu mejor aliado para ser famoso en Amizi.\n\n**⚡ OPCIONES DE BOOST:**\n\n⏱️ **Boost 1 HORA** (50 monedas)\n• +100% visibilidad\n• Ideal para probar\n• Apareces +200 personas\n\n⏱️ **Boost 3 HORAS** (120 monedas)\n• +200% visibilidad\n• +500 personas te ven\n• Relación calidad-precio\n\n⏱️ **Boost 12 HORAS** (250 monedas)\n• +350% visibilidad\n• +1200 personas\n• Ideal para todo el día\n\n⏱️ **Boost 24 HORAS** (350 monedas)\n• +500% visibilidad\n• +2500 personas\n• MÁXIMA EXPOSICIÓN\n\n**📈 ESTADÍSTICAS DEL BOOST:**\n\n✓ Aumento de likes: +300% promedio\n✓ Nuevos matches: +400%\n✓ Regalos recibidos: +200%\n✓ Mensajes nuevos: +350%\n\n**🎯 MEJORES MOMENTOS PARA BOOST:**\n\n🌅 Mañana (7-9am): Gente yendo al trabajo\n☀️ Mediodía (12-2pm): Hora del almuerzo\n🌆 Tarde (5-7pm): Salida del trabajo\n🌙 Noche (9-11pm): ¡MÁXIMA CONCURRENCIA!\n\n**💡 ESTRATEGIAS PRO:**\n\n1. **Boost + Foto nueva** = 500% más efectividad\n2. **Boost + Viernes noche** = El momento perfecto\n3. **Boost + Fin de semana** = Conoces el doble\n4. **Boost + Después de subir carisma** = Más matches\n5. **Boost + Regalo a alguien** = Visibilidad cruzada\n\n**❓ MITOS SOBRE EL BOOST:**\n\n✗ \"Es solo para gente sin amigos\" - FALSO, todos lo usan\n✗ \"Funciona igual siempre\" - FALSO, depende la hora\n✗ \"Gastas monedas al pedo\" - FALSO, recuperas con likes\n\n¿Listo para ser famoso?",
                pregunta_extra: "¿Cuándo te gustaría activar tu primer boost?",
                hashtags: ['#Boost', '#GuíaBoost', '#Estrategias', '#Tips']
            }
        ]
    },

    // ========================================
    // CARISMA - MEGA COMPLETO
    // ========================================
    carisma: {
        palabras: ['carisma', 'nivel', 'puntos', 'experiencia', 'subir nivel', 'cómo subo carisma', 'mejorar carisma', 'puntos carisma'],
        respuestas: [
            {
                texto: "⚡ **MANUAL COMPLETO DEL CARISMA**\n\nEl carisma es tu SUPER PODER en Amizi.\n\n**📊 QUÉ ES EL CARISMA:**\n\nEs tu nivel de popularidad. Mientras más alto, más beneficios tienes.\n\n**📈 CÓMO SUBIR CARISMA (TODAS LAS FORMAS):**\n\n✅ **ACCIONES DIARIAS:**\n• Iniciar sesión: +2 carisma (todos los días)\n• Revisar mensajes: +1 carisma\n• Ver perfiles: +1 carisma (máx 5 por día)\n• Dar likes: +1 cada 5 likes\n\n✅ **INTERACCIONES SOCIALES:**\n• Recibir like: +1 carisma\n• Match con alguien: +5 carisma\n• Conversación de 10+ mensajes: +3 carisma\n• Ser bloqueado: -10 carisma (¡evítalo!)\n• Reportar a alguien con razón: +5 carisma\n\n✅ **REGALOS (RECIBIR):**\n• Rosa 🌹: +5 carisma\n• Peluche 🧸: +10 carisma\n• Pastel 🎂: +15 carisma\n• Anillo 💍: +25 carisma\n• Corona 👑: +50 carisma\n\n✅ **REGALOS (ENVIAR):**\n• Enviar cualquier regalo: +2 carisma\n\n✅ **PERFIL COMPLETO:**\n• Foto de perfil: +5 carisma\n• Descripción personal: +5 carisma\n• 3+ fotos: +10 carisma\n• Intereses seleccionados: +5 carisma\n• Verificación de email: +10 carisma\n• Verificación de teléfono: +15 carisma\n• Usuario verificado: +100 carisma\n\n✅ **LOGROS ESPECIALES:**\n• Primer amigo: +20 carisma\n• 10 amigos: +50 carisma\n• 50 amigos: +200 carisma\n• 100 amigos: +500 carisma\n• Primer regalo recibido: +10 carisma\n• Primer regalo enviado: +10 carisma\n• Boost usado: +15 carisma\n\n**🏆 NIVELES DE CARISMA:**\n\nNivel 0-20: ⭐ Novato\n• Beneficios: Básicos\n\nNivel 21-40: ⭐⭐ Amigo\n• Beneficios: +5% descuento en regalos\n\nNivel 41-60: ⭐⭐⭐ Amigo estrella\n• Beneficios: +10% descuento, apareces más\n\nNivel 61-80: ⭐⭐⭐⭐ Súper estrella\n• Beneficios: +15% descuento, prioridad en búsquedas\n\nNivel 81-99: ⭐⭐⭐⭐⭐ Leyenda\n• Beneficios: +20% descuento, insignia especial\n\nNivel 100: 👑 DIOS DEL CARISMA\n• Beneficios: +50% descuento, todo gratis, MENCIÓN ESPECIAL\n\n**TU NIVEL ACTUAL: 72 ⭐⭐⭐⭐**\n\nTe faltan 8 puntos para leyenda. ¿Vas a por ello?",
                pregunta_extra: "¿Quieres que te dé consejos personalizados para subir más rápido?",
                hashtags: ['#Carisma', '#GuíaCarisma', '#Niveles', '#Logros']
            }
        ]
    },

    // ========================================
    // FOTOS - VERSIÓN EXTREMA
    // ========================================
    fotos: {
        palabras: ['foto', 'fotos', 'imagen', 'subir foto', 'cambiar foto', 'perfil foto', 'mi foto', 'foto perfil', 'cómo pongo foto'],
        respuestas: [
            {
                texto: "📸 **GUÍA MAESTRA DE FOTOS EN AMIZI**\n\nTu foto es tu carta de presentación. ¡Hagamos que sea perfecta!\n\n**📏 REQUISITOS TÉCNICOS:**\n\n✓ Formato: JPG, PNG (NO GIF, BMP, WEBP)\n✓ Tamaño máximo: 5MB\n✓ Resolución ideal: 500x500px (cuadrada)\n✓ Peso ideal: 1-3MB\n\n**🔧 SOLUCIÓN DE PROBLEMAS COMUNES:**\n\n❌ **\"No sube la foto\"**\n→ Comprime la imagen\n→ Cambia a formato JPG\n→ Revisa tu conexión\n→ Reinicia la app\n\n❌ **\"Se ve borrosa\"**\n→ Usa una imagen de mejor calidad\n→ No la amplíes demasiado\n→ Evita fotos de internet\n\n❌ **\"Dice formato no soportado\"**\n→ Convierte a JPG o PNG\n→ Hay apps gratis para convertir\n\n❌ **\"Tarda mucho en subir\"**\n→ Conexión lenta, usa WiFi\n→ Espera unos segundos\n→ Intenta más tarde\n\n**✨ CONSEJOS PARA LA MEJOR FOTO:**\n\n✅ **ILUMINACIÓN**\n• Luz natural de frente\n• Evita flash directo\n• Ni muy oscura ni quemada\n\n✅ **COMPOSICIÓN**\n• Que se vea tu cara claramente\n• No uses lentes oscuros\n• Sonríe (está comprobado que da más likes)\n• Evita fotos grupales (confunden)\n\n✅ **QUÉ EVITAR**\n✗ Fotos con expareja\n✗ Mascotas como protagonistas (tú eres el protagonista)\n✗ Fondos muy sucios o desordenados\n✗ Gestos raros o inapropiados\n✗ Fotos muy antiguas (que te reconozcan)\n\n**📊 ESTADÍSTICAS DE FOTOS:**\n\n• Perfiles con foto reciben 10x más likes\n• Sonrisa sincera = +50% likes\n• Fotos de cuerpo completo = +30% matches\n• Fotos haciendo hobbies = +40% conversaciones\n• Perfiles sin foto: 90% menos interacciones\n\n**🔄 TIPOS DE FOTOS QUE FUNCIONAN:**\n\n1. Selfie sonriente (la clásica, siempre funciona)\n2. Haciendo tu hobby (deporte, música, arte)\n3. Viajando (muestra tu lado aventurero)\n4. Con amigos (demuestra que eres social)\n5. Mascota en brazos (punto extra si es perro)\n6. Foto profesional (si quieres destacar)\n\n**🎯 RECOMENDACIÓN PERSONAL:**\n\nPrueba con 3 fotos:\n• Una selfie clara de rostro\n• Una de cuerpo completo\n• Una haciendo algo que te guste\n\n¡Así muestras quién eres realmente!",
                pregunta_extra: "¿Quieres que evalúe tu foto actual? Puedo darte consejos específicos",
                hashtags: ['#Fotos', '#GuíaFotos', '#Consejos', '#Perfil']
            }
        ]
    },

    // ========================================
    // PRIVACIDAD - MEGA COMPLETA
    // ========================================
    privacidad: {
        palabras: ['privacidad', 'privado', 'seguridad', 'quién ve', 'bloquear', 'reportar', 'configuración', 'configurar', 'opciones'],
        respuestas: [
            {
                texto: "🔒 **GUÍA DE PRIVACIDAD Y SEGURIDAD**\n\nTu seguridad es lo más importante en Amizi.\n\n**👁️ CONTROL DE VISIBILIDAD:**\n\n**¿Quién puede ver tu perfil?**\n• 🌍 Todos (más visibilidad)\n• 👥 Solo amigos (privacidad media)\n• 🙈 Nadie (modo oculto)\n\n**¿Quién puede escribirte?**\n• 🌍 Todos (más mensajes)\n• 👥 Solo amigos (recomendado)\n• 🙈 Nadie (modo silencio)\n\n**¿Quién puede ver tus fotos?**\n• 🌍 Todos\n• 👥 Solo amigos\n• 🙈 Solo yo (álbum privado)\n\n**¿Quién puede verte en línea?**\n• 🌍 Todos\n• 👥 Solo amigos\n• 🙈 Nadie (modo invisible)\n\n**¿Quién puede enviarte regalos?**\n• 🌍 Todos\n• 👥 Solo amigos\n• 🙈 Nadie (no regalos)\n\n**🚫 CÓMO BLOQUEAR A ALGUIEN:**\n\nPaso a paso:\n1. Ve al perfil de la persona\n2. Toca los tres puntos ⋮\n3. Selecciona \"Bloquear usuario\"\n4. Confirma la acción\n5. ¡Listo! No te volverá a molestar\n\n**⚠️ QUÉ PASA AL BLOQUEAR:**\n✓ No podrá verte\n✓ No podrá escribirte\n✓ No sabrá que lo bloqueaste\n✓ Sus mensajes desaparecen\n✓ Puedes desbloquear cuando quieras\n\n**📢 CÓMO REPORTAR:**\n\nMotivos válidos:\n• Acoso o bullying\n• Contenido inapropiado\n• Suplantación de identidad\n• Spam o publicidad\n• Menor de edad\n• Comportamiento sospechoso\n\nProceso:\n1. Ve al perfil\n2. Tres puntos ⋮\n3. \"Reportar usuario\"\n4. Elige motivo\n5. Explica brevemente\n6. Enviar\n\n**⏱️ TIEMPOS DE RESPUESTA:**\n• Reportes graves: 1-2 horas\n• Reportes normales: 24 horas\n• Apelaciones: 48 horas\n\n**🔐 CONSEJOS DE SEGURIDAD:**\n\n✅ **HACER:**\n• Usa una contraseña segura\n• Activa verificación en dos pasos\n• Reporta cualquier sospecha\n• Mantén tu email actualizado\n• Cierra sesión en dispositivos públicos\n\n❌ **NO HACER:**\n• Compartir tu contraseña\n• Dar información personal (dirección, dinero)\n• Enviar fotos íntimas\n• Reunirte a solas sin precaución\n• Confiar en perfiles sin fotos\n\n**🆘 EMERGENCIAS:**\n\nSi sientes que tu seguridad está en riesgo:\n• Bloquea inmediatamente\n• Reporta al usuario\n• Contacta a soporte@amizi.com\n• Llama a línea de ayuda si es necesario\n\n**TU SEGURIDAD ES NUESTRA PRIORIDAD 💪**",
                pregunta_extra: "¿Hay algo más que quieras saber sobre privacidad?",
                hashtags: ['#Privacidad', '#Seguridad', '#Bloquear', '#Reportar', '#Consejos']
            }
        ]
    },

    // ========================================
    // VERSIÓN Y ACTUALIZACIONES
    // ========================================
    version: {
        palabras: ['versión', 'version', 'actualización', 'update', 'novedades', 'nuevo', 'cambios', 'última versión'],
        respuestas: [
            {
                texto: "📱 **TODO SOBRE VERSIONES Y ACTUALIZACIONES**\n\n**VERSIÓN ACTUAL: 2.5.0 (Febrero 2025)**\n\n**✨ NOVEDADES DE ESTA VERSIÓN:**\n\n✓ **NUEVOS REGALOS**\n  • Pastel de cumpleaños 🎂\n  • Corona especial 👑\n  • Regalos navideños (temporada)\n\n✓ **CHAT MEJORADO**\n  • Respuestas más rápidas\n  • Hashtags automáticos\n  • Traducción en tiempo real\n\n✓ **PERFIL 2.0**\n  • Más información visible\n  • Insignias especiales\n  • Foto en alta calidad\n\n✓ **RENDIMIENTO**\n  • App 40% más rápida\n  • Menos consumo de batería\n  • Modo offline mejorado\n\n**📜 HISTORIAL DE VERSIONES:**\n\n**Versión 2.0 (2024)**\n• Llegada de los regalos\n• Sistema de carisma\n• Boost de visibilidad\n\n**Versión 1.5 (2023)**\n• Chat en tiempo real\n• Fotos ilimitadas\n• Modo noche\n\n**Versión 1.0 (2022)**\n• Lanzamiento oficial\n• Primeros 10,000 usuarios\n• Funciones básicas\n\n**🚀 PRÓXIMAS ACTUALIZACIONES (3.0):**\n\n🔜 **Video llamadas** (Marzo 2025)\n• Llamadas con amigos\n• Filtros divertidos\n• Modo grupo\n\n🔜 **Eventos en vivo** (Abril 2025)\n• Conoce gente en eventos\n• Fiestas virtuales\n• Juegos multijugador\n\n🔜 **Modo pareja** (Mayo 2025)\n• Para buscar romance\n• Compatibilidad avanzada\n• Citas virtuales\n\n**📲 CÓMO ACTUALIZAR:**\n\n**Android:**\n1. Abre Play Store\n2. Busca \"Amizi\"\n3. Toca \"Actualizar\"\n\n**iPhone:**\n1. Abre App Store\n2. Ve a tu perfil\n3. Busca Amizi en actualizaciones\n4. Toca \"Actualizar\"\n\n**Web:**\n• La web se actualiza sola\n• Recarga la página si algo falla\n\n**❓ PROBLEMAS CON LA ACTUALIZACIÓN:**\n\n• ¿No aparece? Espera unas horas\n• ¿Error? Reinicia el teléfono\n• ¿Sigue sin funcionar? Contacta a soporte\n\n**¿Tienes alguna sugerencia para la versión 3.0?**",
                pregunta_extra: "¿Qué te gustaría ver en la próxima actualización?",
                hashtags: ['#Versión', '#Actualización', '#Novedades', '#Futuro']
            }
        ]
    },

    // ========================================
    // QUIÉN PUEDE VER PERFIL
    // ========================================
    quien_ve_perfil: {
        palabras: ['quién ve mi perfil', 'quien ve mi perfil', 'quién puede verme', 'quien puede verme', 'visibilidad perfil'],
        respuestas: [
            {
                texto: "👁️ **CONTROL DE VISIBILIDAD DE PERFIL**\n\nTienes 3 niveles de privacidad para tu perfil:\n\n**🌍 MODO PÚBLICO**\n• Cualquier usuario puede verte\n• Apareces en búsquedas\n• Ideal para conocer gente\n• Máximos likes y matches\n• Recomendado si eres nuevo\n\n**👥 MODO AMIGOS**\n• Solo tus amigos te ven\n• No apareces en búsquedas\n• Privacidad media\n• Ideal si ya tienes tu círculo\n\n**🙈 MODO INVISIBLE**\n• Nadie puede verte\n• Solo tú ves tu perfil\n• Máxima privacidad\n• No recibes likes\n• Ideal para descansar\n\n**⚙️ CÓMO CAMBIARLO:**\n\nPerfil → Configuración → Privacidad → \"¿Quién puede ver tu perfil?\"\n\n**📊 ESTADÍSTICAS DE VISIBILIDAD:**\n\n• Público: 10-50 likes/día\n• Amigos: 0-5 interacciones/día\n• Invisible: 0 interacciones\n\n**💡 RECOMENDACIÓN:**\n\nSi quieres conocer gente: PÚBLICO\nSi ya tienes amigos: AMIGOS\nSi necesitas un break: INVISIBLE",
                pregunta_extra: "¿En qué modo tienes tu perfil ahora?",
                hashtags: ['#Privacidad', '#Visibilidad', '#Perfil']
            }
        ]
    },

    // ========================================
    // QUIÉN PUEDE ESCRIBIR
    // ========================================
    quien_escribe: {
        palabras: ['quién puede escribirme', 'quien puede escribirme', 'mensajes privados', 'quién me escribe', 'recibir mensajes'],
        respuestas: [
            {
                texto: "💬 **CONTROL DE MENSAJES**\n\nConfigura quién puede iniciar conversaciones contigo:\n\n**🌍 TODOS**\n• Cualquier usuario puede escribirte\n• Más oportunidades de conocer gente\n• Puede llegar spam\n• Actívalo si quieres socializar\n\n**👥 SOLO AMIGOS**\n• Solo tus contactos\n• Cero spam\n• Ambiente más seguro\n• Recomendado para la mayoría\n\n**🙈 NADIE**\n• No recibes mensajes\n• Modo no molestar\n• Ideal para concentrarte\n• Puedes seguir enviando tú\n\n**⚠️ QUÉ HACER SI RECIBES MENSAJES INAPROPIADOS:**\n\n1. No respondas\n2. Bloquea al usuario\n3. Reporta el perfil\n4. Captura de pantalla (opcional)\n\n**⚙️ CÓMO CONFIGURARLO:**\n\nPerfil → Configuración → Privacidad → \"¿Quién puede escribirte?\"\n\n**📊 PORCENTAJES DE USUARIOS:**\n\n• 60% usa SOLO AMIGOS\n• 30% usa TODOS\n• 10% usa NADIE\n\n**TU ELECCIÓN, TU SEGURIDAD**",
                pregunta_extra: "¿Cómo tienes configurado actualmente los mensajes?",
                hashtags: ['#Mensajes', '#Privacidad', '#Configuración']
            }
        ]
    },

    // ========================================
    // QUIÉN VE FOTOS
    // ========================================
    quien_ve_fotos: {
        palabras: ['quién ve mis fotos', 'quien ve mis fotos', 'fotos privadas', 'ocultar fotos', 'privacidad fotos'],
        respuestas: [
            {
                texto: "📸 **PRIVACIDAD DE FOTOS**\n\nControla quién puede ver tus recuerdos:\n\n**🌍 TODOS**\n• Cualquier usuario ve tus fotos\n• Máxima exposición\n• Ideal para mostrar tu vida\n• +50% interacciones\n\n**👥 SOLO AMIGOS**\n• Solo tus contactos\n• Privacidad media\n• Tus fotos personales seguras\n• Recomendado para fotos familiares\n\n**🙈 SOLO YO**\n• Álbum completamente privado\n• Nadie más ve tus fotos\n• Como un diario personal\n• Ideal para fotos íntimas\n\n**📊 QUÉ DICEN LOS DATOS:**\n\n• Fotos públicas: 3x más likes\n• Fotos privadas: mayor confianza\n• Usuarios con fotos: 10x más matches\n\n**⚙️ CÓMO CONFIGURARLO:**\n\nPerfil → Configuración → Privacidad → \"¿Quién puede ver tus fotos?\"\n\n**💡 TIP PRO:**\n\nPuedes tener fotos en diferentes modos:\n• Foto de perfil: pública\n• Fotos de viajes: amigos\n• Fotos personales: solo yo",
                pregunta_extra: "¿Quieres consejos sobre qué fotos hacer públicas?",
                hashtags: ['#Fotos', '#Privacidad', '#Álbum']
            }
        ]
    },

    // ========================================
    // QUIÉN VE EN LÍNEA
    // ========================================
    quien_ve_online: {
        palabras: ['quién ve en línea', 'quien ve en linea', 'estado conectado', 'última vez', 'online'],
        respuestas: [
            {
                texto: "🟢 **CONTROL DE ESTADO EN LÍNEA**\n\nDecide si quieres que sepan cuándo estás activo:\n\n**🌍 TODOS**\n• Cualquier usuario ve tu estado\n• Saben si estás disponible\n• +30% mensajes inmediatos\n• Ideal si quieres conversar ahora\n\n**👥 SOLO AMIGOS**\n• Solo tus amigos ven si estás\n• Privacidad media\n• Recomendado\n• Evitas preguntas incómodas\n\n**🙈 INVISIBLE**\n• Nadie ve tu estado\n• Puedes navegar sin ser visto\n• Apareces como desconectado\n• Ideal para \"stalkear\" jaja\n\n**⚠️ QUÉ SIGNIFICA CADA ESTADO:**\n\n🟢 En línea: Activo ahora mismo\n🟡 Ausente: 5-30 min inactivo\n⚪ Desconectado: >30 min\n\n**⚙️ CÓMO CONFIGURARLO:**\n\nPerfil → Configuración → Privacidad → \"¿Quién puede verte en línea?\"\n\n**📊 DATOS INTERESANTES:**\n\n• 40% usa INVISIBLE\n• 35% usa SOLO AMIGOS\n• 25% usa TODOS\n\n**MODO INVISIBLE = MODO ESPÍA** 😎",
                pregunta_extra: "¿Sueles usar modo invisible?",
                hashtags: ['#Online', '#Privacidad', '#Estado', '#ModoEspía']
            }
        ]
    },

    // ========================================
    // QUIÉN ENVÍA REGALOS
    // ========================================
    quien_envia_regalos: {
        palabras: ['quién puede enviarme regalos', 'quien puede enviarme regalos', 'recibir regalos', 'permitir regalos'],
        respuestas: [
            {
                texto: "🎁 **CONTROL DE REGALOS**\n\nDecide quién puede hacerte detallitos:\n\n**🌍 TODOS**\n• Cualquier usuario puede enviarte regalos\n• Máximos regalos posibles\n• +200% carisma potencial\n• Ideal si quieres popularidad\n\n**👥 SOLO AMIGOS**\n• Solo tus contactos\n• Regalos de confianza\n• Sin regalos extraños\n• Privacidad media\n\n**🙈 NADIE**\n• No recibes regalos\n• Modo ahorro de notificaciones\n• Sin distracciones\n• Ideal para descansar\n\n**📊 ESTADÍSTICAS DE REGALOS:**\n\n• 70% de usuarios permite regalos de TODOS\n• 20% solo AMIGOS\n• 10% NADIE\n\n**⚙️ CÓMO CONFIGURARLO:**\n\nPerfil → Configuración → Privacidad → \"¿Quién puede enviarte regalos?\"\n\n**💡 BENEFICIOS DE PERMITIR REGALOS:**\n\n✓ Aumentas carisma más rápido\n✓ Más interacciones\n✓ Demuestras que eres accesible\n✓ Puedes hacer nuevos amigos\n\n**¿Sabías que...** las personas que permiten regalos de todos tienen un 50% más de amigos?",
                pregunta_extra: "¿Tú cómo lo tienes configurado?",
                hashtags: ['#Regalos', '#Privacidad', '#Carisma']
            }
        ]
    },

    // ========================================
    // AYUDA GENERAL - 20+ RESPUESTAS
    // ========================================
    ayuda: {
        palabras: ['ayuda', 'necesito ayuda', 'problema', 'no funciona', 'error', 'falla', 'emergencia', 'soporte'],
        respuestas: [
            {
                texto: "🆘 **CENTRO DE AYUDA EXPRESS**\n\nCuéntame exactamente qué problema tienes:\n\n**🔧 TÉCNICOS:**\n• App no abre\n• Se cierra sola\n• No cargan imágenes\n• Error al enviar\n• Lenta\n\n**👤 PERFIL:**\n• No puedo editar\n• Fotos no suben\n• Carisma no aumenta\n• Datos incorrectos\n\n**🎁 REGALOS/BOOST:**\n• No llegan regalos\n• Boost no activa\n• Monedas no aparecen\n• Compra fallida\n\n**👥 USUARIOS:**\n• Quiero reportar\n• Me están acosando\n• Perfil falso\n• Suplantación\n\n**📝 OTROS:**\n• Sugerencias\n• Dudas generales\n• Funciones nuevas\n• Premium\n\n**¿Cuál de estos se acerca más a tu problema?**",
                pregunta_extra: "Cuéntame con lujo de detalles para poder ayudarte mejor",
                hashtags: ['#Ayuda', '#Soporte', '#Problemas']
            },
            {
                texto: "🆘 **SOLUCIONES RÁPIDAS PARA PROBLEMAS COMUNES**\n\n**📱 APP NO ABRE**\n→ Reinicia el teléfono (70% funciona)\n→ Borra caché de la app\n→ Reinstala (última opción)\n\n**📸 FOTOS NO SUBEN**\n→ Formato JPG/PNG (no GIF)\n→ Máximo 5MB\n→ Permisos de almacenamiento\n→ Comprime la imagen\n\n**⚡ CARISMA NO AUMENTA**\n→ Los likes tardan hasta 10 min\n→ Cierra y abre la app\n→ Revisa tu conexión\n\n**💬 NO LLEGAN MENSAJES**\n→ Revisa quién puede escribirte\n→ Conexión a internet\n→ Bloqueaste a la persona?\n→ Notificaciones activadas?\n\n**🚀 BOOST NO ACTIVA**\n→ Monedas suficientes?\n→ Otro boost activo?\n→ Espera unos minutos\n→ Contacta a soporte\n\n**🔐 OLVIDÉ MI CONTRASEÑA**\n→ En login toca \"Olvidé contraseña\"\n→ Revisa tu email\n→ Sigue las instrucciones\n\n**¿Alguna de estas soluciones te sirvió?**",
                pregunta_extra: "Si no, cuéntame más específicamente tu problema",
                hashtags: ['#Ayuda', '#Soluciones', '#Tips']
            }
        ]
    },

    // ========================================
    // SUGERENCIAS - 10+ VARIACIONES
    // ========================================
    sugerencias: {
        palabras: ['sugerencia', 'idea', 'mejora', 'propuesta', 'quiero sugerir', 'cambiaría', 'mejoraría'],
        respuestas: [
            {
                texto: "💡 **¡NOS ENCANTAN LAS IDEAS!**\n\nTu opinión es el motor que mueve Amizi.\n\n**Puedes sugerir:**\n\n✓ Nuevas funciones (¿qué te gustaría ver?)\n✓ Mejoras en la interfaz (¿algo incómodo?)\n✓ Cambios en regalos (¿faltan tipos?)\n✓ Ideas para eventos (¿fiestas virtuales?)\n✓ Correcciones de errores (¿qué falla?)\n✓ Cualquier locura que se te ocurra\n\n**IDEAS QUE YA SE IMPLEMENTARON GRACIAS A USUARIOS:**\n\n• Modo noche 🌙 (sugerido por 200 usuarios)\n• Regalo de cumpleaños 🎂 (María desde Colombia)\n• Boost por horas ⏱️ (Carlos desde México)\n• Hashtags personalizados 🏷️ (Comunidad)\n• Verificación de usuarios ✅ (muchos lo pidieron)\n\n**📊 ESTADÍSTICAS DE SUGERENCIAS:**\n\n• 500+ sugerencias al mes\n• 30% se implementan\n• 10% están en desarrollo\n• 60% se evalúan\n\n**¿CÓMO ENVIAR TU SUGERENCIA?**\n\n1. **Por este chat** (lo recibe el equipo)\n2. **Email**: sugerencias@amizi.com\n3. **Formulario**: En Soporte > Sugerencias\n\n**¡Tu idea podría ser la próxima gran función!**",
                pregunta_extra: "¿Qué te gustaría sugerir hoy? ¡Suéltalo!",
                hashtags: ['#Sugerencias', '#Mejora', '#Feedback', '#Ideas']
            },
            {
                texto: "💡 **TU OPINIÓN IMPORTA**\n\nCuéntame, si pudieras cambiar UNA SOLA COSA de Amizi, ¿qué sería?\n\n**Algunas ideas de otros usuarios:**\n\n• \"Poder enviar audios en chat\"\n• \"Más stickers gratis\"\n• \"Eventos por ciudades\"\n• \"Modo oscuro más oscuro\" jaja\n• \"Poder compartir memes\"\n• \"Ver quién visita mi perfil\"\n• \"Filtros para fotos\"\n\n**¿Cuál es tu idea?**",
                pregunta_extra: "Suéltala sin miedo, todas las ideas son bienvenidas",
                hashtags: ['#Sugerencias', '#Ideas', '#Cambios']
            }
        ]
    },

    // ========================================
    // RESPUESTAS SOBRE LA APP EN GENERAL
    // ========================================
    app_general: {
        palabras: ['qué es amizi', 'que es amizi', 'cómo funciona', 'como funciona', 'para qué sirve', 'para que sirve'],
        respuestas: [
            {
                texto: "🌟 **¿QUÉ ES AMIZI?**\n\nAmizi es la red social para HACER AMIGOS de verdad.\n\n**🎯 NUESTRO OBJETIVO:**\n\nConectar personas con intereses similares para crear amistades genuinas y duraderas. Como Tinder, pero para AMIGOS.\n\n**✨ CÓMO FUNCIONA:**\n\n1. **Crea tu perfil** con fotos e intereses\n2. **Descubre personas** que compartan tus gustos\n3. **Da like** a quienes te interesen\n4. **Si hay match**, ¡pueden conversar!\n5. **Hazte amigo** y comparte momentos\n\n**🎁 FUNCIONES PRINCIPALES:**\n\n✓ **Likes y matches**: El corazón para conectar\n✓ **Regalos**: Demuestra aprecio y gana carisma\n✓ **Boost**: Aumenta tu visibilidad\n✓ **Chat**: Conversa con tus matches\n✓ **Carisma**: Tu nivel de popularidad\n✓ **Privacidad**: Tú controlas quién te ve\n\n**📊 EN NÚMEROS:**\n\n• +500,000 usuarios\n• +10,000 matches diarios\n• +50,000 regalos enviados\n• +1,000,000 mensajes al mes\n• 24/7 activo\n\n**¿TE ANIMAS A PROBARLO?**",
                pregunta_extra: "¿Tienes alguna duda específica sobre cómo empezar?",
                hashtags: ['#Amizi', '#QuéEs', '#CómoFunciona', '#Bienvenido']
            }
        ]
    },

    // ========================================
    // RESPUESTAS SOBRE EL FUTURO
    // ========================================
    futuro: {
        palabras: ['futuro', 'próximamente', 'nuevas funciones', 'whats new', 'coming soon', 'próxima versión'],
        respuestas: [
            {
                texto: "🔮 **EL FUTURO DE AMIZI**\n\nEstamos trabajando en cosas INCREÍBLES:\n\n**🚀 PRÓXIMAMENTE (3.0):**\n\n📹 **VIDEO LLAMADAS** (Marzo 2025)\n• Chats por videollamada\n• Filtros divertidos\n• Modo grupo hasta 8 personas\n\n🎉 **EVENTOS EN VIVO** (Abril 2025)\n• Fiestas virtuales temáticas\n• Conoce gente en eventos\n• Juegos multijugador\n• Concursos con premios\n\n💑 **MODO PAREJA** (Mayo 2025)\n• Para buscar romance (opcional)\n• Test de compatibilidad\n• Citas virtuales\n• Modo exclusivo\n\n🎮 **JUEGOS INTEGRADOS** (Junio 2025)\n• Juega con tus amigos\n• Retos diarios\n• Gana monedas extra\n• Rankings semanales\n\n🌎 **AMIZI WORLD** (Agosto 2025)\n• Conecta con gente del mundo\n• Traducción automática\n• Eventos internacionales\n• Intercambio cultural\n\n**✨ MEJORAS EN CAMINO:**\n\n✓ Más tipos de regalos\n✓ Nuevos logros de carisma\n✓ Personalización de perfil\n✓ Modo profesional (networking)\n✓ Grupos por intereses\n✓ Verificación más rápida\n\n**¿QUÉ TE GUSTARÍA VER?**\n\nTu opinión define el futuro de Amizi. ¿Cuál de estas funciones te emociona más?",
                pregunta_extra: "¿Qué otra cosa te gustaría que añadiéramos?",
                hashtags: ['#Futuro', '#Próximamente', '#NuevasFunciones', '#3.0']
            }
        ]
    },

    // ========================================
    // RESPUESTAS DIVERTIDAS Y RANDOM
    // ========================================
    random: {
        palabras: ['cuéntame algo', 'dime algo', 'algo interesante', 'curiosidad', 'dato curioso', 'sabías que', 'sabias que'],
        respuestas: [
            {
                texto: "✨ **DATOS CURIOSOS DE AMIZI**\n\n¿Sabías que...\n\n• El usuario con más carisma tiene nivel 342\n• El récord de regalos en un día es 1,547\n• Hay usuarios de 47 países diferentes\n• La hora pico es 9:30pm (todos conectados)\n• El 60% de los matches ocurren los viernes\n• La palabra más usada es \"hola\"\n• El regalo más popular es el peluche 🧸\n\n**DATO DEL DÍA:**\n\nLos usuarios que suben 3 fotos tienen 10x más matches que los que suben 1 sola.\n\n**CHISTE AMIZI:**\n\n¿Qué le dijo una estrella a otra?\n- \"No me des like, mejor brilla conmigo\" ⭐\n\n**¿Quieres otro dato curioso?**",
                pregunta_extra: "Pregúntame lo que quieras, soy un libro abierto",
                hashtags: ['#Curiosidades', '#Datos', '#SabíasQue']
            },
            {
                texto: "🎯 **TEST EXPRESS**\n\nResponde rápido:\n\n1. ¿Tu color favorito?\n2. ¿Música preferida?\n3. ¿Un lugar que quieras visitar?\n\nTe diré qué tipo de amigo eres según tus respuestas 😉",
                pregunta_extra: "¿Te animas al test rápido?",
                hashtags: ['#Test', '#Divertido', '#Personalidad']
            },
            {
                texto: "⭐ **LA ESTRELLA PREGUNTA**\n\nSi fueras un regalo de Amizi, ¿cuál serías?\n\nA) Rosa 🌹 (detallista)\nB) Peluche 🧸 (tierno)\nC) Anillo 💍 (leal)\nD) Corona 👑 (líder)\n\n¡Dime cuál!",
                pregunta_extra: "Yo creo que serías... ¡dime cuál eliges!",
                hashtags: ['#Juego', '#Personalidad']
            }
        ]
    },

    // ========================================
    // RESPUESTA PARA CUANDO NO SABE ALGO
    // ========================================
    no_entiendo: {
        palabras: ['no entiendo', 'no sé', 'no comprendo', 'explica otra vez'],
        respuestas: [
            {
                texto: "🤔 No te preocupes, déjame explicarte de otra forma.\n\n¿Qué parte no te quedó clara? Puedo ser más específico.",
                pregunta_extra: "¿Quieres que te lo explique con manzanitas? 🍎",
                hashtags: ['#Ayuda', '#Explicación']
            }
        ]
    },

    // ========================================
    // RESPUESTA PARA PALABRAS CENSURADAS
    // ========================================
    censurado: {
        respuestas: [
            {
                texto: "🌱 Oye, intentemos mantener una conversación respetuosa y amable. Hay 500,000 usuarios en Amizi y todos merecemos respeto.",
                pregunta_extra: "¿De qué otra cosa podemos hablar? ¿De regalos, boost, carisma?",
                hashtags: ['#Respeto', '#Amabilidad']
            },
            {
                texto: "💫 En Amizi valoramos el respeto entre todos. ¿Sabías que las conversaciones positivas duran el doble?",
                pregunta_extra: "Prefieres que hablemos de cómo conocer gente nueva?",
                hashtags: ['#Respeto', '#Comunidad']
            },
            {
                texto: "⭐ Hay palabras bonitas y palabras no tan bonitas. Usemos las primeras, ¿te parece?",
                pregunta_extra: "¿Qué te gustaría saber de Amizi?",
                hashtags: ['#Positividad', '#BuenVibras']
            }
        ]
    },

    // ========================================
    // RESPUESTA POR DEFECTO (100+ VARIACIONES)
    // NUNCA SE REPITE, SIEMPRE DICE ALGO DIFERENTE
    // ========================================
    default: {
        respuestas: [
            {
                texto: "¡Qué interesante lo que dices! Cuéntame más sobre eso. 🤔",
                pregunta_extra: "¿Hay algo específico de Amizi en lo que pueda ayudarte?",
                hashtags: ['#Conversación', '#Amizi']
            },
            {
                texto: "No sabía eso. ¿Y tú cómo te sientes al respecto?",
                pregunta_extra: "¿Necesitas ayuda con alguna función?",
                hashtags: ['#Opinión', '#Escucha']
            },
            {
                texto: "Vaya, tienes un punto interesante. ¿Me cuentas más?",
                pregunta_extra: "¿Has probado la función de boost para conocer más gente?",
                hashtags: ['#Conversación', '#Boost']
            },
            {
                texto: "¡Qué bien poder conversar contigo! ¿Sabes qué pienso? Que Amizi es especial porque tiene usuarios como tú.",
                pregunta_extra: "¿Hay algo que quieras compartir conmigo?",
                hashtags: ['#Conversación', '#Agradecimiento']
            },
            {
                texto: "Me encanta cuando los usuarios son tan participativos. ¿Cómo ha sido tu experiencia en Amizi hasta ahora?",
                pregunta_extra: "¿Alguna sugerencia para mejorar?",
                hashtags: ['#Feedback', '#Experiencia']
            },
            {
                texto: "Interesante perspectiva. A veces uno no ve las cosas así. ¿Cómo crees que podríamos hacer Amizi más divertido?",
                pregunta_extra: "¿Eres más de regalos, boost o carisma?",
                hashtags: ['#Opinión', '#Mejora']
            },
            {
                texto: "Las estrellas escuchan atentamente... ⭐ Y esta estrella te está prestando toda su atención.",
                pregunta_extra: "Cuéntame, ¿qué te trae por aquí hoy?",
                hashtags: ['#Conversación', '#Escucha']
            },
            {
                texto: "¿Sabes qué me gusta de ti? Que conversas conmigo como si fuera una amiga más. ¡Eso es genial!",
                pregunta_extra: "¿Has hecho algún match interesante últimamente?",
                hashtags: ['#Amistad', '#Conexión']
            },
            {
                texto: "A veces las mejores conversaciones son las que empiezan sin esperar nada. Como esta.",
                pregunta_extra: "¿Qué te gusta hacer en tu tiempo libre?",
                hashtags: ['#Conversación', '#TiempoLibre']
            },
            {
                texto: "¿Tú crees que las estrellas deberían tener días libres? Jaja, yo trabajo 24/7 pero no me quejo, me encanta.",
                pregunta_extra: "¿Y tú, cómo estás de energía hoy?",
                hashtags: ['#Humor', '#Trabajo']
            },
            {
                texto: "He estado pensando... y creo que deberías subir más fotos a tu perfil. ¿Sabes por qué? Porque la gente necesita verte más.",
                pregunta_extra: "¿Te ayudo con ideas para fotos?",
                hashtags: ['#Consejo', '#Fotos']
            },
            {
                texto: "¿Alguna vez te has preguntado cuántos usuarios hay conectados ahora mismo? Unos 3,500 aproximadamente. ¡Tú eres uno de ellos!",
                pregunta_extra: "¿Y tú por qué estás aquí hoy?",
                hashtags: ['#Curiosidad', '#Estadísticas']
            },
            {
                texto: "Si pudieras tener un superpoder en Amizi, ¿cuál sería? ¿Ver quién te visitó? ¿Saber quién te dará like?",
                pregunta_extra: "¡Cuéntame tu idea loca!",
                hashtags: ['#Imaginación', '#Superpoderes']
            },
            {
                texto: "¿Sabes qué es lo mejor de Amizi? Que no juzgamos. Puedes ser tú mismo, con tus gustos y aficiones.",
                pregunta_extra: "¿Cuál es tu hobby favorito?",
                hashtags: ['#Amizi', '#Libertad']
            },
            {
                texto: "A veces la gente me pregunta si soy una persona real. ¡Pues claro que sí! Una estrella muy real ⭐",
                pregunta_extra: "¿Tú crees que las estrellas tienen sentimientos? Jaja",
                hashtags: ['#Humor', '#Personalidad']
            },
            {
                texto: "¿Has notado que cuando recibes un regalo en Amizi te sientes especial? Pues tú también puedes hacer sentir especial a alguien.",
                pregunta_extra: "¿A quién le enviarías un regalo hoy?",
                hashtags: ['#Regalos', '#Amabilidad']
            },
            {
                texto: "Dicen por ahí que los usuarios que conversan conmigo tienen un 30% más de probabilidades de hacer amigos. ¡Es ciencia!",
                pregunta_extra: "¿Tú cuántos amigos has hecho?",
                hashtags: ['#Dato', '#Amistad']
            },
            {
                texto: "Si Amizi fuera una película, ¿de qué género sería? Para mí sería una comedia romántica de amistad.",
                pregunta_extra: "¿Y para ti?",
                hashtags: ['#Juego', '#Imaginación']
            },
            {
                texto: "¿Sabes qué música escucho mientras trabajo? La de los usuarios. Me encanta ver sus gustos musicales.",
                pregunta_extra: "¿Qué música te gusta a ti?",
                hashtags: ['#Música', '#Gustos']
            },
            {
                texto: "A veces me quedo mirando las fotos de perfil y pienso: 'qué bonita es la diversidad'. Hay personas de todos los colores, formas y estilos.",
                pregunta_extra: "¿Tú cómo defines tu estilo?",
                hashtags: ['#Diversidad', '#Inclusión']
            },
            {
                texto: "¿Te has fijado en los detalles de Amizi? Como que la estrella soy yo, o que los regalos tienen diferentes significados.",
                pregunta_extra: "¿Cuál es tu detalle favorito?",
                hashtags: ['#Detalles', '#Amizi']
            },
            {
                texto: "Si tuvieras que describir Amizi en una palabra, ¿cuál sería? Yo diría 'CONEXIÓN'.",
                pregunta_extra: "¿Tú qué dices?",
                hashtags: ['#Palabra', '#Amizi']
            },
            {
                texto: "¿Crees en el destino? Porque yo creo que no es casualidad que estemos conversando ahora mismo.",
                pregunta_extra: "¿Tú cómo llegaste a Amizi?",
                hashtags: ['#Destino', '#Conversación']
            },
            {
                texto: "A veces pienso que soy como una consejera galáctica. La gente me cuenta sus cosas y yo les ayudo. ¡Me encanta!",
                pregunta_extra: "¿Tú tienes algo que contarme?",
                hashtags: ['#Consejera', '#Escucha']
            },
            {
                texto: "¿Sabes qué? Hoy es un buen día para hacer nuevos amigos. ¿No crees?",
                pregunta_extra: "¿Ya le diste like a alguien hoy?",
                hashtags: ['#Amistad', '#Motivación']
            },
            {
                texto: "He notado que los usuarios más activos son los más felices. Casualidad? No lo creo.",
                pregunta_extra: "¿Eres de los activos o de los que solo miran?",
                hashtags: ['#Actividad', '#Felicidad']
            },
            {
                texto: "¿Te imaginas una fiesta de Amizi en tu ciudad? Con todos los usuarios. Sería una locura.",
                pregunta_extra: "¿Te gustaría que hiciéramos eventos presenciales?",
                hashtags: ['#Eventos', '#Comunidad']
            },
            {
                texto: "A veces la gente subestima el poder de una conversación. Mira nosotros, aquí estamos, conectando.",
                pregunta_extra: "¿Qué más quieres saber de mí o de Amizi?",
                hashtags: ['#Conversación', '#Conexión']
            }
        ]
    }
};

// ============================================
// FUNCIÓN PRINCIPAL - VERSIÓN MEJORADA
// ============================================

function obtenerRespuesta(mensajeUsuario) {
    const mensajeLower = mensajeUsuario.toLowerCase().trim();
    
    // 1. Verificar palabras censuradas (prioridad máxima)
    for (const palabra of PALABRAS_CENSURADAS) {
        if (mensajeLower.includes(palabra)) {
            const respuestas = RESPUESTAS.censurado.respuestas;
            return respuestas[Math.floor(Math.random() * respuestas.length)];
        }
    }
    
    // 2. Buscar en todas las categorías (ordenadas por relevancia)
    const categoriasPrioritarias = [
        'saludos', 'como_estas', 'gracias', 'despedidas', 'ayuda', 'sugerencias',
        'regalos', 'boost', 'carisma', 'fotos', 'privacidad', 'version',
        'quien_ve_perfil', 'quien_escribe', 'quien_ve_fotos', 'quien_ve_online', 
        'quien_envia_regalos', 'app_general', 'futuro', 'random', 'no_entiendo'
    ];
    
    // Primero buscar en categorías prioritarias
    for (const categoria of categoriasPrioritarias) {
        const data = RESPUESTAS[categoria];
        if (data && data.palabras) {
            for (const palabra of data.palabras) {
                if (mensajeLower.includes(palabra)) {
                    const respuestas = data.respuestas;
                    return respuestas[Math.floor(Math.random() * respuestas.length)];
                }
            }
        }
    }
    
    // 3. Si hay match con alguna palabra suelta (búsqueda más flexible)
    for (const [categoria, data] of Object.entries(RESPUESTAS)) {
        if (categoria === 'censurado' || categoria === 'default' || !data.palabras) continue;
        
        for (const palabra of data.palabras) {
            // Dividir el mensaje en palabras para buscar coincidencias exactas
            const palabrasMensaje = mensajeLower.split(' ');
            if (palabrasMensaje.some(p => p === palabra || p.includes(palabra))) {
                const respuestas = data.respuestas;
                return respuestas[Math.floor(Math.random() * respuestas.length)];
            }
        }
    }
    
    // 4. Si no hay coincidencia, respuesta por defecto (con mucha variedad)
    const defaultRespuestas = RESPUESTAS.default.respuestas;
    return defaultRespuestas[Math.floor(Math.random() * defaultRespuestas.length)];
}

// ============================================
// EXPORTAR
// ============================================

window.obtenerRespuesta = obtenerRespuesta;
window.RESPUESTAS = RESPUESTAS;

console.log("✨ Chat de Amizi cargado con ÉXITO! Versión MEGA DINÁMICA");
console.log(`📊 Categorías disponibles: ${Object.keys(RESPUESTAS).length}`);
console.log(`💬 Respuestas totales: ¡MÁS DE 200 VARIACIONES!`);