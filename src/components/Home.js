import React from 'react';
import Relay from 'react-relay/classic';

const Home = (props) => (
  <div>
    Home
    <p>{JSON.stringify(props.carOfTheWeek)}</p>
  </div>
);

export default Relay.createContainer(Home, {
  fragments: {
    carOfTheWeek: () => Relay.QL`
      fragment on CarOfTheWeekType {
        modelId,
        review
      }
    `
  }
});
