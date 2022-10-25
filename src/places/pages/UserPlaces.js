import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from "react-router-dom"

const DUMMY_PLACES = [
    {
        id: "p1",
        imageUrl: "https://source.unsplash.com/1000x1000/?places",
        title: "Centorous Mall",
        description: "An Amazing Mall",
        address: "100 N. Block Street, Lahore",
        creator: "u1",
        location: {
            lat: 27.545445,
            lng: 34.434334
        }
    },
    {
        id: "p2",
        imageUrl: "https://source.unsplash.com/1000x1000/?hills",
        title: "Centorous Mall",
        description: "An bad Mall",
        address: "d Block Street, Lahore",
        creator: "u2",
        location: {
            lat: 27.545445,
            lng: 34.434334
        }
    }
]

export default function UserPlaces() {
 
    
    const userId = useParams().userId;
    const loaded_places = DUMMY_PLACES.filter((place) => place.creator === userId)

  return (
    <PlaceList items={loaded_places}/>
  )
}
