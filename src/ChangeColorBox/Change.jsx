import React, { Component } from "react";
import { connect } from "react-redux";
import { ChangeColorBoxConst } from "./const";
class ChangeColorBox extends Component {
    render() {
        const { bgBox, changeColor } = this.props;
        return (
            <div>
                <div
                    className="house"
                    style={{
                        width: 100,
                        height: 100,
                        // 2. binding state lên giao diện.
                        backgroundColor: bgBox
                    }}
                />
                <div className="mt-2">
                    <button onClick={() => { changeColor("red") }} className="btn btn-danger">Red</button>
                    <button onClick={() => { changeColor("green") }} className="btn btn-success mx-2">Green</button>
                    <button onClick={() => { changeColor("blue") }} className="btn btn-primary mx-2">Blue</button>
                    <button onClick={() => { changeColor("yellow") }} className="btn btn-warning">Yellow</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        bgBox: rootReducer.ChangeColorBoxReducer
    }
}
// dùng để gửi action lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: (color) => {
            const action = {
                type: ChangeColorBoxConst.CHANGE_COLOR,
                payload: color,
            };
            //   dispatch(action) để gửi action lên redux
            dispatch(action);
        }
    }
}
//ket noi component voi redux
export default connect(mapStateToProps, mapDispatchToProps)(ChangeColorBox)


