import React, { Component } from "react";
import { getZero, deleteTicketZero  } from "../Zero";
import { getSecondBridge, deleteTicketSecondBridge} from "../SecondBridge";
import { getLabyrinth, deleteTicketLabyrinth } from "../Labyrinth";
import { getScore, deleteTicketScore} from "../Score";
import "./Clubs.css"

class Clubs extends Component {
  state = {
    clubs: [[{_id: 0, club: "no selection", seller: {_id: 0, name: "no selection"}, UserRating: 0, Day:"no selection", Price: "0"}],getZero(), getSecondBridge(),getLabyrinth(), getScore()],
    choice: 0,
    bool: true,
    username: "Nico"
  };
  handleChange = number => {
    this.setState({choice: number})
  };
  BuyTicket = (ticket) => {
    if (ticket._id === 0){
      return
    }
    let x = prompt("If you want to chat with " + ticket.seller.name + " type chat, if you want to buy the ticket for " + ticket.club + " from " + ticket.seller.name + " on the  " + ticket.Day + " for £"+ ticket.Price + " type yes, otherwise no")
    if(x === "chat"){
      //chat with seller
    }
    if (x === "yes"){
      
      if(this.state.choice === 1){
        deleteTicketZero(ticket._id)
      }
      if(this.state.choice === 2){
        deleteTicketSecondBridge(ticket._id)
      }
      if(this.state.choice === 3){
        deleteTicketLabyrinth(ticket._id)
      }
      if(this.state.choice === 4){
        deleteTicketScore(ticket._id)
      }
      this.setState({bool: !this.state.bool})
    }

  };
  
  render() {
    
    return (
      
      <div>
        <div className="club-options">
          <span className="club-button">Click on the club that you are searching tickets for: </span>
          <button className = "club-button" onClick={() => this.handleChange(1)}>
            ZeroZero
          </button>
          <button className = "club-button" onClick={() => this.handleChange(2)}>
            Second Bridge
          </button>
          <button className = "club-button" onClick={() => this.handleChange(3)}>
            Labyrinth
          </button>
          <button className = "club-button" onClick={() => this.handleChange(4)}>
            Score
          </button>
        </div>

      <table className="table">
        <thead className="table-head">
          <tr className="table-columns">
            <th className="table-column">Club</th>
            <th className="table-column">Seller</th>
            <th className="table-column">Date</th>
            <th className="table-column">User Rating</th>
            <th className="table-column">Ticket Price</th>
          </tr>
        </thead>
        
        <tbody className="all-table-content">
          {this.state.clubs[this.state.choice].map((ticket) => (
            <tr onClick= {() => this.BuyTicket(ticket)}>
              <td className="table-content">{ticket.club}</td>
              <td className="table-content-seller">{ticket.seller.name}</td>
              <td className="table-content">{ticket.Day}</td>
              <td className="table-content">{ticket.UserRating}</td>
              <td className="table-content">{ticket.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
          
         
    );
  }
}

export default Clubs;
