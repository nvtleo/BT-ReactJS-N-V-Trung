import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="col-12">
                    <Content />
                </div>
                <Footer />
            </div>

        )
    }
}
