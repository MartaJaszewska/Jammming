import React from 'react';
import './style.css';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';


// import Playlist from '../Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'track 1',
          artist: 'great 1',
          album: '1 grat album',
          id: 1
        },
        {
          name: 'track 2',
          artist: 'great 2',
          album: '2 grat album',
          id: 2
        },
        {
          name: 'track 3',
          artist: 'great 3',
          album: '3 grat album',
          id: 3
        }
      ],
      playlistName: 'My New Playlist',
      playlistTracks: [
        {
          name: 'first name',
          artist: 'first artist',
          album: 'first album',
          id: 1
        },
        {
          name: 'second name',
          artist: 'second artist',
          album: 'second album',
          id: 2
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)


  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTracks =>
      savedTracks.id !== track.id)) {
        this.state.playlistTracks.push(track);
    }
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(savedTracks =>
      savedTracks.id === track.id)) {
        this.state.playlistTracks.pop();
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const tracksUris = this.state.playlistTracks.map(track => track.uri)
  }

  search(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}  
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
