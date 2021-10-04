import Image from '../ui/Image'
import Money from '../money/Money';
import Attributes from '../attribute/Attribute';
const Product = ({product:{name,id,imageUrls,description,price,attributes} ,mode}) => {
    // console.log(description)
    return(
        <div className='product' key={id} id={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <>{imageUrls.map(img =><Image url={img} alt={name} /> )}</>
            <ul>
                {attributes.map(attr => <li><Attributes attribute = {attr}/></li>)}
            </ul>
            <p>
                {(mode === 'std' &&<Money price={price.standard} />)
                    ||
                (mode === 'old' && <span>
                                      {'old price:'}  <strike> <Money price={price.standard} /></strike>
                                    <br/>
                                    {'new price:'}  <Money price={price.discount} />
                                    </span>
                                    )
                    ||
                (mode === 'act' &&  <b> <Money price={price.standard}/> </b> )}
            </p>
            {/* <h4><Money price={price.standard} mode={mode}/></h4> */}
        </div>
    );
}

export default Product
