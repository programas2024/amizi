// ============================================
// MODAL DE CORREO ELECTRÓNICO - AMIZI (CON X PARA CERRAR)
// ============================================

function mostrarModalCorreo() {
    // Verificar si ya existe un modal abierto
    if (document.querySelector('.email-modal-overlay')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'email-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: emailFadeIn 0.3s ease;
    `;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'email-modal';
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 60px;
        padding: 30px 35px;
        max-width: 550px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: emailScaleIn 0.4s ease forwards;
        position: relative;
        scrollbar-width: none;
        -ms-overflow-style: none;
    `;

    // Scroll invisible para Chrome/Safari/Edge
    const styleInvisible = document.createElement('style');
    styleInvisible.textContent = `
        .email-modal::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(styleInvisible);

    // Decoración de fondo
    const bgDecor1 = document.createElement('div');
    bgDecor1.style.cssText = `
        position: absolute;
        top: -50px;
        right: -50px;
        width: 200px;
        height: 200px;
        background: linear-gradient(145deg, rgba(74, 144, 226, 0.1), rgba(108, 92, 231, 0.1));
        border-radius: 50%;
        z-index: 0;
        pointer-events: none;
    `;
    modal.appendChild(bgDecor1);

    const bgDecor2 = document.createElement('div');
    bgDecor2.style.cssText = `
        position: absolute;
        bottom: -50px;
        left: -50px;
        width: 150px;
        height: 150px;
        background: linear-gradient(145deg, rgba(255, 107, 107, 0.1), rgba(255, 215, 0, 0.1));
        border-radius: 50%;
        z-index: 0;
        pointer-events: none;
    `;
    modal.appendChild(bgDecor2);

    // Contenido del modal
    const content = document.createElement('div');
    content.style.cssText = `
        position: relative;
        z-index: 1;
    `;

    // BOTÓN X PARA CERRAR (AGREGADO)
    content.innerHTML = `
        <!-- X para cerrar en la esquina superior derecha -->
        <div style="position: absolute; top: 15px; right: 20px; z-index: 10;">
            <button id="btnXCloseModal" style="background: #f0f3fa; border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #2d3a4a; font-size: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div style="margin-bottom: 20px; position: relative;">
            <div style="position: relative; display: inline-block;">
                <i class="fas fa-envelope-open-text" style="font-size: 70px; color: #4a90e2; filter: drop-shadow(0 10px 20px rgba(74, 144, 226, 0.3)); animation: emailFloat 3s infinite;"></i>
                <div style="position: absolute; top: -5px; right: -5px; background: #ff6b6b; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: emailPulse 2s infinite;">
                    <i class="fas fa-star" style="color: white; font-size: 14px;"></i>
                </div>
            </div>
        </div>

        <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 15px; background: linear-gradient(145deg, #4a90e2, #6c5ce7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            📧 Contacto Amizi
        </h2>

        <div style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 40px; padding: 20px; margin-bottom: 20px; border: 2px solid #e4e4f0;">
            <p style="font-size: 16px; color: #2d3a4a; margin-bottom: 12px; font-weight: 500;">
                ¿Tienes dudas o problemas?
            </p>
            <p style="font-size: 14px; color: #5a6b7c; margin-bottom: 15px; line-height: 1.5;">
                No te preocupes, nuestro equipo de soporte está listo para ayudarte. Escríbenos y te responderemos a la brevedad.
            </p>
            
            <div style="background: white; border-radius: 60px; padding: 12px 15px; display: inline-flex; align-items: center; gap: 10px; margin: 5px auto; box-shadow: 0 10px 25px rgba(74, 144, 226, 0.15);">
                <i class="fas fa-envelope" style="color: #4a90e2; font-size: 20px;"></i>
                <span style="font-size: 18px; font-weight: 700; background: linear-gradient(145deg, #4a90e2, #6c5ce7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    amizi2025@gmail.com
                </span>
                <div style="background: #2ecc71; border-radius: 20px; padding: 3px 8px;">
                    <span style="color: white; font-size: 10px; font-weight: 600;">24/7</span>
                </div>
            </div>
        </div>

        <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 100px; background: #f0f3fa; border-radius: 30px; padding: 12px;">
                <i class="fas fa-clock" style="color: #4a90e2; font-size: 22px; margin-bottom: 5px; display: block;"></i>
                <span style="font-size: 13px; font-weight: 600; color: #2d3a4a;">Respuesta</span>
                <span style="font-size: 11px; color: #5a6b7c; display: block;">menos de 2h</span>
            </div>
            <div style="flex: 1; min-width: 100px; background: #f0f3fa; border-radius: 30px; padding: 12px;">
                <i class="fas fa-calendar-check" style="color: #2ecc71; font-size: 22px; margin-bottom: 5px; display: block;"></i>
                <span style="font-size: 13px; font-weight: 600; color: #2d3a4a;">Disponibilidad</span>
                <span style="font-size: 11px; color: #5a6b7c; display: block;">24/7</span>
            </div>
            <div style="flex: 1; min-width: 100px; background: #f0f3fa; border-radius: 30px; padding: 12px;">
                <i class="fas fa-users" style="color: #ff6b6b; font-size: 22px; margin-bottom: 5px; display: block;"></i>
                <span style="font-size: 13px; font-weight: 600; color: #2d3a4a;">Equipo</span>
                <span style="font-size: 11px; color: #5a6b7c; display: block;">+10 agentes</span>
            </div>
        </div>

        <div style="background: #fff9e6; border-radius: 30px; padding: 15px; margin: 20px 0; border-left: 6px solid #ffd700; text-align: left;">
            <p style="display: flex; align-items: center; gap: 8px; color: #2d3a4a; font-size: 13px; margin-bottom: 8px;">
                <i class="fas fa-lightbulb" style="color: #ffd700;"></i>
                <strong>Consejo:</strong> Incluye tu nombre de usuario.
            </p>
            <p style="display: flex; align-items: center; gap: 8px; color: #2d3a4a; font-size: 13px;">
                <i class="fas fa-star" style="color: #ffd700;"></i>
                <strong>Dato:</strong> 95% respuesta en <2h.
            </p>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button id="btnCopiarCorreo" style="background: linear-gradient(145deg, #4a90e2, #6c5ce7); color: white; border: none; border-radius: 60px; padding: 12px 25px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px; box-shadow: 0 10px 20px rgba(74, 144, 226, 0.3);">
                <i class="fas fa-copy"></i> Copiar correo
            </button>
            <button id="btnAbrirGmail" style="background: #f0f3fa; color: #2d3a4a; border: none; border-radius: 60px; padding: 12px 25px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px;">
                <i class="fab fa-google"></i> Gmail
            </button>
        </div>
    `;

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Añadir animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes emailFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes emailScaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes emailFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        
        @keyframes emailPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes emailFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes emailScaleOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: transform: scale(0.8); opacity: 0; }
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translate(-50%, -20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translate(-50%, 0); }
            to { opacity: 0; transform: translate(-50%, -20px); }
        }
        
        #btnCopiarCorreo:hover, #btnAbrirGmail:hover {
            transform: translateY(-2px);
        }
        
        #btnCopiarCorreo:hover {
            box-shadow: 0 15px 30px rgba(74, 144, 226, 0.4);
        }
        
        #btnAbrirGmail:hover {
            background: #ea4335;
            color: white;
        }
        
        #btnXCloseModal:hover {
            background: #ff6b6b !important;
            color: white !important;
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);

    // Evento para la X (nuevo)
    document.getElementById('btnXCloseModal').addEventListener('click', function() {
        cerrarModal();
    });

    // Evento para cerrar con el botón de abajo (si existe)
    const btnCerrar = document.getElementById('btnCerrarModalCorreo');
    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarModal);
    }

    // Función para cerrar el modal
    function cerrarModal() {
        overlay.style.animation = 'emailFadeOut 0.3s ease';
        modal.style.animation = 'emailScaleOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }

    // Evento para copiar correo
    document.getElementById('btnCopiarCorreo').addEventListener('click', function() {
        navigator.clipboard.writeText('amizi2025@gmail.com').then(() => {
            const noti = document.createElement('div');
            noti.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #2ecc71;
                color: white;
                padding: 10px 20px;
                border-radius: 60px;
                font-size: 14px;
                z-index: 10001;
                animation: slideDown 0.3s;
                box-shadow: 0 10px 25px rgba(46, 204, 113, 0.3);
                display: flex;
                align-items: center;
                gap: 8px;
            `;
            noti.innerHTML = '<i class="fas fa-check-circle"></i> ¡Correo copiado!';
            document.body.appendChild(noti);
            setTimeout(() => {
                noti.style.animation = 'fadeOut 0.3s';
                setTimeout(() => noti.remove(), 300);
            }, 2000);
        });
    });

    // Evento para abrir Gmail
    document.getElementById('btnAbrirGmail').addEventListener('click', function() {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amizi2025@gmail.com&su=Consulta%20desde%20Amizi&body=Hola%20equipo%20de%20Amizi,%20', '_blank');
        
        const noti = document.createElement('div');
        noti.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #4a90e2;
            color: white;
            padding: 10px 20px;
            border-radius: 60px;
            font-size: 14px;
            z-index: 10001;
            animation: slideDown 0.3s;
            box-shadow: 0 10px 25px rgba(74, 144, 226, 0.3);
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        noti.innerHTML = '<i class="fas fa-envelope"></i> Abriendo Gmail...';
        document.body.appendChild(noti);
        setTimeout(() => {
            noti.style.animation = 'fadeOut 0.3s';
            setTimeout(() => noti.remove(), 300);
        }, 2000);
    });

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cerrarModal();
        }
    });
}

// ============================================
// EXPORTAR FUNCIÓN
// ============================================
window.mostrarModalCorreo = mostrarModalCorreo;

console.log('📧 Modal de correo electrónico cargado - amizi2025@gmail.com (con X incluida)');