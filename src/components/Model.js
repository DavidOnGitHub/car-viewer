import Relay from 'react-relay/classic';
import React, { PropTypes } from 'react';
import currencyFormatter from 'currency-formatter';

export class Model extends React.Component {
  componentWillMount() {
    this.props.relay.setVariables({ id: this.props.params.id });
  }
  render() {
    const model = this.props.viewer.models[0];
    const { makes } = this.props.viewer;
    const make = makes.find(make => make.id === model.makeId);

    return (
      <div className="model">
        <h2>{make.name} - {model.name}</h2>
        <div className="price">{currencyFormatter.format(model.price, { symbol: '$', precision: 0, thousand: ',' })}</div>
        <img src={model.imageUrl} className="image" />
      </div>
    );
  }
}

Model.propTypes = {
  relay: PropTypes.object,
  viewer: PropTypes.object,
  params: PropTypes.object
};

export default Relay.createContainer(Model, {
  initialVariables: {
    id: null
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        models(id: $id) {
          id,
          makeId,
          name,
          imageUrl,
          price
        },
        makes {
          id,
          name
        }
      }
    `
  }
});
