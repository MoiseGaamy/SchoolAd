import React, { Component } from 'react'
import Section from './Section'
import Footer from './Footer'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Section />
                <Footer />
            </div>
        )
    }
}
