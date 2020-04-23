import React from "react"

export default function card(props) {

    return (
        <section>
            <img src={props.photo}></img>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <a href={props.link}>View Profile</a>
        </section>
    )

}