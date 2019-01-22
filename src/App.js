import React from 'react'
import Header from './Header'
import Content from './Content'

class App extends React.Component {

  render() {
    return (
      <div className='notificationsFrame'>
        <div className ='panel'>
        <Header title='Timeline'/>
        <Content/>
        <Header title='Profile'/>
        <Header title='Setting'/>
        <Header title='Chat'/>
        
        </div>
        

      </div>
    )
  }
}

export default App