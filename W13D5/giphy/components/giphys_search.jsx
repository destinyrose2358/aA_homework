import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return <div>
      <GiphysIndex giphys={ this.props.giphys }/>
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.handleChange } type="text"/>
      <input type="submit" value="search"/>
    </form>
    </div> 
   
  }
}