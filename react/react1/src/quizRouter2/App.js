import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;