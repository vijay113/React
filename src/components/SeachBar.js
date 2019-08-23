import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: 'hero'
        };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
  }
    //state = { searchTerm: '' };

    handleChange (event){
      this.setState({ searchTerm: event.target.value });
     }

     handleSubmit(event){
      const { searchTerm } = this.state;
      const { onFormSubmit } = this.props;
      //alert('Search item is: ' + searchTerm);
      onFormSubmit(searchTerm);
      event.preventDefault();
    }

    // handleSubmit = (event) => {
    //   const { searchTerm } = this.state;
    //   const { onFormSubmit } = this.props;

    //   onFormSubmit(searchTerm);

    //   event.preventDefault();
    // }

    render() {
      const { searchTerm } = this.state.searchTerm;

      return (
        <Paper elevation={6} style={{ padding: '25px' }}>
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <TextField fullWidth label="Search..." value={searchTerm} onChange={(e)=>this.handleChange(e)} />
          </form>
        </Paper>
      );
    }
}

export default SearchBar;