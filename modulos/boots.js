// ============================================
// MODAL DE BOOST - AMIZI (VERSIÓN COMPLETA Y FUNCIONAL)
// ============================================

function mostrarModalBoost() {
    // Verificar si ya existe un modal abierto
    if (document.querySelector('.boost-modal-overlay')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'boost-modal-overlay';
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
        animation: boostFadeIn 0.3s ease;
    `;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'boost-modal';
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 60px;
        padding: 30px 35px;
        max-width: 600px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: boostScaleIn 0.4s ease forwards;
        position: relative;
        scrollbar-width: none;
        -ms-overflow-style: none;
    `;

    // Scroll invisible para Chrome/Safari/Edge
    const styleInvisible = document.createElement('style');
    styleInvisible.textContent = `
        .boost-modal::-webkit-scrollbar {
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

    // Contenido HTML con los boosts y botones de compra
    content.innerHTML = `
        <!-- X para cerrar en la esquina superior derecha -->
        <div style="position: absolute; top: 15px; right: 20px; z-index: 10;">
            <button id="btnXCloseBoost" style="background: #f0f3fa; border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #2d3a4a; font-size: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div style="margin-bottom: 20px; position: relative;">
            <div style="position: relative; display: inline-block;">
                <i class="fas fa-rocket" style="font-size: 70px; color: #ff6b6b; filter: drop-shadow(0 10px 20px rgba(255, 107, 107, 0.3)); animation: boostFloat 3s infinite;"></i>
                <div style="position: absolute; top: -5px; right: -5px; background: #4a90e2; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: boostPulse 2s infinite;">
                    <i class="fas fa-star" style="color: white; font-size: 14px;"></i>
                </div>
            </div>
        </div>

        <h2 style="font-size: 32px; font-weight: 700; margin-bottom: 15px; background: linear-gradient(145deg, #ff6b6b, #ff8e8e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            🚀 Boost de Visibilidad
        </h2>

        <p style="font-size: 16px; color: #5a6b7c; margin-bottom: 25px; line-height: 1.5;">
            Aumenta tu visibilidad y consigue más amigos con nuestros planes de boost. ¡Elige el que mejor se adapte a ti!
        </p>

        <!-- Boost 1 HORA -->
        <div style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 30px; padding: 20px; margin-bottom: 15px; border: 2px solid #e4e4f0; display: flex; align-items: center; gap: 15px; transition: all 0.2s;" 
             onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(74,144,226,0.1)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
            <div style="background: #4a90e2; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: white; font-weight: 700; font-size: 18px;">1h</span>
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <h3 style="font-size: 20px; font-weight: 700; color: #1e2b3a;">Boost 1 HORA</h3>
                    <span style="background: #2ecc71; color: white; padding: 3px 10px; border-radius: 30px; font-size: 12px; font-weight: 600;">50 monedas</span>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0 0 10px 0;">
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #4a90e2;"></i> +100% visibilidad
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #4a90e2;"></i> Ideal para probar
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #4a90e2;"></i> Apareces +200 personas
                    </li>
                </ul>
                <button class="btn-comprar-boost" data-boost="1h" data-precio="50" data-nombre="Boost 1 HORA" data-descripcion="+100% visibilidad · +200 personas · Ideal para probar" style="background: linear-gradient(145deg, #4a90e2, #6c5ce7); color: white; border: none; border-radius: 40px; padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 5px 15px rgba(74,144,226,0.3);">
                    <i class="fas fa-shopping-cart"></i> Comprar ahora
                </button>
            </div>
        </div>

        <!-- Boost 3 HORAS -->
        <div style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 30px; padding: 20px; margin-bottom: 15px; border: 2px solid #e4e4f0; display: flex; align-items: center; gap: 15px; transition: all 0.2s;"
             onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(74,144,226,0.1)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
            <div style="background: #6c5ce7; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: white; font-weight: 700; font-size: 18px;">3h</span>
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <h3 style="font-size: 20px; font-weight: 700; color: #1e2b3a;">Boost 3 HORAS</h3>
                    <span style="background: #2ecc71; color: white; padding: 3px 10px; border-radius: 30px; font-size: 12px; font-weight: 600;">120 monedas</span>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0 0 10px 0;">
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #6c5ce7;"></i> +200% visibilidad
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #6c5ce7;"></i> +500 personas te ven
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #6c5ce7;"></i> Relación calidad-precio
                    </li>
                </ul>
                <button class="btn-comprar-boost" data-boost="3h" data-precio="120" data-nombre="Boost 3 HORAS" data-descripcion="+200% visibilidad · +500 personas · Calidad-precio" style="background: linear-gradient(145deg, #6c5ce7, #8e6ce7); color: white; border: none; border-radius: 40px; padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 5px 15px rgba(108,92,231,0.3);">
                    <i class="fas fa-shopping-cart"></i> Comprar ahora
                </button>
            </div>
        </div>

        <!-- Boost 12 HORAS -->
        <div style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 30px; padding: 20px; margin-bottom: 15px; border: 2px solid #e4e4f0; display: flex; align-items: center; gap: 15px; transition: all 0.2s;"
             onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(74,144,226,0.1)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
            <div style="background: #ff6b6b; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: white; font-weight: 700; font-size: 18px;">12h</span>
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <h3 style="font-size: 20px; font-weight: 700; color: #1e2b3a;">Boost 12 HORAS</h3>
                    <span style="background: #2ecc71; color: white; padding: 3px 10px; border-radius: 30px; font-size: 12px; font-weight: 600;">250 monedas</span>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0 0 10px 0;">
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ff6b6b;"></i> +350% visibilidad
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ff6b6b;"></i> +1200 personas
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ff6b6b;"></i> Ideal para todo el día
                    </li>
                </ul>
                <button class="btn-comprar-boost" data-boost="12h" data-precio="250" data-nombre="Boost 12 HORAS" data-descripcion="+350% visibilidad · +1200 personas · Todo el día" style="background: linear-gradient(145deg, #ff6b6b, #ff8e8e); color: white; border: none; border-radius: 40px; padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 5px 15px rgba(255,107,107,0.3);">
                    <i class="fas fa-shopping-cart"></i> Comprar ahora
                </button>
            </div>
        </div>

        <!-- Boost 24 HORAS -->
        <div style="background: linear-gradient(145deg, #f0f3fa, #ffffff); border-radius: 30px; padding: 20px; margin-bottom: 20px; border: 2px solid #e4e4f0; display: flex; align-items: center; gap: 15px; transition: all 0.2s;"
             onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(74,144,226,0.1)'; this.style.borderColor='#ffd700';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e4e4f0';">
            <div style="background: #ffd700; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: white; font-weight: 700; font-size: 18px;">24h</span>
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <h3 style="font-size: 20px; font-weight: 700; color: #1e2b3a;">Boost 24 HORAS</h3>
                    <span style="background: #2ecc71; color: white; padding: 3px 10px; border-radius: 30px; font-size: 12px; font-weight: 600;">350 monedas</span>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0 0 10px 0;">
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ffd700;"></i> +500% visibilidad
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ffd700;"></i> +2500 personas
                    </li>
                    <li style="display: flex; align-items: center; gap: 8px; color: #5a6b7c; font-size: 14px;">
                        <i class="fas fa-check-circle" style="color: #ffd700;"></i> <strong>MÁXIMA EXPOSICIÓN</strong>
                    </li>
                </ul>
                <button class="btn-comprar-boost" data-boost="24h" data-precio="350" data-nombre="Boost 24 HORAS" data-descripcion="+500% visibilidad · +2500 personas · MÁXIMA EXPOSICIÓN" style="background: linear-gradient(145deg, #ffd700, #f39c12); color: white; border: none; border-radius: 40px; padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 5px 15px rgba(255,215,0,0.3);">
                    <i class="fas fa-shopping-cart"></i> Comprar ahora
                </button>
            </div>
        </div>

        <div style="background: #fff9e6; border-radius: 30px; padding: 15px; margin: 15px 0 10px; border-left: 6px solid #ffd700; text-align: left;">
            <p style="display: flex; align-items: center; gap: 8px; color: #2d3a4a; font-size: 13px;">
                <i class="fas fa-lightbulb" style="color: #ffd700;"></i>
                <strong>Tip:</strong> El mejor momento para usar boost es entre 7pm y 10pm, ¡cuando más gente está conectada!
            </p>
        </div>
    `;

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Añadir animaciones CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes boostFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes boostScaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes boostFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        
        @keyframes boostPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes boostFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes boostScaleOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.8); opacity: 0; }
        }
        
        #btnXCloseBoost:hover {
            background: #ff6b6b !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        .btn-comprar-boost:hover {
            transform: translateY(-2px);
            filter: brightness(1.1);
        }
    `;
    document.head.appendChild(style);

    // Función para cerrar el modal
    function cerrarModal() {
        overlay.style.animation = 'boostFadeOut 0.3s ease';
        modal.style.animation = 'boostScaleOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }

    // Evento para la X
    document.getElementById('btnXCloseBoost').addEventListener('click', cerrarModal);

    // Eventos para los botones de compra - AHORA LLAMAN AL MODAL DE CONFIRMACIÓN
    const botonesCompra = document.querySelectorAll('.btn-comprar-boost');
    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Obtener datos del boost desde los atributos data-
            const boostTipo = this.dataset.boost;
            const precio = parseInt(this.dataset.precio);
            const nombre = this.dataset.nombre;
            const descripcion = this.dataset.descripcion;
            
            // Saldo actual del usuario (puedes cambiarlo dinámicamente)
            const saldoActual = 500; // Este valor puede venir de tu sistema
            
            // Llamar al modal de confirmación
            if (typeof mostrarConfirmacionBoost === 'function') {
                mostrarConfirmacionBoost(boostTipo, precio, nombre, descripcion, saldoActual);
            } else {
                console.error('Error: Función mostrarConfirmacionBoost no encontrada');
                alert('Error al procesar la compra. Intenta de nuevo.');
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
// MODAL DE CONFIRMACIÓN DE COMPRA - BOOST (VERSIÓN SIMPLIFICADA)
// ============================================

function mostrarConfirmacionBoost(boostTipo, precio, nombre, descripcion, saldoActual = 500) {
    // Verificar si ya existe un modal abierto
    if (document.querySelector('.confirm-modal-overlay')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
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
        animation: confirmFadeIn 0.3s ease;
    `;

    // Determinar colores según el tipo de boost
    let colorBoost, colorDegradado, icono;
    switch(boostTipo) {
        case '1h':
            colorBoost = '#4a90e2';
            colorDegradado = 'linear-gradient(145deg, #4a90e2, #6c5ce7)';
            icono = 'fa-clock';
            break;
        case '3h':
            colorBoost = '#6c5ce7';
            colorDegradado = 'linear-gradient(145deg, #6c5ce7, #8e6ce7)';
            icono = 'fa-clock';
            break;
        case '12h':
            colorBoost = '#ff6b6b';
            colorDegradado = 'linear-gradient(145deg, #ff6b6b, #ff8e8e)';
            icono = 'fa-clock';
            break;
        case '24h':
            colorBoost = '#ffd700';
            colorDegradado = 'linear-gradient(145deg, #ffd700, #f39c12)';
            icono = 'fa-crown';
            break;
        default:
            colorBoost = '#4a90e2';
            colorDegradado = 'linear-gradient(145deg, #4a90e2, #6c5ce7)';
            icono = 'fa-clock';
    }

    // Crear modal - MÁS COMPACTO Y SIMPLE
    const modal = document.createElement('div');
    modal.className = 'confirm-modal';
    modal.style.cssText = `
        background: linear-gradient(145deg, #ffffff, #f8f9ff);
        border-radius: 50px;
        padding: 25px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        text-align: center;
        transform: scale(0.9);
        animation: confirmScaleIn 0.3s ease forwards;
        position: relative;
    `;

    // Verificar si tiene saldo suficiente
    const saldoSuficiente = saldoActual >= precio;
    const saldoNuevo = saldoActual - precio;

    // CONTENIDO SIMPLIFICADO
    modal.innerHTML = `
        <!-- X para cerrar -->
        <div style="position: absolute; top: 15px; right: 15px; z-index: 10;">
            <button id="btnXCloseConfirm" style="background: #f0f3fa; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: #2d3a4a; font-size: 16px;">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- Icono del boost -->
        <div style="margin-bottom: 15px;">
            <div style="background: ${colorBoost}; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 10px 20px ${colorBoost.replace(')', ', 0.3)')};">
                <i class="fas ${icono}" style="font-size: 35px; color: white;"></i>
            </div>
        </div>

        <!-- Título y boost seleccionado -->
        <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 5px; color: #1e2b3a;">Confirmar compra</h3>
        <p style="font-size: 18px; font-weight: 600; color: ${colorBoost}; margin-bottom: 15px;">${nombre}</p>

        <!-- Beneficios en cajita compacta -->
        <div style="background: #f0f3fa; border-radius: 25px; padding: 15px; margin-bottom: 15px; text-align: left; border-left: 4px solid ${colorBoost};">
            <p style="font-size: 14px; color: #2d3a4a; margin-bottom: 8px; font-weight: 600;">✨ Beneficios:</p>
            <p style="font-size: 13px; color: #5a6b7c; line-height: 1.5;">${descripcion.replace(/·/g, '•')}</p>
        </div>

        <!-- Cajita de saldo SIMPLE -->
        <div style="background: #fff9e6; border-radius: 40px; padding: 12px 15px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; border: 1px solid #ffd700;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-coins" style="color: #ffd700; font-size: 20px;"></i>
                <span style="font-size: 14px; color: #2d3a4a;">Tu saldo:</span>
            </div>
            <span style="font-size: 22px; font-weight: 700; color: ${saldoSuficiente ? '#2ecc71' : '#ff6b6b'};">${saldoActual} ⭐</span>
        </div>

        <!-- Precio y botón comprar TODO EN UNO -->
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
            <div style="flex: 1; background: #f0f3fa; border-radius: 40px; padding: 12px; text-align: center;">
                <span style="font-size: 14px; color: #5a6b7c; display: block;">Precio</span>
                <span style="font-size: 20px; font-weight: 700; color: ${colorBoost};">${precio} ⭐</span>
            </div>
            
            <button id="btnConfirmarCompra" style="flex: 2; background: ${saldoSuficiente ? colorDegradado : '#cccccc'}; color: white; border: none; border-radius: 40px; padding: 15px; font-size: 18px; font-weight: 600; cursor: ${saldoSuficiente ? 'pointer' : 'not-allowed'}; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: ${saldoSuficiente ? '0 5px 15px rgba(0,0,0,0.1)' : 'none'}; opacity: ${saldoSuficiente ? '1' : '0.6'};" ${!saldoSuficiente ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> Comprar
            </button>
        </div>

        ${!saldoSuficiente ? `
            <p style="font-size: 12px; color: #ff6b6b; margin-top: 10px;">
                <i class="fas fa-exclamation-circle"></i> Te faltan ${precio - saldoActual} monedas
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
        @keyframes confirmFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes confirmScaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes confirmFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes confirmScaleOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.8); opacity: 0; }
        }
        
        #btnXCloseConfirm:hover {
            background: #ff6b6b !important;
            color: white !important;
            transform: scale(1.1);
        }
        
        #btnConfirmarCompra:hover:not(:disabled) {
            transform: translateY(-2px);
            filter: brightness(1.1);
        }
    `;
    document.head.appendChild(style);

    // Función para cerrar el modal
    function cerrarModal() {
        overlay.style.animation = 'confirmFadeOut 0.3s ease';
        modal.style.animation = 'confirmScaleOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }

    // Evento para la X
    document.getElementById('btnXCloseConfirm').addEventListener('click', cerrarModal);

    // Evento para confirmar compra (solo si tiene saldo)
    if (saldoSuficiente) {
        document.getElementById('btnConfirmarCompra').addEventListener('click', function() {
            // Mostrar notificación de compra exitosa
            const noti = document.createElement('div');
            noti.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #2ecc71;
                color: white;
                padding: 12px 25px;
                border-radius: 60px;
                font-size: 15px;
                z-index: 10002;
                animation: slideDown 0.3s;
                box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
                display: flex;
                align-items: center;
                gap: 10px;
            `;
            noti.innerHTML = `<i class="fas fa-check-circle"></i> ¡${nombre} activado! Saldo: ${saldoNuevo} ⭐`;
            document.body.appendChild(noti);
            
            setTimeout(() => {
                noti.style.animation = 'fadeOut 0.3s';
                setTimeout(() => noti.remove(), 300);
            }, 2500);
            
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
// FUNCIÓN PARA ACTIVAR EL BOTÓN BOOST
// ============================================

function activarBotonBoost() {
    const btnBoost = document.getElementById('btnBoost');
    if (btnBoost) {
        btnBoost.addEventListener('click', function() {
            // Animación del botón
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Mostrar el modal de Boost
            if (typeof mostrarModalBoost === 'function') {
                mostrarModalBoost();
            } else {
                console.error('Error: Función mostrarModalBoost no encontrada');
                alert('Error al cargar el modal de Boost');
            }
        });
    }
}

// ============================================
// INICIALIZAR TODO CUANDO EL DOM ESTÉ LISTO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de Boost cargado correctamente');
    activarBotonBoost();
});

// ============================================
// EXPORTAR FUNCIONES
// ============================================
window.mostrarModalBoost = mostrarModalBoost;
window.mostrarConfirmacionBoost = mostrarConfirmacionBoost;
window.activarBotonBoost = activarBotonBoost;

console.log('✅ Todos los modales de Boost están listos para usar');