// ============================================
// MODAL DE REGALOS - AMIZI
// ============================================

// Base de datos de regalos
const REGALOS = [
    {
        id: 'rosa',
        icono: 'fa-rose',
        emoji: '🌹',
        nombre: 'Rosa',
        significado: 'Me caes bien',
        precio: 50,
        color: '#ff6b6b',
        colorDegradado: 'linear-gradient(145deg, #ff6b6b, #ff8e8e)'
    },
    {
        id: 'peluche',
        icono: 'fa-bear',
        emoji: '🧸',
        nombre: 'Peluche',
        significado: 'Eres especial',
        precio: 100,
        color: '#f39c12',
        colorDegradado: 'linear-gradient(145deg, #f39c12, #f1c40f)'
    },
    {
        id: 'anillo',
        icono: 'fa-ring',
        emoji: '💍',
        nombre: 'Anillo',
        significado: 'Mejor amigo',
        precio: 200,
        color: '#6c5ce7',
        colorDegradado: 'linear-gradient(145deg, #6c5ce7, #8e6ce7)'
    },
    {
        id: 'corona',
        icono: 'fa-crown',
        emoji: '👑',
        nombre: 'Corona',
        significado: 'Eres increíble',
        precio: 350,
        color: '#ffd700',
        colorDegradado: 'linear-gradient(145deg, #ffd700, #f39c12)'
    },
    {
        id: 'pastel',
        icono: 'fa-cake-candles',
        emoji: '🎂',
        nombre: 'Pastel',
        significado: 'Feliz cumpleaños',
        precio: 150,
        color: '#2ecc71',
        colorDegradado: 'linear-gradient(145deg, #2ecc71, #27ae60)'
    }
];

// ============================================
// MODAL PRINCIPAL DE REGALOS
// ============================================

