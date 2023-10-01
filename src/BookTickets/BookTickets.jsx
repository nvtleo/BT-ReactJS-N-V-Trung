import React, { Component } from 'react';
import css from "./style.module.css";
import { megeClassName } from '../utils';

import { connect } from "react-redux";

class BookTickets extends Component {
    render() {
        return (
            <>
                <div className={css["background"]}>
                    <h1 className={megeClassName(css.h1__title)}>MOVIE SEAT SELECTION</h1>
                    <div className="content container">
                        <h5 style={{ color: "white" }} >Fill The Required Details Below And Select Your Seats</h5>
                        <div className="row">
                            <div className="col-7">
                                <form>
                                    <div className="form-group">
                                        <label style={{ color: "white" }} htmlFor="exampleInputEmail1">Name  </label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-5">
                                <form>
                                    <div className="form-group">
                                        <label style={{ color: "white" }} htmlFor="exampleInputEmail1">
                                            Number of Seats *</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary">Start selecting</button>
                        <div className="row" style={{ alignItems: "center" }}>
                            <span style={{ backgroundColor: "blue " }} className={megeClassName(css.seat)}></span>
                            <span className={css["span"]}>Selected Seat</span>
                            <span style={{ backgroundColor: "red" }} className={megeClassName(css.seat)}></span>
                            <span className={css["span"]}>Reserved Seat</span>
                            <span style={{ backgroundColor: "white" }} className={megeClassName(css.seat)}></span>
                            <span className={css["span"]}>Empty Seat</span>

                        </div>
                        <p className={css["content__title"]}> <span style={{ backgroundColor: "orange" }}>Please Select your Seats NOW!</span></p>
                    </div>
                    <table className={css["table"]}>
                        <tbody>
                            <tr>
                                <td className={css["number"]}></td>
                                <td className={css["number"]}>1</td>
                                <td className={css["number"]}>2</td>
                                <td className={css["number"]}>3</td>
                                <td className={css["number"]}>4</td>
                                <td className={css["number"]}>5</td>
                                <td className={css["number"]}>6</td>
                                <td className={css["number"]}>7</td>
                                <td className={css["number"]}>8</td>
                                <td className={css["number"]}>9</td>
                                <td className={css["number"]}>10</td>
                                <td className={css["number"]}>11</td>
                                <td className={css["number"]}>12</td>
                            </tr>
                            <tr>
                                <td style={{ width: "10px" }} className={css["name__seats"]}>A</td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td style={{ width: "10px" }} ><input type="checkbox" className={css["seats"]} defaultValue="A2" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A3" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A4" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A5" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A6" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A7" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A8" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A9" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A10" />
                                </td>
                                <td style={{ width: "10px" }}><input type="checkbox" className={css["seats"]} defaultValue="A11" />
                                </td>
                                <td ><input type="checkbox" className={css["seats"]} defaultValue="A12" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>B</td>
                                <td  ><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>C</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>D</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>E</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>F</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>G</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>H</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>I</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>
                            <tr>
                                <td className={css["name__seats"]}>J</td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                                <td><input type="checkbox" className={css["seats"]} defaultValue="A1" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <p className={css["content__title"]}> <span className={css["screen"]}>SCREEN THIS WAY</span></p>
                    <p className={css["btn__select"]}><button className={css["btn__select"]}>Confirm Selection</button></p>

                    <table className="table table-bordered table-dark container">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Number of Seats</th>
                                <th scope="col">Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={css["footer"]}>© 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts</p>
                </div >

            </>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    console.log(rootReducer)
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookTickets);
