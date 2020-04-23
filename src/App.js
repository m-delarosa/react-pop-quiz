import React, { Component } from 'react'
import './App.css'
import Mike from "./Mike"

class App extends Component {

  state = {
    students: [
      {
        id: 1,
        name: "Michael De La Rosa",
        location: "Denver, CO",
        profile_link: 'www.google.com',
        photo: "https://s3.amazonaws.com/spectrumnews-web-assets/wp-content/uploads/2018/11/13154625/20181112-SHANK3monkey-844.jpg"
      },
      {
        id: 2,
        name: "Jon Higger",
        location: "Tampa, FL",
        profile_link: 'www.google.com',
        photo: "https://cms.qz.com/wp-content/uploads/2016/10/gorilla.jpg?quality=75&strip=all&w=1600&h=900&crop=1"
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1> Flatiron SE Program Students </h1>
        <section class="card-container">
          <Mike
            name={this.state.students.0.name}
            location={this.state.students.0.location}
            link={this.state.students.0.profile_link}
            photo={this.state.students.0.photo}
          />
          <Jon
            name={this.state.students.1.name}
            location={this.state.students.1.location}
            link={this.state.students.1.profile_link}
            photo={this.state.students.1.photo}
          />
        </section>
      </div>
    )
  }

}

export default App
