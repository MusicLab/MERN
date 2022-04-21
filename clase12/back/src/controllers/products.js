import getData from "../utils/getData"
import setData from "../utils/setData"
import Producto from '../class/producto.js';
import fs from "fs"
import path from 'path';
const publicPathFolder = path.resolve(__dirname, '../');
const publicPathFileName = path.resolve(
  __dirname,
  '../products.txt'
);

const objToJSON = (contenido) => {
    return JSON.stringify(contenido, undefined, 2);
  };

function guardarProducto(product) {
    fs.writeFileSync(publicPathFileName, objToJSON(product), 'utf-8');
    }

    

    
