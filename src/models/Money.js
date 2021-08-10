

class Money {
    constructor(amount,currency ){
        this.amount = amount
        this.currency = currency

    }
    toPOJO(){
       return {
            standard:this.price.standard,
            discount:this.price.discount
        }
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
}

export default Money
