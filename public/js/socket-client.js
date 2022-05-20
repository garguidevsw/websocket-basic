const socket = io();

// Referencias

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on('connect', () => {
    console.log('Conectado...');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {
    console.log('Desconectado...');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        id: '123abc',
        mensaje,
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload);
})