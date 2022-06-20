import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World</h1>
            <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default connect()(Home);
