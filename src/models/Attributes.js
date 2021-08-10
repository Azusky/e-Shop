
class Attribute{
    constructor(name,value){
        this.name = name
        this.value = value
    }
    toPOJO(){
        return {
            name:this.name,
            value:this.value
         }
     }
     toJson(){
         return JSON.stringify(this.toPOJO())
     }
}

export default Attribute
