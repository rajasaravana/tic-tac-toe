import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';


class Box extends Component {
    //const boxes = useSelector(state => state.boxes);
    //const dispatch = useDispatch();
    boxClick = () => {
        if (this.props.player == "O") {
            this.props.change({ row: this.props.rowId, col: this.props.colId, value: "O" });

        } else {
            this.props.change({ row: this.props.rowId, col: this.props.colId, value: "X" });
        }
        this.props.player_change();


    }
    render() {
        return (
            <div>
                {/*<div className="box" onClick={props.playerChange}>
                    <span>{props.boxes[props.rowId].arr[props.colId].value}</span>
                </div>*/}
                <div className="box" onClick={this.boxClick}>
                    <span>{this.props.boxes[this.props.rowId].arr[this.props.colId].value}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        boxes: state.boxes,
        player: state.player
    }
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        player_change: () => dispatch({ type: "PLAYERCHANGE" }),
        change: (data) => dispatch({ type: "CHANGE", data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);