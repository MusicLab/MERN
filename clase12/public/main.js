const socket = io.connect();

// Cuando arrancamos pedimos la data que hay actualmente enviando un socket
socket.emit('askProducts');

// Si emite un mensaje individual
socket.on('messages', (data) => {
  console.log('RECIBI MENSAJE');
  alert(data);
});

// Mensaje para todos los clientes
socket.on('update', (products) => {
  products.forEach((product) => {
    render(product);
  });
});

let submit = document.getElementById('form-product');

submit.addEventListener('submit', (e) => {
  let form = e.target;
  let inputs = new Object();
  e.preventDefault();
  form = submit.getElementsByTagName('input');

  for (let index = 0; index < form.length; index++) {
    inputs[form[index].name] = form[index].value;
  }
  console.log(inputs);
  socket.emit('new-product', inputs);
});

