import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as projectActions from '../../actions/projectActions';

import Login from '../../components/User/login';
import Signup from '../../components/User/signup';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.submitLoginHandler = this.submitLoginHandler.bind(this);
        this.submitSignupHandler = this.submitSignupHandler.bind(this);

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    submitLoginHandler(event) {
        event.preventDefault();
        this.props.projectActions.login(this.emailRef.current.value, this.passwordRef.current.value);
        console.log('Should submit login form');
    }

    submitSignupHandler(event) {
        event.preventDefault();
        this.props.projectActions.signup(this.emailRef.current.value, this.passwordRef.current.value);
        console.log('Should submit signup form', this.emailRef, this.passwordRef);
    }

    render() { 
        return (
            <section>
                <h1>User:</h1>
                <Route path="/login" render={(props) => <Login submitLoginHandler={this.submitLoginHandler} emailRef={this.emailRef} passwordRef={this.passwordRef} {...props} />} />
                <Route path="/signup" render={(props) => <Signup submitSignupHandler={this.submitSignupHandler} emailRef={this.emailRef} passwordRef={this.passwordRef} {...props} />} />
            </section>
        );
    }
}

const mapStateToProps = ({ projects }) => ({
    projects: projects.items,
    projectId: projects.projectId
  })
    
  function mapDispatchToProps(dispatch) {
    return {
        projectActions: bindActionCreators(projectActions, dispatch)
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(User);