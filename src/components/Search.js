import React, { PropTypes } from 'react';
import Relay from 'react-relay/classic';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { selectMake, selectModel } from '../actions/action';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.selectMake = this.selectMake.bind(this);
    this.selectModel = this.selectModel.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }
  selectMake(e) {
    this.props.dispatch(selectMake(e.target.value));
    if (!e.target.value) {
      this.props.dispatch(selectModel(null));
    }
  }
  selectModel(e) {
    this.props.dispatch(selectModel(e.target.value));
  }
  showDetails() {
    browserHistory.push(`make/model/${this.props.selectedModel}`);
  }
  render() {
    const nullOption = <option key={0} value={null}></option>;
    let makeOptions = [nullOption];
    if (this.props.viewer.makes && this.props.viewer.makes.length > 0) {
      makeOptions = makeOptions.concat(this.props.viewer.makes.map(make => (
        <option key={make.id} value={make.id}>{make.name}</option>
      )));
    }

    let modelOptions = [nullOption];
    const models = this.props.viewer.models.filter(model => model.makeId === this.props.selectedMake);
    if (models && models.length > 0) {
      modelOptions = modelOptions.concat(models.map(model => (
        <option key={model.id} value={model.id}>{model.name}</option>
      )));
    }

    return (
      <div className="search">
        <span>Make: </span>
        <select value={this.props.selectedMake} onChange={this.selectMake}>
          {makeOptions}
        </select>
        <span>Model: </span>
        <select value={this.props.selectedModel} onChange={this.selectModel}>
          {modelOptions}
        </select>
        <button onClick={this.showDetails} disabled={!this.props.selectedModel || !this.props.selectedMake}>
          show details
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
  viewer: PropTypes.object,
  selectedModel: PropTypes.string,
  selectedMake: PropTypes.string
};

const mapStateToProps = state => ({
  selectedMake: state.root.selectedMake,
  selectedModel: state.root.selectedModel
});

export default connect(mapStateToProps)(Relay.createContainer(Search, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        makes {
          id,
          name
        },
        models {
          id,
          makeId,
          name
        }
      }
    `
  }
}));
