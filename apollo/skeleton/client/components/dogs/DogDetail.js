import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import DogEdit from "./DogEdit";

const FETCH_DOG = gql`
  query FetchDog($id: ID!) {
    dog(_id: $id) {
      _id
      name
      breed
    }
  }
`;

const DogDetail = props => (
  <Query
    query={FETCH_DOG}
    variables={{ id: props.match.params.dogId}}>
      {({loading, error, data}) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>{error}</h1>;
        return (
          <div>
            <p>{ data.dog.name }</p>
            <p>{ data.dog.breed }</p>
            <DogEdit dog={data.dog} />
          </div>
        )
      }}
  </Query>
);

export default DogDetail;