
// Relógio em tempo real na barra de tarefas
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Gerenciamento de Janelas
function openWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.style.display = 'flex';
    }
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.style.display = 'none';
    }
}

// Alternar Menu Iniciar
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
}

// Fechar menu iniciar ao clicar fora dele
window.addEventListener('click', function(e) {
    const menu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-btn');
    
    if (!menu.contains(e.target) && !startBtn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});
