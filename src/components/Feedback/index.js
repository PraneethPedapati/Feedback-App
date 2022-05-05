import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  submitFeedback = () => {
    const {isFeedbackSubmitted} = this.state
    this.setState({isFeedbackSubmitted: !isFeedbackSubmitted})
  }

  showSubmitCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="reaction-button-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="list-item">
              <button
                type="button"
                className="reaction-button"
                onClick={this.submitFeedback}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="reaction-emoji"
                />
                <p className="emoji-reaction-text">{eachItem.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  showThankyouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="description">
          We will use feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="bg-container">
        {isFeedbackSubmitted ? this.showThankyouCard() : this.showSubmitCard()}
      </div>
    )
  }
}

export default Feedback
