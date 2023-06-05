import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLike } from '../redux/postsSlice'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

function Post({id, title, body}) {
    const dispatch = useDispatch();
    const likeArr = useSelector(state => state.posts.likeId);

  return (
      <Card
          body
          key={id}
          id={id}
          className="my-2"
          style={{
              width: '18rem',
              margin: '2rem'
          }}
      >
          <CardTitle tag="h5">
              {title}
          </CardTitle>
          <CardText>
              {body}
          </CardText>
          <Button color="primary">
              Go somewhere
          </Button>
          <button onClick={() => dispatch(setLike(+id))}>{likeArr.includes(id)? 'unlike': 'like'}</button>
      </Card>
  )
}

export default Post
