import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import Filters from './components/Filters'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      filters: {
        dateFrom: new Date(),
        dateTo: new Date(new Date().valueOf() + 86400000),
        country: '',
        price: '',
        rooms: ''
      }
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    })
  } 
        
  
  render() {  
    return (
      <div>
        <Hero filters={this.state.filters} />
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange } />      
      </div>
    )
  }
}

export default App;
    
          

