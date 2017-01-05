import React from 'react';
import {connect} from 'react-redux';
import '../styles/main.scss';

export class App extends React.Component {
    render() {
        return (
            <div>Empty</div>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(App);