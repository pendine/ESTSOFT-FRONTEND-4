import {Link} from 'react-router-dom';


const products = [
  { id: 1, name: '노트북', price: 1000000 },
  { id: 2, name: '스마트폰', price: 800000 },
  { id: 3, name: '태블릿', price: 600000 }
];

function ProductList(){
  return (
    <div>
      <h1>상품목록</h1>
      {products.map( ele => {
        <div key={ele.id} sytle={{
          maring:'10px',
          padding:'10px',
          background:'lightgreen',
          border:'1px solid black',
        }}>
          <Link to={`/product/${products.id}`}
            style={{
              textDecoration:'none',
              color:'black',
            }}
          >
            <h3>{ele.name}</h3>
            <p>가격 : {ele.price}</p>
          </Link>
        </div>
      })}
    </div>
  );
}

export default ProductList;