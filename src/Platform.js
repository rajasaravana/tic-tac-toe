import React, { Component } from 'react';
import Box from './Box';
import Player from './Players';
import { connect } from 'react-redux';


class Platform extends Component {
  boxList() {
    return this.props.boxes.map((box, index) => {
      return (
        <div key={box.id}>
          {box.arr.map((b, i) => {
            return (
              <Box key={b.id} rowId={index} colId={i} value={b.value}></Box>
            )
          })
          }
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <Player></Player>
        <div className="platform">
          {this.boxList()}
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


export default connect(mapStateToProps)(Platform);