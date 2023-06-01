import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/postsSlice";
import axios from "axios";
import { Spinner } from "reactstrap";
import { CardTitle, Card, CardText, Button, Container, Row } from "reactstrap";

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
            <Container>
                <Row xs="3">
                {
                    posts.map((e) => {
                        return (
                            <Card
                                body
                                className="my-2"
                                style={{
                                    width: '18rem',
                                    margin: '2rem'
                                }}
                            >
                                <CardTitle tag="h5">
                                    {e.title}
                                </CardTitle>
                                <CardText>
                                    {e.body}
                                </CardText>
                                <Button color="primary">
                                    Go somewhere
                                </Button>
                            </Card>)
                    })
                }
                </Row>
                {isLoading ? <Spinner color="secondary">
                    Loading...
                </Spinner> : null}
            </Container>
            <button onClick={() => dispatch(FetchData(page))} >Load more</button>
        </div>
    )
}

export default Postcomp;


