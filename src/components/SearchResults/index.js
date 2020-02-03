import React from 'react';
import './style.css';
import TrackList from '../TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList 
          tracks={this.props.searchResults} 
          // isRemoval={false} 
          onAdd={this.props.onAdd} 
          />
      </div>
    );

  }
}

export default SearchResults;
