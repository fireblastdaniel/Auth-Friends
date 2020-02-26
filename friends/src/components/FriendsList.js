import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

const FriendsList = () => {
    const [listChange, setListChange] = useState(false);
    const [friends, setFriends] = useState([])
    const [formState, setFormState] = useState({ name: '', age: '', email: '' })

    useEffect( () => {
        axiosWithAuth()
            .get('/api/friends')
            .then( res => {
                console.log(res)
                setFriends(res.data)
            })
    }, [listChange])

    const deleteCard = id => {
        setListChange(!listChange);
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => {console.log(res)})
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        e.preventDefault();
        setListChange(!listChange);
        axiosWithAuth()
            .post('/api/friends', formState)
            .then(res => console.log(res))
    }

    return (
        <div>
            <FriendForm addFriend={addFriend} handleChange={handleChange}/>
            {
                friends.map( item => (
                    <FriendCard key={item.id} details={item} deleteCard={deleteCard}/>
                ))
            }
        </div>
    )
}

export default FriendsList;