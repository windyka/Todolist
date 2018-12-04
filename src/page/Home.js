import React, { Component } from 'react'
import Navbars from '../component/Navbar'
import Jumbotron from '../component/Jumbotron'
import Cards from '../component/Card'


class Homes extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Jumbotron />
                <Cards />
            </div>
        )
    }
}

export default Homes