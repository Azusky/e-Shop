
function Product(props){
    return(
        <div>
            <h2>{props.product.name}</h2>
            <img src={props.product.image}/>
        </div>
    );
}

export default Product
