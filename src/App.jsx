import React, { useState } from 'react'
import { Friends } from './Components/Friends';
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from './Components/FormSplitBill';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleForm = () => {
    setShowAddForm((show) => !show)
  }

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend])
    setShowAddForm(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends friends={ friends } />

        { showAddForm && <FormAddFriend onAddFriend={ handleAddFriend } /> }

        <button className="button" onClick={ handleForm }>{ showAddForm ? 'Close' : 'Add Friend' }</button>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App;
