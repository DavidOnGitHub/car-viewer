import React from 'react';
import Relay from 'react-relay/classic';

const Search = (props) => {
  console.log(props)
  return (
    <div>
      Search
    </div>
  );
};

export default Relay.createContainer(Search, {
  fragments: {
    makes: () => Relay.QL`
      fragment on Make @relay(plural: true) {
        id,
        name
      }
    `,
    models: () => Relay.QL`
      fragment on Model @relay(plural: true) {
        id,
        makeId,
        name
      }
    `
  }
});
