import React from "react";

const GiphyIndexItem = ({ giphy }) => {
  return (
  <li>
    <img src={giphy.images.original.url} />
  </li>
  )};

  export default GiphyIndexItem;