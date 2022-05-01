import knexProducts from "./config"


// knex.schema.dropTableIfExists("products")
//     .finally(()=>{
        
//     })

const listProducts = () => {
    knexProducts.from("allProducts").select("*")
    .then((data)=>{
        console.log(data)
    })
}
listProducts()