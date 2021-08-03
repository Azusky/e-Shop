
import './App.css';
import ProductModels from './models/Product';
import Product from './components/product/Product';


function App() {
  let p1 = new ProductModels(1,'Ashly','https://pbs.twimg.com/media/DJZd7xNUQAA6-kY.jpg')
  let p2 = new ProductModels(2,'Tanya','http://image.tmdb.org/t/p/original/wDPaQwcOM4oUM2IcO9iA1XLABO6.jpg')
  let p3 = new ProductModels(3,'Nancy','https://c.wallhere.com/photos/b1/d5/Nancy_A_model_women_looking_at_viewer_face_blonde-1342623.jpg!d')
  console.log(p1.toJson)
  return (
    <div>

      <Product product={p1}/>

      <Product product={p2}/>

      <Product product={p3}/>

    </div>

  );
}

export default App;
