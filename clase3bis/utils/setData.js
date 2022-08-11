import fs from 'fs'

// interface Product {
//     title: string
//     price: number
//     thumbnail: string
//     id?: number
// }

const setData = async (file, content) => {
    try {
        await fs.promises.writeFile(file, JSON.stringify(content, null, "\t"));
    } catch (error) {
        throw new Error("Ocurrió un error")
    }
};

export default setData