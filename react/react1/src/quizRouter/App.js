import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Product.js";

// import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navigation from './Navigation.js';
// import Home from './Home.js';
// import About from './About.js';
// import Products from './Product.js';

// // 
// // Home, About, Products
// export default function RoutingApp(){
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />}>
//             <Route path='/1' element={<Products1 /> } />
//             <Route path='/2' element={<Products2 /> } />
//             <Route path='/3' element={<Products3 /> } />
//             <Route path="*" element={<h1>page not</h1>} />
//         </Route>
//       </Routes>
//       <Routes>
//         <Route path="/products/">
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default function RoutingApp(){
    return(
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<h1>페이지를 찾을 수 없습니다.</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}