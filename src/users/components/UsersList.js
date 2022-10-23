import React from 'react'
import UserItem from './UserItem';
import "./UsersList.css"
const UsersList = (props) => {
    const {items} = props;
   if(items.length === 0) {
    return (
     <div className="center">
        <h2>No Users Found!</h2>
        {/* <button className='btn'>hello</button> */}
     </div>
    )
   }
   return <ul className="users-list">
     {items.map((user) => {
        return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
     })}
   </ul>

}

export default UsersList
