let secondbridge = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "05/03/2022",
      Price: "3.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Louis" },
      UserRating: 5,
      Day: "06/03/2022",
      Price: "5.00"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "20/03/2022",
      Price: "9.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Second Bridge",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Joe" },
      UserRating: 4,
      Day: "22/03/2022",
      Price: "4.00"
      
    },
  ];
  
  export function getSecondBridge() {
    return secondbridge;
  }
  
  
  export function addTicket(ticket) {
    let ticketInDb = secondbridge.find(t => t._id === ticket._id) || {};
    ticketInDb.club = ticket.club;
    ticketInDb.seller = ticket.seller;
    ticketInDb.UserRating = ticket.UserRating;
  
    if (!ticketInDb._id) {
      ticketInDb._id = Date.now().toString();
      secondbridge.push(ticketInDb);
    }
  
    return ticketInDb;
  }
  
  export function deleteTicketSecondBridge(id) {
    let ticketInDb = secondbridge.find(m => m._id === id);
    secondbridge.splice(secondbridge.indexOf(ticketInDb), 1);
    return ticketInDb;
  }
  