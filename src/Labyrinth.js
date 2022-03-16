let labyrinth = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name: "Elea" },
      UserRating: 4.8,
      Day: "05/03/2022",
      Price: "6.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Dylan" },
      UserRating: 5,
      Day: "06/03/2022",
      Price: "8.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Labyrinth ",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Fabio" },
      UserRating: 4,
      Day: "20/03/2022",
      Price: "5.00"
      
    },
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      club: "Labyrinth",
      seller: { _id: "5b21ca3eeb7f6fbccd471818", name:"Nico" },
      UserRating: 4,
      Day: "22/03/2022",
      Price: "5.00"
      
    },
  ];
  
  export function getLabyrinth() {
    return labyrinth;
  }
  
  
  
  export function addTicket(ticket) {
    let ticketInDb = labyrinth.find(t => t._id === ticket._id) || {};
    ticketInDb.club = ticket.club;
    ticketInDb.seller = ticket.seller;
    ticketInDb.UserRating = ticket.UserRating;
  
    if (!ticketInDb._id) {
      ticketInDb._id = Date.now().toString();
      labyrinth.push(ticketInDb);
    }
  
    return ticketInDb;
  }
  
  export function deleteTicketLabyrinth(id) {
    let ticketInDb = labyrinth.find(m => m._id === id);
    labyrinth.splice(labyrinth.indexOf(ticketInDb), 1);
    return ticketInDb;
  }
  
  