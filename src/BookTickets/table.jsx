import React, { Component } from 'react';
import css from "./style.module.css";
export default class Table extends Component {
    HTMangGhe = [];

    pushghe = (vitri) => {
        return () => {
            this.HTMangGhe.push(vitri);
        }
    }
    render() {
        console.log(this.props.danhSachGhe)
        return (
            <>
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
                            <td  ><input onChange={this.pushghe()} type="checkbox" className={css["seats"]} defaultValue="A1" />
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
            </ >
        )
    }
}