function mostrarModalRegalos() {
    // Verificar si ya existe un modal abierto
    if (document.querySelector('.gift-modal-overlay')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'gift-modal-overlay';
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
        animation: giftFadeIn 0.3s ease;
    `;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'gift-modal';
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 60px;
        padding: 30px 35px;
        max-width: 650px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: giftScaleIn 0.4s ease forwards;
        position: relative;
        scrollbar-width: none;
        -ms-overflow-style: none;
    `;

    // Scroll invisible
    const styleInvisible = document.createElement('style');
    styleInvisible.textContent = `
        .gift-modal::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(styleInvisible);

    // Decoración de fondo
    const bgDecor = document.createElement('div');
    bgDecor.style.cssText = `
        position: absolute;
        top: -50px;
        right: -50px;
        width: 200px;
        height: 200px;
        background: linear-gradient(145deg, rgba(255, 107, 107, 0.1), rgba(255, 215, 0, 0.1));
        border-radius: 50%;
        z-index: 0;
        pointer-events: none;
    `;
    modal.appendChild(bgDecor);

    // Generar HTML de los regalos
    let regalosHTML = '';
    REGALOS.forEach(regalo => {
        regalosHTML += `
            <div class="gift-item" data-gift='${JSON.stringify(regalo)}' style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 30px; padding: 15px; margin-bottom: 12px; border: 2px solid #e4e4f0; display: flex; align-items: center; gap: 15px; transition: all 0.2s; cursor: pointer;"
                 onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.05)'; this.style.borderColor='${regalo.color}';"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e4e4f0';">
                <div style="background: ${regalo.color}; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 30px;">
                    ${regalo.emoji}
                </div>
                <div style="flex: 1; text-align: left;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #1e2b3a;">${regalo.nombre} ${regalo.emoji}</h3>
                        <span style="background: ${regalo.color}; color: white; padding: 3px 10px; border-radius: 30px; font-size: 11px; font-weight: 600;">${regalo.precio} ⭐</span>
                    </div>
                    <p style="font-size: 14px; color: #5a6b7c;">
                        <strong>Significa:</strong> "${regalo.significado}"
                    </p>
                </div>
                <div style="color: ${regalo.color}; font-size: 20px;">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    // Contenido del modal
    modal.innerHTML = `
        <!-- X para cerrar -->
        <div style="position: absolute; top: 15px; right: 20px; z-index: 10;">
            <button id="btnXCloseGift" style="background: #f0f3fa; border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #2d3a4a; font-size: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div style="margin-bottom: 20px;">
            <div style="position: relative; display: inline-block;">
                <i class="fas fa-gift" style="font-size: 70px; color: #ff6b6b; filter: drop-shadow(0 10px 20px rgba(255, 107, 107, 0.3)); animation: giftFloat 3s infinite;"></i>
                <div style="position: absolute; top: -5px; right: -5px; background: #4a90e2; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: giftPulse 2s infinite;">
                    <i class="fas fa-star" style="color: white; font-size: 14px;"></i>
                </div>
            </div>
        </div>

        <h2 style="font-size: 32px; font-weight: 700; margin-bottom: 10px; background: linear-gradient(145deg, #ff6b6b, #ff8e8e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            🎁 Tienda de Regalos
        </h2>

        <p style="font-size: 15px; color: #5a6b7c; margin-bottom: 25px;">
            Demuestra tu aprecio con un regalo especial. Cada uno tiene un significado único.
        </p>

        <div class="gift-list">
            ${regalosHTML}
        </div>

        <div style="background: #fff9e6; border-radius: 30px; padding: 15px; margin-top: 20px; border-left: 6px solid #ffd700; text-align: left;">
            <p style="display: flex; align-items: center; gap: 8px; color: #2d3a4a; font-size: 13px;">
                <i class="fas fa-lightbulb" style="color: #ffd700;"></i>
                <strong>Tip:</strong> Los regalos aumentan tu carisma y fortalecen la amistad.
            </p>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Añadir animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes giftFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes giftScaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes giftFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        
        @keyframes giftPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes giftFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes giftScaleOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.8); opacity: 0; }
        }
        
        #btnXCloseGift:hover {
            background: #ff6b6b !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        .gift-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);

    // Función para cerrar el modal
    function cerrarModal() {
        overlay.style.animation = 'giftFadeOut 0.3s ease';
        modal.style.animation = 'giftScaleOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }

    // Evento para la X
    document.getElementById('btnXCloseGift').addEventListener('click', cerrarModal);

    // Eventos para los items de regalo
    document.querySelectorAll('.gift-item').forEach(item => {
        item.addEventListener('click', function() {
            const regaloData = JSON.parse(this.dataset.gift);
            
            // Saldo actual (puedes cambiarlo dinámicamente)
            const saldoActual = 500;
            
            // Mostrar modal de confirmación
            if (typeof mostrarConfirmacionGift === 'function') {
                mostrarConfirmacionGift(regaloData, saldoActual);
            }
        });
    });

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cerrarModal();
        }
    });
}

// ============================================
// MODAL DE CONFIRMACIÓN DE REGALO
// ============================================

function mostrarConfirmacionGift(regalo, saldoActual = 500) {
    // Verificar si ya existe un modal abierto
    if (document.querySelector('.gift-confirm-overlay')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'gift-confirm-overlay';
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
        z-index: 10001;
        animation: giftConfirmFadeIn 0.3s ease;
    `;

    // Verificar saldo
    const saldoSuficiente = saldoActual >= regalo.precio;
    const saldoNuevo = saldoActual - regalo.precio;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'gift-confirm-modal';
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 50px;
        padding: 25px;
        max-width: 380px;
        width: 90%;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: giftConfirmScaleIn 0.3s ease forwards;
        position: relative;
    `;

    modal.innerHTML = `
        <!-- X para cerrar -->
        <div style="position: absolute; top: 15px; right: 15px; z-index: 10;">
            <button id="btnXCloseGiftConfirm" style="background: #f0f3fa; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #2d3a4a; font-size: 16px;">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- Icono del regalo -->
        <div style="margin-bottom: 15px;">
            <div style="background: ${regalo.color}; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 40px; box-shadow: 0 10px 20px ${regalo.color.replace(')', ', 0.3)')};">
                ${regalo.emoji}
            </div>
        </div>

        <!-- Título -->
        <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 5px; color: #1e2b3a;">Enviar regalo</h3>
        <p style="font-size: 20px; font-weight: 600; color: ${regalo.color}; margin-bottom: 15px;">${regalo.nombre} ${regalo.emoji}</p>

        <!-- Significado -->
        <div style="background: #f0f3fa; border-radius: 25px; padding: 15px; margin-bottom: 15px; border-left: 4px solid ${regalo.color};">
            <p style="font-size: 14px; color: #2d3a4a; margin-bottom: 5px;">✨ Significa:</p>
            <p style="font-size: 16px; color: ${regalo.color}; font-weight: 600;">"${regalo.significado}"</p>
        </div>

        <!-- Saldo actual -->
        <div style="background: #fff9e6; border-radius: 40px; padding: 12px 15px; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between; border: 1px solid #ffd700;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-coins" style="color: #ffd700; font-size: 20px;"></i>
                <span style="font-size: 14px; color: #2d3a4a;">Tu saldo:</span>
            </div>
            <span style="font-size: 22px; font-weight: 700; color: ${saldoSuficiente ? '#2ecc71' : '#ff6b6b'};">${saldoActual} ⭐</span>
        </div>

        <!-- Precio y botón -->
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
            <div style="flex: 1; background: #f0f3fa; border-radius: 40px; padding: 12px; text-align: center;">
                <span style="font-size: 14px; color: #5a6b7c; display: block;">Precio</span>
                <span style="font-size: 20px; font-weight: 700; color: ${regalo.color};">${regalo.precio} ⭐</span>
            </div>
            
            <button id="btnConfirmarGift" style="flex: 2; background: ${saldoSuficiente ? regalo.colorDegradado : '#cccccc'}; color: white; border: none; border-radius: 40px; padding: 15px; font-size: 18px; font-weight: 600; cursor: ${saldoSuficiente ? 'pointer' : 'not-allowed'}; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: ${saldoSuficiente ? '0 5px 15px rgba(0,0,0,0.1)' : 'none'}; opacity: ${saldoSuficiente ? '1' : '0.6'};" ${!saldoSuficiente ? 'disabled' : ''}>
                <i class="fas fa-paper-plane"></i> Enviar
            </button>
        </div>

        ${!saldoSuficiente ? `
            <p style="font-size: 12px; color: #ff6b6b; margin-top: 10px;">
                <i class="fas fa-exclamation-circle"></i> Te faltan ${regalo.precio - saldoActual} monedas
            </p>
        ` : `
            <p style="font-size: 12px; color: #2ecc71; margin-top: 10px;">
                <i class="fas fa-check-circle"></i> Saldo después: ${saldoNuevo} ⭐
            </p>
        `}
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Añadir animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes giftConfirmFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes giftConfirmScaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes giftConfirmFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes giftConfirmScaleOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.8); opacity: 0; }
        }
        
        #btnXCloseGiftConfirm:hover {
            background: #ff6b6b !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        #btnConfirmarGift:hover:not(:disabled) {
            transform: translateY(-2px);
            filter: brightness(1.1);
        }
    `;
    document.head.appendChild(style);

    // Función para cerrar el modal
    function cerrarModal() {
        overlay.style.animation = 'giftConfirmFadeOut 0.3s ease';
        modal.style.animation = 'giftConfirmScaleOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }

    // Evento para la X
    document.getElementById('btnXCloseGiftConfirm').addEventListener('click', cerrarModal);

    // Evento para confirmar envío (solo si tiene saldo)
    if (saldoSuficiente) {
        document.getElementById('btnConfirmarGift').addEventListener('click', function() {
            // Mostrar notificación de regalo enviado
            const noti = document.createElement('div');
            noti.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: ${regalo.color};
                color: white;
                padding: 12px 25px;
                border-radius: 60px;
                font-size: 15px;
                z-index: 10002;
                animation: slideDown 0.3s;
                box-shadow: 0 10px 20px ${regalo.color.replace(')', ', 0.3)')};
                display: flex;
                align-items: center;
                gap: 10px;
            `;
            noti.innerHTML = `<i class="fas fa-gift"></i> ¡${regalo.nombre} ${regalo.emoji} enviado! "${regalo.significado}"`;
            document.body.appendChild(noti);
            
            setTimeout(() => {
                noti.style.animation = 'fadeOut 0.3s';
                setTimeout(() => noti.remove(), 300);
            }, 3000);
            
            cerrarModal();
        });
    }

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cerrarModal();
        }
    });
}

