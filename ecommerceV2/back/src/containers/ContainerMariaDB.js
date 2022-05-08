export default class ContainerMariaDB {
   
    constructor(connection, table) {
        this.connection = connection
        this.table = table
    }

    async getAll() {
        return await this.connection.from(this.table).select("*")
    }

    async getById(id) {
        try {
            let data = await this.connection.from(this.table).select("*").where("id" , id)
            if (data.length > 0) {
                console.log("aca")
                return data
            }
            else {
                throw new Error(`product with id: ${id} not found`)
            }

        } catch (error) {
            throw new Error(`error at listing by Id ${error}`)
        }
    }

    async save(product) {
        let idDb = null
        await this.connection.from(this.table).insert(product).then((id) => {
            idDb = id
        })
        return idDb
    }

    async deleteById(id) {
        let data = await this.connection.from(this.table).select("*").where("id" , id)
        if (data.length > 0 ) {
            await this.connection.from(this.table).select("*").where("id" , id).del()
            return data
        }
        else {
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async updateProduct(id, body) {
        try {
            let data = await this.connection.from(this.table).select("*").where("id" , id)
            if (data.length > 0) {
                let data = await this.connection.from(this.table).select("*").where("id" , id).update(body)
                return data
            }
            else {
                throw new Error(`error in body or id ${id} ${body}`)
            }
        } catch (error) {
            throw new Error(`error at listing by Id ${error}`)
        }
    }
    async deleteAll() {
        await this.connection.from(this.table).del()
    }
        
}

