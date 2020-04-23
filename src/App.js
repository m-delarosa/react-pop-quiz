import React, { Component } from 'react'
import './App.css'
import Mike from "./Mike"
import Jon from "./Jon"
import Tyler from "./Tyler"

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
      },
      {
        id: 3,
        name: "Tyler Funk",
        location: "Kansas City, MO",
        profile_link: 'www.google.com',
        photo: "https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/capuchin-monkey-baby.jpg?itok=4uOxFicS"
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1> Flatiron School Software Engineering Students </h1>
        <h4> Someone Please Hire Them </h4>
        <section class="card-container">
          <Mike
            name={this.state.students[0].name}
            location={this.state.students[0].location}
            link={this.state.students[0].profile_link}
            photo={this.state.students[0].photo}
          />
          <Jon
            name={this.state.students[1].name}
            location={this.state.students[1].location}
            link={this.state.students[1].profile_link}
            photo={this.state.students[1].photo}
          />
          <Tyler
            name={this.state.students[2].name}
            location={this.state.students[2].location}
            link={this.state.students[2].profile_link}
            photo={this.state.students[2].photo}
          />
        </section>
      </div>
    )
  }

}

export default App
