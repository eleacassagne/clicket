import React, { Component } from "react";
import { getZero, deleteTicketZero  } from "../Zero";
import { getSecondBridge, deleteTicketSecondBridge} from "../SecondBridge";
import { getLabyrinth, deleteTicketLabyrinth } from "../Labyrinth";
import { getScore, deleteTicketScore} from "../Score";


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
        <span>Click on the club that you are searching tickets for:      </span>
        <button
          onClick={() => this.handleChange(1)}
        >
          ZeroZero
        </button>
        <button
          onClick={() => this.handleChange(2)}
        >
          Second Bridge
        </button>
        <button
          onClick={() => this.handleChange(3)}
        >
          Labyrinth
        </button>
        <button
          onClick={() => this.handleChange(4)}
        >
          Score
        </button>

      <table className="table">
      <thead>
        <tr>
          <th>Club</th>
          <th>Seller</th>
          <th>Date</th>
          <th>User Rating</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.state.clubs[this.state.choice].map((ticket) => (
          <tr onClick= {() => this.BuyTicket(ticket)}>
            <td>{ticket.club}</td>
            <td>{ticket.seller.name}</td>
            <td>{ticket.Day}</td>
            <td>{ticket.UserRating}</td>
            <td>{ticket.Price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
      
          
         
    );
  }
}

export default Clubs;
