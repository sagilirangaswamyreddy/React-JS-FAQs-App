// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, toggleIsFavorite} = props
  const {id, questionText, answerText, isDisplay} = eachFaq

  const onClickToggle = () => {
    toggleIsFavorite(id)
  }

  console.log(answerText)

  const imgUrl = isDisplay
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgAltText = isDisplay ? 'minus' : 'plus'

  return (
    <li>
      <div className="faq-item-container">
        <div className="question-and-img-container">
          <h1 className="question-heading">{questionText}</h1>
          <button type="button" className="btn" onClick={onClickToggle}>
            <img src={imgUrl} alt={imgAltText} className="img-styles" />
          </button>
        </div>
        {isDisplay && <hr />}
        <p className="answer-para">{isDisplay ? `${answerText}` : ''}</p>
      </div>
    </li>
  )
}

export default FaqItem
