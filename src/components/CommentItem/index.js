// Write your code here
import './index.css'

const likeImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const likedImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const del =
  'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

const CommentItem = props => {
  const {id, name, comment, likeUnlike, isLiked, deleteComment} = props
  console.log(props)

  const clickedLike = () => {
    likeUnlike(id)
  }

  const clickedDelete = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLiked ? likedImg : likeImg
  const likeClass = isLiked ? 'liked' : ''

  return (
    <li id={id}>
      <div className="comment-item-container">
        <div className="comment-user-profile amber">R</div>

        <div className="user-comment-container">
          <div className="name-comment-time">
            <p className="comment-user-name">{name}</p>
            <p className="commented-time">less than a minute ago</p>
          </div>
          <p className="comment-user-comment">{comment}</p>
        </div>
      </div>

      <div className="like-delete-container">
        <button onClick={clickedLike} className="like-btn" id={id}>
          <img alt="like" className="like-img" src={likeImgUrl} id="like" />
          <label className={`like-label  ${likeClass}`} htmlFor="like">
            {' '}
            Like
          </label>
        </button>
        <button
          onClick={clickedDelete}
          className="delete-btn"
          id={id}
          data-testid="delete"
        >
          <img alt="delete" className="del-img" src={del} />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
