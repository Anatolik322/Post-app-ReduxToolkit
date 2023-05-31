import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items:[],
  isLoading: false,
  page:1
}

export const FetchData = createAsyncThunk(
  'items/FetchData',
   async (page=1, {rejectWithWalue, dispatch}) => {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      console.log(res.data)
      dispatch(setPosts(res.data))
   }
)
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
         state.items = [...state.items, ...action.payload]
        },
        addPosts: (state, action) => {
          return {items: [...state.items, action.payload]}
        },
        setPage: (state, action) => {
          state.page = state.page+1
        }
        
    },
    extraReducers:(builder) => {
      builder
        .addCase(FetchData.pending, (state) => {
          state.isLoading = true;
         
        })
        .addCase(FetchData.fulfilled, (state, action) => {
          state.isLoading = false;
          //state.data = action.payload;
          state.page = state.page+1
        })
        .addCase(FetchData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
        });
    },
})

export const { setPosts, addPosts, setPage } = postsSlice.actions;
export default postsSlice.reducer;