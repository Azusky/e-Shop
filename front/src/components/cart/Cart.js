import { useState } from "react"



const Cart = ({count}) => {

    return(

            <button>catr ({count})</button>


    )
}

const AddToCart = ({count, setCount}) => {

    return(

            <button
            onClick={()=>{
                setCount(++count)
                }
            }
            >Add to Cart</button>


    )
}


const HOC = (props) => {
    let [count, setCount] =  useState(props.count)
    return(
        <>
            <Cart count={count}/>
            <AddToCart count={count} setCount={setCount}/>
        </>
    )
}

export { Cart, AddToCart, HOC }
