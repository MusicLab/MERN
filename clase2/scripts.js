class Persona {
    constructor(nombre, apellido, libros, mascotas ) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []

    }
    getFullName() {
        return `Nombre: ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }    
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBookNames() {
        const nombreLibros = []
        this.libros.forEach(libro=>nombreLibros.push(libro.nombre))
        return nombreLibros
    }

}

Carlos = new Persona ("Carlos", "Benitez")
console.log(Carlos)

console.log(Carlos.getFullName())
Carlos.addMascota("Luna")
console.log(Carlos)
console.log(Carlos.countMascotas())
Carlos.addBook("Harry Potter", "jk rowling")
Carlos.addBook("Harry Potter 2", "jk rowling")
console.log(Carlos)
console.log(Carlos.getBookNames())