import fs from 'fs'

const getData = async (file) => {
    try {
        const readedFile = await fs.promises.readFile(file, "utf-8");
        if (readedFile.length) return await JSON.parse(readedFile)
        else return readedFile
    } catch (error) {
        throw new error("Error while reading the file")
    }
};

export default getData;