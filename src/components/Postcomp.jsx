import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData, resetPosts, setLike } from "../redux/postsSlice";
import Post from "./Post";
import axios from "axios";
import { Spinner } from "reactstrap";
import { CardTitle, Card, CardText, Button, Container, Row } from "reactstrap";
import "./postComp.css"

const Postcomp = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const page = useSelector((state) => state.posts.page);
    const isLoading = useSelector(state => state.posts.isLoading);
    const [likeClass, setLikeClass] = useState('heart')
    useEffect(() => {
        dispatch(FetchData())
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <Container>
                <Row xs="3">
                    {
                        posts.map((e) => {
                            
                            return (
                                <Post id={e.id} title={e.title} body={e.body}></Post>
                                )
                        })
                    }
                </Row>
                {isLoading ? <Spinner color="secondary">
                    Loading...
                </Spinner> : null}
            </Container>
            <Button color="primary" onClick={() => dispatch(FetchData(page))} >Load more</Button>
            <Button color="secondary" onClick={() => dispatch(resetPosts())} >Show less</Button>
        </div>
    )
}

export default Postcomp;


