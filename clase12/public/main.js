const socket = io.connect("http://localhost:8080", { forceNew: true })

function addMessage(e) {
    console.log("Llamando a addmessage")
    var mensaje = {
        author: document.getElementById("username").value,
        text: document.getElementById("texto").value,
    }
    socket.emmit("new-message", mensaje)
    return false
}

// Cuando arrancamos pedimos la data que hay actualmente enviando un socket
socket.emit('askProducts');

// Si emite un mensaje individual
socket.on('messages', (data) => {
  console.log('RECIBI MENSAJE');
  alert(data);
});

