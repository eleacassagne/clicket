import React, { Component } from 'react'
import logo from '../components/public/image/biopicimg.jpg';
import cse from '../components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Joe Pohlman </h1>
                    <h5> Rating: 4.5 </h5>
                    <p id="paragarph1"> joe.pohlman23@gmail.com <br/>
                    Instagram: @joepoh
                    <br/> <br/> Location: Bath </p>
                    <button>Change details</button>
                    {/* <a id="logo" href="https://www.contentstack.com/" ><img src={cse} width="30" height="30" alt="cselogo"/></a>  */}
                    
            </section>
        )
    }
}

export default Banner


