import React, { Component } from 'react'
import biologo from './public/image/ticket.png'



class About extends Component {
    render() {
        return (
            
            <section id="container-about" className="container-about">
                    <h1>My Tickets</h1> 
                    
                    <table className="table">
                        <thead className="table-head">
                            <tr className="table-columns">
                                <th className="table-column">Ticket ID</th>
                                <th className="table-column">Club</th>
                                <th className="table-column">Date</th>
                                <th className="table-column">Seller</th>
                                <th className="table-column">Ticket Price</th>
                            </tr>
                        </thead>

                        <tbody className="all-table-content">
                                <th className="table-content">dshf832r8ew</th>
                                <th className="table-content-seller">Labyrinth</th>
                                <th className="table-content">25/03/22</th>
                                <th className="table-content">Louis</th>
                                <th className="table-content">£6.30</th>
                                
                            
                        </tbody>
                    </table>
                    

                    {/* <img src={biologo} width="180" height="180" alt="abtimg"/> */}
                    {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p> */}
                
            </section>
        )
    }
}

export default About
