import fs from "fs"

const setData = async (file, content) => {
    try {
        await fs.promises.writeFile(file, JSON.stringify(content, null, "\t"));
    } catch (error) {
        throw new Error("Ocurrió un error")
    }
};

export default setData