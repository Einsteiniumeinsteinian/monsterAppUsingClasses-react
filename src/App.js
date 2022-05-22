import React, { Component } from "react";
import Cardlist from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search.component'
// import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentMonsters: [],
      allMonsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) =>
        this.setState(
          () => {
            return { currentMonsters: monsters, allMonsters: monsters }
          }
        ), () => {
          console.log(this.state)
        }
      )
      .catch((error) => console.log(error))
  }

  onsearch = (event) =>  {
    const {allMonsters} = this.state
      const searchString = event.target.value.toLowerCase()
      const filteredMonsters = allMonsters.filter(
        (monster) => monster.name.toLowerCase().indexOf(searchString) !== -1,
      )
      this.setState(() => {
        return { currentMonsters: filteredMonsters }
      })
  }

  render() {
    const {currentMonsters, allMonsters} = this.state
    const {onsearch} = this
    return (
      <div className="App App-header">
          <SearchBar monsters={allMonsters} onChangeHandler={onsearch} placeholder='search monster' className='monster-search-bar' />
          <Cardlist monsters={currentMonsters} />
      </div>
    )
  }
}

export default App
