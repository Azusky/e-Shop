// import Money  from "./Money";
// rename models
class ProductModels {
    constructor(id, name, imageUrls,description, price, attributes){
        this.id = id
        this.name = name
        this.description = description
        this.attributes = attributes
        this.imageUrls = imageUrls
        this.price = price
    }

    toPOJO() {
        return {
            id : this.id,
            name: this.name,
            imageUrls: this.imageUrls,
            description : this.description,
            attributes: this.attributes,
            price: {
                standard:this.price.standard,
                discount:this.price.discount
            }
        }
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
}



// let p = new ProductModels(1,'Holy','image.jpeg',new Money(50,'usd'),new Money(100,'usd'))

// console.log(p.toPOJO())
// console.log(p.toJson())

export default ProductModels
