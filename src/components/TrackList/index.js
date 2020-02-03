import React from 'react';
import './style.css';
import Track from '../Track';

class TrackList extends React.Component {
  
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => 
          <Track 
            track={track} 
            key={track.id} 
            onAdd={this.props.onAdd}
            isRemoval={this.props.isRemoval}
            onRemove={this.props.onRemove}
          />)}
      </div>
    );
  }
}

export default TrackList;
