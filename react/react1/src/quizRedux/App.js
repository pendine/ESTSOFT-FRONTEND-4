const products = [
  { id: 1, name: "노트북", price: 1000000 },
  { id: 2, name: "스마트폰", price: 800000 },
  { id: 3, name: "태블릿", price: 600000 },
];


const count = useSelector((state) => state.counter.value )
const dispatch = useDispatch();


function App() {
  return products.map((ele) => {
    <div key={ele.id}>
      <h1>{ele.name}</h1>
      <p>{ele.price}</p>
      <button type="button" onClick={ (e)=>{ dispatch( addCart( e.target.parentnode.id))} } >담기</button>
    </div>
  });
}
