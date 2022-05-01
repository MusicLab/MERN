import knex from "knex"

const knexProducts = knex({
    client: "mysql",
    connection: {
        host : "127.0.0.1",
        port : "3306",
        user : "root",
        password : "",
        database: "products"
    },
    pool: { min:0, max:7 } 
})

export default knexProducts