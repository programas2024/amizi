// ============================================
// SISTEMA DE CALIFICACIÓN DEL CHAT
// ============================================

function mostrarCalificacion() {
    // Crear overlay
    const overlay = document.createElement('div');
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
        animation: fadeIn 0.3s ease;
    `;

    // Crear modal de calificación
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 60px;
        padding: 40px;
        max-width: 450px;
        width: 90%;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: scaleIn 0.3s ease forwards;
    `;

    // Contenido del modal
    modal.innerHTML = `
        <div style="margin-bottom: 20px;">
            <i class="fas fa-star" style="font-size: 60px; color: #ffd700; filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5)); animation: starPulse 2s infinite;"></i>
        </div>
        
        <h2 style="font-size: 28px; font-weight: 700; color: #1e2b3a; margin-bottom: 10px;">
            ¿Qué tal te pareció?
        </h2>
        
        <p style="font-size: 16px; color: #5a6b7c; margin-bottom: 20px;">
            Tu opinión hace de Amizi un lugar mejor ⭐
        </p>
        
        <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 25px;" id="estrellasCalificacion">
            <i class="fas fa-star" data-puntuacion="1" style="font-size: 40px; color: #e4e4f0; cursor: pointer; transition: all 0.2s;"></i>
            <i class="fas fa-star" data-puntuacion="2" style="font-size: 40px; color: #e4e4f0; cursor: pointer; transition: all 0.2s;"></i>
            <i class="fas fa-star" data-puntuacion="3" style="font-size: 40px; color: #e4e4f0; cursor: pointer; transition: all 0.2s;"></i>
            <i class="fas fa-star" data-puntuacion="4" style="font-size: 40px; color: #e4e4f0; cursor: pointer; transition: all 0.2s;"></i>
            <i class="fas fa-star" data-puntuacion="5" style="font-size: 40px; color: #e4e4f0; cursor: pointer; transition: all 0.2s;"></i>
        </div>
        
        <div style="margin-bottom: 25px;">
            <textarea id="opinionChat" placeholder="¿Quieres dejarnos un comentario? (opcional)" style="width: 100%; padding: 15px 20px; border-radius: 30px; border: 2px solid #e4e4f0; font-size: 15px; font-family: inherit; resize: vertical; min-height: 100px; outline: none; transition: border 0.2s;"></textarea>
        </div>
        
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button id="btnEnviarOpinion" style="background: linear-gradient(145deg, #4a90e2, #6c5ce7); color: white; border: none; border-radius: 60px; padding: 15px 40px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 10px; box-shadow: 0 10px 25px rgba(74, 144, 226, 0.3);">
                <i class="fas fa-paper-plane"></i> Enviar
            </button>
            <button id="btnCancelarOpinion" style="background: #f0f3fa; color: #2d3a4a; border: none; border-radius: 60px; padding: 15px 30px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-times"></i> Cancelar
            </button>
        </div>
        
        <p style="font-size: 12px; color: #8a9bb0; margin-top: 20px;">
            Tu opinión nos ayuda a mejorar cada día
        </p>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Variables para la puntuación
    let puntuacionSeleccionada = 0;

    // Animación de las estrellas
    const estrellas = document.querySelectorAll('#estrellasCalificacion i');
    estrellas.forEach(estrella => {
        estrella.addEventListener('mouseover', function() {
            const puntuacion = parseInt(this.dataset.puntuacion);
            estrellas.forEach((e, index) => {
                if (index < puntuacion) {
                    e.style.color = '#ffd700';
                    e.style.transform = 'scale(1.1)';
                } else {
                    e.style.color = '#e4e4f0';
                    e.style.transform = 'scale(1)';
                }
            });
        });

        estrella.addEventListener('mouseout', function() {
            estrellas.forEach((e, index) => {
                if (index < puntuacionSeleccionada) {
                    e.style.color = '#ffd700';
                } else {
                    e.style.color = '#e4e4f0';
                }
                e.style.transform = 'scale(1)';
            });
        });

        estrella.addEventListener('click', function() {
            puntuacionSeleccionada = parseInt(this.dataset.puntuacion);
            estrellas.forEach((e, index) => {
                if (index < puntuacionSeleccionada) {
                    e.style.color = '#ffd700';
                } else {
                    e.style.color = '#e4e4f0';
                }
            });
        });
    });

    // Función para mostrar agradecimiento
    function mostrarAgradecimiento() {
        modal.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <i class="fas fa-star" style="font-size: 80px; color: #ffd700; margin-bottom: 20px; animation: starPulse 1s;"></i>
                <h2 style="font-size: 32px; font-weight: 700; color: #1e2b3a; margin-bottom: 15px;">
                    ¡Gracias! ⭐
                </h2>
                <p style="font-size: 18px; color: #4a90e2; margin-bottom: 25px;">
                    Gracias por tu comentario y por votar
                </p>
                <p style="font-size: 16px; color: #5a6b7c; margin-bottom: 30px;">
                    Tu opinión hace de Amizi un lugar mejor
                </p>
                <button id="btnCerrarFinal" style="background: linear-gradient(145deg, #4a90e2, #6c5ce7); color: white; border: none; border-radius: 60px; padding: 15px 50px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                    Cerrar
                </button>
            </div>
        `;

        document.getElementById('btnCerrarFinal').addEventListener('click', function() {
            overlay.remove();
            // Cerrar el chat después del agradecimiento
            cerrarChatCompleto();
        });
    }

    // Botón enviar
    document.getElementById('btnEnviarOpinion').addEventListener('click', function() {
        const opinion = document.getElementById('opinionChat').value;
        
        if (puntuacionSeleccionada === 0) {
            // Mostrar notificación de que debe seleccionar estrellas
            const noti = document.createElement('div');
            noti.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #ff6b6b;
                color: white;
                padding: 12px 25px;
                border-radius: 60px;
                font-size: 15px;
                z-index: 10001;
                animation: slideDown 0.3s;
            `;
            noti.textContent = '⭐ Por favor selecciona una calificación';
            document.body.appendChild(noti);
            setTimeout(() => noti.remove(), 2500);
            return;
        }

        // Aquí podrías enviar la calificación a un servidor
        console.log('Calificación:', puntuacionSeleccionada);
        console.log('Opinión:', opinion);

        // Mostrar agradecimiento
        mostrarAgradecimiento();
    });

    // Botón cancelar
    document.getElementById('btnCancelarOpinion').addEventListener('click', function() {
        overlay.remove();
    });

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    // Añadir animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes starPulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.8)); }
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translate(-50%, -30px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }
    `;
    document.head.appendChild(style);
}

// Función para cerrar el chat completamente
function cerrarChatCompleto() {
    // Mostrar notificación final
    const noti = document.createElement('div');
    noti.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(145deg, #4a90e2, #6c5ce7);
        color: white;
        padding: 16px 32px;
        border-radius: 60px;
        font-size: 18px;
        z-index: 9999;
        animation: slideDown 0.3s ease;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: 500;
    `;
    noti.innerHTML = '<i class="fas fa-star" style="margin-right: 10px;"></i> ¡Gracias por usar Amizi! Nos vemos pronto ⭐';
    document.body.appendChild(noti);

    setTimeout(() => {
        noti.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            noti.remove();
            window.location.href = 'cuenta.html';
        }, 300);
    }, 2000);
}