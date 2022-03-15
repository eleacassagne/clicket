let zero = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adam" },
      UserRating: 4.3,
      Day: "05/03/2022",
      Price: "10",
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Awsat" },
      UserRating: 5,
      Day: "06/03/2022",
      Price: "12"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 4,
      Day: "20/03/2022",
      Price: "13"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "ZeroZero",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 4,
      Day: "22/03/2022",
      Price: "07"
      
    },
  ];
  
  export function getZero() {
    return zero;
  }
  
  
  
  export function addTicket(ticket) {
    let ticketInDb = zero.find(t => t._id === ticket._id) || {};
    ticketInDb.club = ticket.club;
    ticketInDb.seller = ticket.seller;
    ticketInDb.UserRating = ticket.UserRating;
  
    if (!ticketInDb._id) {
      ticketInDb._id = Date.now().toString();
      zero.push(ticketInDb);
    }
  
    return ticketInDb;
  }
  
  export function deleteTicketZero(id) {
    let ticketInDb = zero.find(m => m._id === id);
    zero.splice(zero.indexOf(ticketInDb), 1);
    return ticketInDb;
  }
  