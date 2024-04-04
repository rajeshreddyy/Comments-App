import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

const commentsImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

// Write your code here
class Comments extends Component {
  state = {value: '', name: '', comment: '', count: 0, comments: []}

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  postComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const commentToAdd = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      count: prevState.count + 1,
      comments: [...prevState.comments, commentToAdd],
    }))
  }

  likeUnlike = id => {
    const {comments} = this.state
    const toogleLikeComments = comments.map(eachComment => {
      if (eachComment.id === id) {
        eachComment.isLiked = !eachComment.isLiked
      }
      return eachComment
    })
    this.setState({comments: toogleLikeComments})
  }

  deleteComment = id => {
    const {comments} = this.state
    const commentsAfterDelete = comments.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState(prevState => ({
      comments: commentsAfterDelete,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {value, count, comments} = this.state

    return (
      <div>
        <div className="container">
          <div className="comments-form-container">
            <form
              onSubmit={this.postComment}
              id="comments"
              className="comments-form"
            >
              <h1 className="heading">Comments</h1>
              <p className="paragraph">Say something about 4.0 Technoligies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="user-name"
                onChange={this.updateName}
              />
              <textarea
                placeholder="Your Comment"
                rows="4"
                cols="50"
                className="user-comment"
                onChange={this.updateComment}
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>

            <img alt="comments" src={commentsImg} className="comments-img" />
          </div>

          <hr className="line" />

          <div className="comments-count-container">
            <p className="comments-count">{count}</p>
            <p className="comments-heading">Comments</p>
          </div>
        </div>
        <br />
        <ul className="comments-list">
          {comments.map(eachComment => {
            const {id, name, comment, isLiked} = eachComment
            return (
              <CommentItem
                key={id}
                id={id}
                name={name}
                comment={comment}
                likeUnlike={this.likeUnlike}
                isLiked={isLiked}
                deleteComment={this.deleteComment}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Comments
