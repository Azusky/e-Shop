import React, {createContext, useReducer, useEffect} from  "react"

export const ProductContext = createContext()

const ProductContextProvider = (props) =>{
    const [product, dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem('product')
        return localData ? JSON.parse(localData):[]
    })
    useEffect(()=>{
        localStorage.setItem('product', JSON.stringify(product))
    }, [product])
    return (
        <ProductContext.Provider value={{product, dispatch}}>
            {props.childre}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
