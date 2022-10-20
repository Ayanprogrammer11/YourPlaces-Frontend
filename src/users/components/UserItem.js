import React from 'react'
import "./UserItem.css"
import Avatar from "../../shared/components/UiElements/Avatar"
import { Link } from "react-router-dom";
import Card from "../../shared/components/UiElements/Card";
// Create a variable named "ayan" and store the value "hey" in it

const UserItem = (props) => {
  const {id, name, image, placeCount} = props;
  return (
    <li className="user-item">
      {/* <Card className="user-item__content"> */}
        <Link to={`/${id}/places`}>
        <div className="user-item__image">
          <Avatar image={image} alt={name}/>
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>{placeCount} {placeCount === 1 || placeCount === 0 ? "Place" : "Places"}</h3>
        </div>
        </Link>
      {/* </Card> */}
    </li>
  )
}

export default UserItem
