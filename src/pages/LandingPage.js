import Header from 'parts/Header'
import React, { Component } from 'react'

export class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        )
    }
}

export default LandingPage
