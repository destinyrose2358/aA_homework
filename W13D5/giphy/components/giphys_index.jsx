import React from 'react';
import GiphyIndexItem from './giphys_index_item';

export default class GiphysIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.giphys);
    const giphyLis = this.props.giphys.map(giphy => (
      <GiphysIndexItem key={ giphy.id } giphy={ giphy }/>
    ));
    return <ul>
      { giphyLis }
    </ul>
  }
}