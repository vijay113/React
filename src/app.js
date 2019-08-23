import React from 'react';
import {Grid } from '@material-ui/core';


import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';



class App extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
          videos:[], selectedVideo:null
         };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.onVideoSelect=this.onVideoSelect.bind(this);
     }


      async handleSubmit (searchTerm) {
      const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyBaFZ1mMNwT_W9UwlQKSRnyxEPz1cbjuE4',
          q: searchTerm,
        }
      });
      
      this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
      
    }

    
    onVideoSelect(video){        
      this.setState({ selectedVideo: video });
    }

   
	render() {
      const { selectedVideo } = this.state;
      return (
        <Grid style={{ justifyContent: 'center' }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
              	{/* <SearchBar onFormSubmit={(e) =>this.handleSubmit(e)} /> */}
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={this.state.videos} onVideoSelect={(e)=>this.onVideoSelect(e)}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
}

export default App;