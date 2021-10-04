
import './App.css';
import ProductModels from './models/Product';
import Product from './components/product/Product';
import ProductCard from './components/product/ProductCard';
import MoneyModel  from "./models/Money";
import AttributeModel from './models/Attributes';

import {MenuShop} from './components/menu/Menu';
import { DrawerShop } from './components/Drawer/Drawer';
import clsx from 'clsx';
import RouterAppTest from './components/testRouter/RouterAppTest'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// import ShopIcon from '@material-ui/icons/Shop';

import AddToCartButton from './components/cart/AddToCart';
import ShareProduct from './components/product/ShareProduct';
function App() {

  const actions = (id)=>{
    return (
      <>
      {/* <IconButton aria-label="add to favorites" color="primary">
        <ShopIcon />
      </IconButton> */}
      <AddToCartButton id={id}/>
      <ShareProduct id={id}/>
      </>
    )
  }

  let children = [
                  new ProductModels(1,'Ashly',
                                      ['https://pbs.twimg.com/media/DJZd7xNUQAA6-kY.jpg',
                                      'https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5cf226624da5b600affa8a0a_5d08841535c0cc00afd02701/scale_1200'],
                                      'Perfect Maid',
                                      {standard: new MoneyModel(50,'BitCoin'),
                                       discount: new MoneyModel(100,'BitCoin')},
                                       [
                                        new AttributeModel('weght','49Kg'),
                                        new AttributeModel('height',"165cm")
                                      ]
                                       ),
                  new ProductModels(2,'Tanya',['http://image.tmdb.org/t/p/original/wDPaQwcOM4oUM2IcO9iA1XLABO6.jpg',
                                                'https://i.pinimg.com/originals/1f/54/3d/1f543df63ca524a07ca0c46bc7c9a6d7.jpg'],
                                     'A little stupid but very cute',
                                     {standard: new MoneyModel(60,'Nothing'),
                                     discount: new MoneyModel(100,'Nothing')},
                                     [
                                      new AttributeModel('weght','45Kg'),
                                      new AttributeModel('height',"168cm")
                                    ]
                                     ),
                  new ProductModels(3,'Nancy',['https://c.wallhere.com/photos/b1/d5/Nancy_A_model_women_looking_at_viewer_face_blonde-1342623.jpg!d',
                                                'https://www.nudelas.com/posts/nancy-a-flirty/nancy-a-8.jpg'],
                                   'Vegan who eats chicken because he thinks chicken is not meat',
                                     {standard: new MoneyModel(45,'Chickens'),
                                     discount: new MoneyModel(100,'Chickens')},
                                     [
                                       new AttributeModel('weght','50Kg'),
                                       new AttributeModel('height',"170cm")
                                     ])
                ]

  return (
    <div className='App'>
      <DrawerShop/>
      <MenuShop/>
      <div>

        {children.map(child => <ProductCard actions={actions(child.id)} {...child}/>)}

      </div>
      <hr/>
      {/* <div>{children.map(child => <Product product={child} mode='old'/>)}</div> */}
      <RouterAppTest></RouterAppTest>

    </div>

  );
}

export default App;
