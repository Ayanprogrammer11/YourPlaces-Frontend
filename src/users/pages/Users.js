import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [{
    id: 1,
    name: "Ayan",
    places: 4,
    image: "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk="
  }

]
  return (
    <UsersList items={USERS}/>
  )
}

export default Users
