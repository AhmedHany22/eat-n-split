import React, { useState } from 'react'

const FormAddFriend = ({ onAddFriend }) => {
    const [newFriend, setNewFriend] = useState({ id: crypto.randomUUID, name: "", image: "", balance: 0 })

    const handleOnAddFriend = (e) => {
        e.preventDefault();

        if (!newFriend.name || !newFriend.image) return;

        onAddFriend(newFriend);
    }

    return (
        <form className="form-add-friend" onSubmit={ handleOnAddFriend }>
            <label>💁 Friend Name</label>
            <input type="text" value={ newFriend.name } onChange={ (e) => setNewFriend((newFriend) => { return { ...newFriend, name: e.target.value } }) } />
            <label>😠 Image URL</label>
            <input type="text" value={ newFriend.image } onChange={ (e) => setNewFriend((newFriend) => { return { ...newFriend, image: e.target.value } }) } />
            <button className="button">Add</button>
        </form>
    )
}

export default FormAddFriend