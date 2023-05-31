import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/postsSlice";
import axios from "axios";


const Postcomp = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const page = useSelector((state) => state.posts.page);
    const isLoading = useSelector(state => state.posts.isLoading)
    useEffect(() => {
        dispatch(FetchData())
    },[])
   
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {
                    posts.map((e) => {
                        return (
                        <li key={e.id}>
                            <h2>{e.title}</h2>
                            <p>{e.body}</p>
                        </li>)
                    })
                }
                {isLoading?<p>loading....</p>:null}
            </ul>
            <button onClick={() => dispatch(FetchData(page))} >Load more</button>
        </div>
    )
}

export default Postcomp;