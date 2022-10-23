import React from 'react'
import PlaceList from '../components/PlaceList'

export default function UserPlaces() {
 
    const DUMMY_PLACES = [
        {
            id: "p1",
            imageUrl: "https://source.unsplash.com/1000x1000/?places",
            title: "Centorous Mall",
            description: "An Amazing Mall",
            address: "100 N. Block Street, Lahore",
            creator: "u1",
            coordinates: {
                lat: 27.545445,
                lon: 34.434334
            }
        },
        {
            id: "p2",
            imageUrl: "https://source.unsplash.com/1000x1000/?hills",
            title: "Centorous Mall",
            description: "An bad Mall",
            address: "d Block Street, Lahore",
            creator: "u2",
            coordinates: {
                lat: 27.545445,
                lon: 34.434334
            }
        }
    ]

  return (
    <PlaceList items={DUMMY_PLACES}/>
  )
}