// ============================================
// FUNCIÓN PARA ACTIVAR EL BOTÓN DE REGALOS
// ============================================

function activarBotonGift() {
    // Buscar el botón por ID o selector
    const btnGift = document.getElementById('btnGift') || document.querySelector('.action-btn.gift');
    
    if (btnGift) {
        // Remover el event listener anterior si existe
        const nuevoBoton = btnGift.cloneNode(true);
        btnGift.parentNode.replaceChild(nuevoBoton, btnGift);
        
        // Agregar nuevo event listener
        nuevoBoton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Animación del botón
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Mostrar el modal de regalos
            if (typeof mostrarModalRegalos === 'function') {
                mostrarModalRegalos();
            } else {
                console.error('Error: Función mostrarModalRegalos no encontrada');
                // Fallback a la notificación anterior
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
                    z-index: 10000;
                    animation: slideDown 0.3s;
                `;
                noti.innerHTML = '<i class="fas fa-gift"></i> ¡Regalo enviado! 🎁';
                document.body.appendChild(noti);
                setTimeout(() => noti.remove(), 2000);
            }
        });
        
        console.log('✅ Botón de regalos activado correctamente');
    } else {
        console.warn('⚠️ Botón de regalos no encontrado en el DOM');
    }
}

// ============================================
// FUNCIÓN PARA AGREGAR ANIMACIONES GLOBALES
// ============================================

function agregarAnimacionesGlobales() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
            to {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translate(-50%, 0);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// INICIALIZAR TODO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎁 Sistema de Regalos cargado correctamente');
    agregarAnimacionesGlobales();
    activarBotonGift();
});

// ============================================
// EXPORTAR FUNCIONES
// ============================================
window.mostrarModalRegalos = mostrarModalRegalos;
window.mostrarConfirmacionGift = mostrarConfirmacionGift;
window.activarBotonGift = activarBotonGift;

console.log('✅ Todos los modales de Regalos están listos para usar');