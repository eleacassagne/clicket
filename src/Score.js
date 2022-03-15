const score = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "05/03/2022",
      Price: "07"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Awsat" },
      UserRating: 5,
      Day: "06/03/2022",
      Price: "20"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 4,
      Day: "20/03/2022",
      Price: "15"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Score",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 4,
      Day: "22/03/2022",
      Price: "12"
    },
  ];
  
  export function getScore() {
    return score;
  }
  
  
  
  export function addTicket(ticket) {
    let ticketInDb = score.find(t => t._id === ticket._id) || {};
    ticketInDb.club = ticket.club;
    ticketInDb.seller = ticket.seller;
    ticketInDb.UserRating = ticket.UserRating;
  
    if (!ticketInDb._id) {
      ticketInDb._id = Date.now().toString();
      score.push(ticketInDb);
    }
  
    return ticketInDb;
  }
  
  export function deleteTicketScore(id) {
    let ticketInDb = score.find(m => m._id === id);
    score.splice(score.indexOf(ticketInDb), 1);
    return ticketInDb;
  }
  
  