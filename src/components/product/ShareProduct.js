import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';


const ShareProduct = ({id})=>{
return(
<IconButton aria-label="show more" onClick={()=>{
    console.log(`Share Product ${id}`)
}}>
          <ShareIcon />
      </IconButton>)
}

export default ShareProduct
