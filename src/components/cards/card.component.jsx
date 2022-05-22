import React, { Component } from 'react'
import './card.styles.css'


class Card extends Component {
    render() {
        const { name, id, email } = this.props.monster
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h5 className="card-text-top"> {name} </h5>
                <h5> {email} </h5>
            </div>
        )
    }
}

export default Card