import React, { Component } from 'react';
import css from "./style.module.css";
import { megeClassName } from '../utils';
import Table from './table';
import TableInfo from './tableInfo';
import { connect } from "react-redux";

class BookTickets extends Component {
    mangGhe = [
        {
            "hang": "A",
            "danhSachGhe": [
                { "soGhe": "A1", "gia": 75000, "daDat": false },
                { "soGhe": "A2", "gia": 75000, "daDat": false },
                { "soGhe": "A3", "gia": 75000, "daDat": false },
                { "soGhe": "A4", "gia": 75000, "daDat": false },
                { "soGhe": "A5", "gia": 75000, "daDat": false },
                { "soGhe": "A6", "gia": 75000, "daDat": false },
                { "soGhe": "A7", "gia": 75000, "daDat": false },
                { "soGhe": "A8", "gia": 75000, "daDat": false },
                { "soGhe": "A9", "gia": 75000, "daDat": false },
                { "soGhe": "A10", "gia": 75000, "daDat": false },
                { "soGhe": "A11", "gia": 0, "daDat": true },
                { "soGhe": "A12", "gia": 0, "daDat": true }
            ]
        },
        {
            "hang": "B",
            "danhSachGhe": [
                { "soGhe": "B1", "gia": 75000, "daDat": false },
                { "soGhe": "B2", "gia": 75000, "daDat": false },
                { "soGhe": "B3", "gia": 75000, "daDat": false },
                { "soGhe": "B4", "gia": 75000, "daDat": false },
                { "soGhe": "B5", "gia": 75000, "daDat": false },
                { "soGhe": "B6", "gia": 75000, "daDat": false },
                { "soGhe": "B7", "gia": 75000, "daDat": false },
                { "soGhe": "B8", "gia": 75000, "daDat": false },
                { "soGhe": "B9", "gia": 75000, "daDat": false },
                { "soGhe": "B10", "gia": 75000, "daDat": false },
                { "soGhe": "B11", "gia": 75000, "daDat": false },
                { "soGhe": "B12", "gia": 75000, "daDat": false }
            ]
        },
        {
            "hang": "C",
            "danhSachGhe": [
                { "soGhe": "C1", "gia": 75000, "daDat": false },
                { "soGhe": "C2", "gia": 75000, "daDat": false },
                { "soGhe": "C3", "gia": 75000, "daDat": false },
                { "soGhe": "C4", "gia": 75000, "daDat": false },
                { "soGhe": "C5", "gia": 75000, "daDat": false },
                { "soGhe": "C6", "gia": 75000, "daDat": false },
                { "soGhe": "C7", "gia": 75000, "daDat": false },
                { "soGhe": "C8", "gia": 75000, "daDat": false },
                { "soGhe": "C9", "gia": 75000, "daDat": false },
                { "soGhe": "C10", "gia": 75000, "daDat": false },
                { "soGhe": "C11", "gia": 75000, "daDat": false },
                { "soGhe": "C12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "D",
            "danhSachGhe": [
                { "soGhe": "D1", "gia": 75000, "daDat": false },
                { "soGhe": "D2", "gia": 75000, "daDat": false },
                { "soGhe": "D3", "gia": 75000, "daDat": false },
                { "soGhe": "D4", "gia": 75000, "daDat": false },
                { "soGhe": "D5", "gia": 75000, "daDat": false },
                { "soGhe": "D6", "gia": 75000, "daDat": false },
                { "soGhe": "D7", "gia": 75000, "daDat": false },
                { "soGhe": "D8", "gia": 75000, "daDat": false },
                { "soGhe": "D9", "gia": 75000, "daDat": false },
                { "soGhe": "D10", "gia": 75000, "daDat": false },
                { "soGhe": "D11", "gia": 75000, "daDat": false },
                { "soGhe": "D12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "E",
            "danhSachGhe": [
                { "soGhe": "E1", "gia": 75000, "daDat": false },
                { "soGhe": "E2", "gia": 75000, "daDat": false },
                { "soGhe": "E3", "gia": 75000, "daDat": false },
                { "soGhe": "E4", "gia": 75000, "daDat": false },
                { "soGhe": "E5", "gia": 75000, "daDat": false },
                { "soGhe": "E6", "gia": 75000, "daDat": false },
                { "soGhe": "E7", "gia": 75000, "daDat": false },
                { "soGhe": "E8", "gia": 75000, "daDat": false },
                { "soGhe": "E9", "gia": 75000, "daDat": false },
                { "soGhe": "E10", "gia": 75000, "daDat": false },
                { "soGhe": "E11", "gia": 75000, "daDat": false },
                { "soGhe": "E12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "F",
            "danhSachGhe": [
                { "soGhe": "F1", "gia": 75000, "daDat": false },
                { "soGhe": "F2", "gia": 75000, "daDat": false },
                { "soGhe": "F3", "gia": 75000, "daDat": false },
                { "soGhe": "F4", "gia": 75000, "daDat": false },
                { "soGhe": "F5", "gia": 75000, "daDat": false },
                { "soGhe": "F6", "gia": 75000, "daDat": false },
                { "soGhe": "F7", "gia": 75000, "daDat": false },
                { "soGhe": "F8", "gia": 75000, "daDat": false },
                { "soGhe": "F9", "gia": 75000, "daDat": false },
                { "soGhe": "F10", "gia": 75000, "daDat": false },
                { "soGhe": "F11", "gia": 75000, "daDat": false },
                { "soGhe": "F12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "G",
            "danhSachGhe": [
                { "soGhe": "G1", "gia": 75000, "daDat": false },
                { "soGhe": "G2", "gia": 75000, "daDat": false },
                { "soGhe": "G3", "gia": 75000, "daDat": false },
                { "soGhe": "G4", "gia": 75000, "daDat": false },
                { "soGhe": "G5", "gia": 75000, "daDat": false },
                { "soGhe": "G6", "gia": 75000, "daDat": false },
                { "soGhe": "G7", "gia": 75000, "daDat": false },
                { "soGhe": "G8", "gia": 75000, "daDat": false },
                { "soGhe": "G9", "gia": 75000, "daDat": false },
                { "soGhe": "G10", "gia": 75000, "daDat": false },
                { "soGhe": "G11", "gia": 75000, "daDat": false },
                { "soGhe": "G12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "H",
            "danhSachGhe": [
                { "soGhe": "H1", "gia": 75000, "daDat": false },
                { "soGhe": "H2", "gia": 75000, "daDat": false },
                { "soGhe": "H3", "gia": 75000, "daDat": false },
                { "soGhe": "H4", "gia": 75000, "daDat": false },
                { "soGhe": "H5", "gia": 75000, "daDat": false },
                { "soGhe": "H6", "gia": 75000, "daDat": false },
                { "soGhe": "H7", "gia": 75000, "daDat": false },
                { "soGhe": "H8", "gia": 75000, "daDat": false },
                { "soGhe": "H9", "gia": 75000, "daDat": false },
                { "soGhe": "H10", "gia": 75000, "daDat": false },
                { "soGhe": "H11", "gia": 75000, "daDat": false },
                { "soGhe": "H12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "I",
            "danhSachGhe": [
                { "soGhe": "I1", "gia": 75000, "daDat": false },
                { "soGhe": "I2", "gia": 75000, "daDat": false },
                { "soGhe": "I3", "gia": 75000, "daDat": false },
                { "soGhe": "I4", "gia": 75000, "daDat": false },
                { "soGhe": "I5", "gia": 75000, "daDat": false },
                { "soGhe": "I6", "gia": 75000, "daDat": false },
                { "soGhe": "I7", "gia": 75000, "daDat": false },
                { "soGhe": "I8", "gia": 75000, "daDat": false },
                { "soGhe": "I9", "gia": 75000, "daDat": false },
                { "soGhe": "I10", "gia": 75000, "daDat": false },
                { "soGhe": "I11", "gia": 75000, "daDat": false },
                { "soGhe": "I12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "J",
            "danhSachGhe": [
                { "soGhe": "J1", "gia": 75000, "daDat": false },
                { "soGhe": "J2", "gia": 75000, "daDat": false },
                { "soGhe": "J3", "gia": 75000, "daDat": false },
                { "soGhe": "J4", "gia": 75000, "daDat": false },
                { "soGhe": "J5", "gia": 75000, "daDat": false },
                { "soGhe": "J6", "gia": 75000, "daDat": false },
                { "soGhe": "J7", "gia": 75000, "daDat": false },
                { "soGhe": "J8", "gia": 75000, "daDat": false },
                { "soGhe": "J9", "gia": 75000, "daDat": false },
                { "soGhe": "J10", "gia": 75000, "daDat": false },
                { "soGhe": "J11", "gia": 75000, "daDat": false },
                { "soGhe": "J12", "gia": 75000, "daDat": false }
            ]
        }

    ]
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
                    <Table mangGhe={this.mangGhe} />
                    <p className={css["content__title"]}> <span className={css["screen"]}>SCREEN THIS WAY</span></p>
                    <p className={css["btn__select"]}><button className={css["btn__select"]}>Confirm Selection</button></p>
                    <TableInfo mangGhe={this.mangGhe} />
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
