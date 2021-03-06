import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = function (state, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
  let errors;
   if (state.session.errors.responseJSON)  {
    errors = (state.session.errors.responseJSON);
   } else {
      errors = [];
    }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: errors,
    formType
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
      processForm: user => {
        return dispatch(processForm(user));
      },
      clearErrors: () => dispatch(clearErrors()),
      demologin: (user) => dispatch(login(user)),
      formType
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
