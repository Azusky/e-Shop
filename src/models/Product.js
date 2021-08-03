
class ProductModels {
    constructor(id, name, image){
        this.id = id
        this.name = name
        this.image = image
    }

    toPOJO() {
        return {
            id : this.id,
            name: this.name,
            image: this.image
        }
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
}



// let p = new Product(1,'Holy','image.jpeg')

// console.log(p.toPOJO())
// console.log(p.toJson())

export default ProductModels
