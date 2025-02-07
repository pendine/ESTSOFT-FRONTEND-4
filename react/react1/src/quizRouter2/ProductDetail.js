import {useParams, useNavigate} from 'react-router-dom';

const products = [
  { id: 1, name: '노트북', price: 1000000 },
  { id: 2, name: '스마트폰', price: 800000 },
  { id: 3, name: '태블릿', price: 600000 }
];

// 선택한 데이터의 상게 결과만 보면 되는 것이기 때문에
// 주소는 ProductList 컴포넌트에서 보낸 product/id값 형태로 주어짐
function ProductDetail(){

  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if(!product){
    return <div>상품을 찾을수 없음</div>
  }

  return(
    <div style={{padding: '20px'}}>
      <h2>{product.name}</h2>
      <p>가격 : {product.price}원</p>
      <button onClick={() => {navigate(-1)}}>뒤로 가기</button>
    </div>
  )
}

export default ProductDetail;