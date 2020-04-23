import React from "react"

export default function card(props) {
    console.log(props)

    return (
        <img src='{props.photo}'>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <a href={props.link}>View Profile</a>
    )

}