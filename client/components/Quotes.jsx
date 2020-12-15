import React from 'react'

class Quotes extends React.Component {
    
    render () {
      return (
        <div>
            <h2>
              {this.props.quote}
            </h2>
        </div>
      )
    }
  }
  
  export default Quotes