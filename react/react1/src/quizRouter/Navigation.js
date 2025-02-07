// import { Outlet, Link} from 'react-router-dom';

// // Home, About, Products
/*
Link, NavLink
Link
 클릭시 다른 페이지로 이동하는 컴포넌트
NavLink
 현재 경로와 일치할때 특정 스타일이나 클래스를 적용할 수 있는 컴포넌트
*/
// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>  {/* 라우팅 효과 */}
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </>
//   );
// };
// export default Layout;

import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            marginRight: '10px',
            color: isActive ? 'blue' : 'black',
            textDecoration: 'none'
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about"
          style={({ isActive }) => ({
            marginRight: '10px',
            color: isActive ? 'blue' : 'black',
            textDecoration: 'none'
          })}
        >
          About
        </NavLink>
        <NavLink 
          to="/products"
          style={({ isActive }) => ({
            color: isActive ? 'blue' : 'black',
            textDecoration: 'none'
          })}
        >
          Products
        </NavLink>
      </nav>
    );
  }

export default Navigation;