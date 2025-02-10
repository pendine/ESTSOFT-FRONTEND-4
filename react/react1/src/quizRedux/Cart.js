
const cart = createSlice({
  // name 속성 : 슬라이스 이름을 정의할때 사용
  name : 'cart',
  // 슬라이스의 초기값 설정
  initialState: {
    value:[],
  },
  reducers:{
    addCart: (state, action) =>{
      state.value.push(action.id);
    },
    deleteCart: (state, action) =>{
      state.value.filter((index) =>{
        index.id !== action.id;
      });
    },
    // action파라미터는 dispatch된 액션 객체 자체를 의미.
    clear: (state, action)=>{
      state.value = [];
    }
  },

})

export const cart;