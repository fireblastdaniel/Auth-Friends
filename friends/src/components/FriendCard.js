import React from 'react'

const FriendCard = props => {

    return (
        <div className='friend-card'>
            <p>Name: {props.details.name}</p>
            <p>Age: {props.details.age}</p>
            <p>Email: {props.details.email}</p>
            <div className='delete-btn' onClick={() => props.deleteCard(props.details.id)}>X</div>
        </div>
    )
}

export default FriendCard;