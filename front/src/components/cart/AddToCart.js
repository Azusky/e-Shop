import ShopIcon from '@material-ui/icons/Shop';
import IconButton from '@material-ui/core/IconButton';

const AddToCartButton = ({id})=>{
    return(
    <IconButton aria-label="add to favorites" color="primary" onClick={()=>{
        console.dir(id)
        console.log(`Adding product ${id} to cart`)
    }}>
        <ShopIcon />
    </IconButton>
    )
}
export default AddToCartButton
