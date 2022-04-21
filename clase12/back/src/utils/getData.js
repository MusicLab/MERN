import fs from 'fs'
import path from "path"
const publicPathFolder = path.resolve(__dirname, '../');
const publicPathFileName = path.resolve(
  __dirname,
  '../products.json'
);

const getData = async (file) => {
    try {
        const readedFile = await fsPromises.readFile(file, "utf-8");
        if (readedFile.length) return await JSON.parse(readedFile)
        else return readedFile
    } catch (error) {
        throw new error("Error while reading the file")
    }
};


export default getData;