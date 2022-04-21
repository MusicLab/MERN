import { leerMessages } from './app.js';
import { guardarProducto } from "../controllers/products"
import setData from "../utils/setData"
import getData from "../utils/getData"


/**
 * DATOS A MANIPULAR
 */
const productos = []; //Array de productos
const dbIDs = []; //Array de los IDs de los productos
const lastID = { lastID: 0 }; //Ultimo ID de producto utilizado
const messages = []; //Array de todos los mensajes del chat
const carts = []

//Se verifica si existen mensajes guardados
function checkMessagesOld() {
  let messageOld = JSON.parse(leerMessages());
  if (messageOld !== -1) {
    messages.push.apply(messages, messageOld);
  }
}





//Se inicializan los mensajes
checkMessagesOld();
export { productos, dbIDs, lastID, messages };






