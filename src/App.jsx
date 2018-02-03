import React, { Component, PropTypes } from 'react'

import Header from './common/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>&copy; 2018</footer>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
