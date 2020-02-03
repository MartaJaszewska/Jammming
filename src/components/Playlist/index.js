import React from 'react';
import './style.css';
import TrackList from '../TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} value={this.props.name} onChange={this.handleNameChange}/>
        <TrackList 
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove} 
          />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
