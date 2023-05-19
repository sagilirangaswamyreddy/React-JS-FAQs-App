// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqList: []}

  componentDidMount() {
    const {faqsList} = this.props

    this.setState({faqList: [...faqsList]})
    this.setState(prevState => ({
      faqList: prevState.faqList.map(eachFaq => ({
        ...eachFaq,
        isDisplay: false,
      })),
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      faqList: prevState.faqList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isDisplay: !eachFaq.isDisplay}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqList} = this.state
    console.log(faqList)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-container">
            {faqList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                eachFaq={eachFaq}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
