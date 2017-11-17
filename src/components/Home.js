import React, { PropTypes } from 'react';
import Relay from 'react-relay/classic';
import currencyFormatter from 'currency-formatter';

export const Home = (props) => {
  const { makes, models, carOfTheWeek } = props.viewer;
  const model = models.find(model => model.id === carOfTheWeek.modelId);
  const make = makes.find(make => make.id === model.makeId);

  return (
    <div className="home">
      <h1 className="title">Car of the week!</h1>
      <img src={model.imageUrl} className="image" />
      <div className="info-section">
        <div className="basic-info">
          <span><strong>Make</strong>: {make.name}</span>
          <span><strong>Model</strong>: {model.name}</span>
          <span><strong>Price</strong>: {currencyFormatter.format(model.price, { symbol: '$', precision: 0, thousand: ',' })}</span>
        </div>
        <div className="review">
          <strong>Review</strong>: <p>{ carOfTheWeek.review }</p>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  viewer: PropTypes.object
};

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        makes {
          id,
          name
        }
        models {
          id,
          makeId,
          name,
          price,
          imageUrl
        },
        carOfTheWeek {
          modelId,
          review
        }
      }
    `
  }
});
