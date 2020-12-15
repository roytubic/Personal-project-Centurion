import React from 'react'
import Countdown from './Countdown'
import Quotes from './Quotes'

import { getQuote } from '../api'

class Centurion extends React.Component {
  state = {
    quote:''
  }

  componentDidMount () {
    this.reloadQuote()
  }

  reloadQuote = () => {
  getQuote()
        .then(quote => {
          this.setState({quote: quote})
        })
  }

  render(){
  return (
    <div>
      <h1>Welcome to the Centurion!</h1>
      <Countdown reloadQuote = {this.reloadQuote}/>
      <Quotes quote = {this.state.quote}/>

    </div>
  )}
}

export default Centurion
