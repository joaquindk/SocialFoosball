import React, { Component } from 'react'
import Player from './Player'

class PlayerList extends Component {

  render() {
    var styles = {
      playerList: {
        marginTop: '30px'
      }
    };
    return (
      <div style={styles.playerList}>
        {
          this.props.players.map((player,index) => {
            return <Player key={player._id} player={player} dispatch={this.props.dispatch} orderNumber={index + 1}/>
          })
        }
      </div>
    )
  }
}

export default PlayerList
