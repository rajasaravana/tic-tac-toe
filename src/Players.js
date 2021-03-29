import React, { Component } from 'react';
import {connect} from 'react-redux';

class Player extends Component {
    render() {
        return (
          <div className="player">
            Player: <span>{this.props.player}</span>
          </div>
        );
      }
}

function mapStateToProps(state) {
  return {
    player: state.player
  }
}

export default connect(mapStateToProps)(Player);