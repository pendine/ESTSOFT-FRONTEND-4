// 리듀서 영역

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        filter: 'all'
    },
    reducers:{

        addTodo: (state, action) =>{
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed:false 
            });
        },
        removeTodo: (state, action) =>{

            // action.payload로 전달된 id값과 일치하지
            // 않은 항목들만 필터링하여
            // 리듀서의 items 배열을 업데이트,.
            state.items = state.items.filter
            (todo => todo.id !== action.payload);
        },
        // action.payload로 id값을 전달받아 할일 값을 반전.
        toggleTodo: (state, action) =>{
            const todo = state.items.find(todo => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        setFilter: (state, action) =>{
            state.filter = action.payload;
        }

    }
});

export const {addTodo, removeTodo, toggleTodo, setFilter} = todoSlice.actions;
export default todoSlice.reducer;