import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "posts/fetchPosts", // 액션타입 설정
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log("받아온 데이터 확인", data);
      return data;
    } catch (error) {
      return rejectWithValue("내용을 불러 오는것에 실패함");
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        console.log("여기까지 전달되나?5678");
        state.loading = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log("여기까지 전달되나?1234");
        state.loading = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { actions } = postSlice;
export default postSlice.reducer; // 리듀서 default export
