import { useDispatch, useSelector } from 'react-redux';
import { setPosts, addPosts, setPage, FetchData } from './redux/postsSlice';
import { useState } from 'react';

import './App.css';
import Postcomp from './components/Postcomp';


function App() {
  const [input, setInput] = useState(0);
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)
  const isLoading = useSelector(state => state.posts.isLoading)
  //dispatch(setPage);

  
  return (
    <div className="App">
      {/* <ul>
        {
          posts.map(e => {
            return(
              <li>{e.title}</li>
            )
          })
        }
        {isLoading?<p>loading....</p>:null}
      </ul>
      <input type='text' onChange={(e) => setInput(e.value)}></input>
      <button onClick={()=>dispatch(addPosts(6))}>click</button>
      <button onClick={()=>dispatch(FetchData())}>set</button> */}
      <Postcomp/>
    </div>
  );
}

export default App;
