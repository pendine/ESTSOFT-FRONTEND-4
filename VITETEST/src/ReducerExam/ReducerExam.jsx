import { useReducer, useState } from 'react'

// Reducer관련 tip
// 메서드를 상태별로 관리하면
// 네이밍부분에서 편리하게 처리하는것또한 가능.
// reducer 최고의 장점은 컴포넌트와 분리하여
// 해당 메서드의 재사용성을 올릴수 있다라는점.
//  -? reducer로 구현하기 어렵다면
//     처음에는 그냥 state로 먼저하고
//     그다음에 reducer로 바꿔보는 방법을 도입.

// reducer없이 구현한 장바구니 기능.
// export default function Cart() {
//   const [cart, setCart] = useState([])

//   const addItem = () => {
//     setCart([...cart, '상품', +(cart.length + 1)])
//   }

//   const clearCart = () => {
//     setCart([])
//   }

//   const removeItem = index => {
//     setCart(cart.filter((_, i) => i !== index))
//   }

//   return (
//     <div>
//       <button onClick={addItem}>상품추가</button>
//       <button onClick={clearCart}>장바구니 비우기</button>

//       {cart.map((item, index) => (
//         <div key={index}>
//           {item}
//           <button onClick={() => removeItem(index)}>삭제</button>
//         </div>
//       ))}
//     </div>
//   )
// }

// const cartReducer = (state, action) => {
//   // action에는 렌더링 파트에 정의한 타입의 값이 들어옴.
//   switch (action.type) {
//     case 'ADD_ITEM':
//       console.log('test1111')
//       return [...state, action.item]
//     case 'REMOVE_ITEM':
//       console.log('test2222')
//       return state.filter((_, index) => index !== action.index)
//     case 'CLEAR':
//       console.log('test33333')
//       return []
//     default:
//       console.log('test44444')
//       return state
//   }
// }
// export default function Cart() {
//   // reducer의 초기상태는 빈 배열로 설정.
//   // cart : cart 컴포넌트의 상태를 관리하고 나타내는 배열타입의 상태변수.
//   // dispatch : 상태 변경을 위해 reducer에 액션을 전달하는 함수.
//   // cartReducer : 상태 변경 로직들이 구현되어있는
//   //               reducer를 구현하는 reducer함수.
//   const [cart, dispatch] = useReducer(cartReducer, [])

//   return (
//     <div>
//       <button
//         onClick={() =>
//           dispatch({
//             type: 'ADD_ITEM',
//             item: '상품' + (cart.length + 1)
//           })
//         }>
//         상품추가
//       </button>
//       <button onClick={() => dispatch({ type: 'CLEAR' })}>
//         장바구니 비우기
//       </button>

//       {cart.map((item, index) => (
//         <div key={index}>
//           {item}
//           <button
//             onClick={() =>
//               dispatch({
//                 type: 'REMOVE_ITEM',
//                 index
//               })
//             }>
//             삭제
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }
