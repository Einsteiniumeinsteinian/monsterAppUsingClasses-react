import { Component } from 'react'

class Cardlist extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div>
        {monsters.map((monster) => {
          return <h3 key={monster.id}>{monster.name}</h3>
        })}
      </div>
    )
  }
}

export default Cardlist