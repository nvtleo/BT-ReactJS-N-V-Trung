import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className='container' style={{ marginBottom: "35px" }}>
                <div className="card navbar-dark bg-light" style={{ textAlign: "center", marginTop: "30px" }}>
                    <div className="card-body">
                        <h5 className="card-title">A warm welcome!</h5>
                        <p className="card-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a href="#" className="btn btn-primary">Call to action</a>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px", textAlign: "center", position: "relative" }}>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-regular fa-folder icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Fresh new layout</h5>
                                <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-solid fa-envelope icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Fresh new layout</h5>
                                <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-regular fa-folder icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Free to download</h5>
                                <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "50px", textAlign: "center", position: "relative" }}>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-solid fa-message icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Jumbotron hero header</h5>
                                <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-solid fa-cloud-arrow-down icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Feature boxes</h5>
                                <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <i class="fa-solid fa-code icon"></i>
                                <h5 style={{ paddingTop: "20px" }} className="card-title">Simple clean code</h5>
                                <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div >
        )
    }
}
