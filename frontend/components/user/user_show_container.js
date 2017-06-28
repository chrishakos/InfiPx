import React from 'react';
import { connect } from 'react-redux';
import User from './user_show';
import { getUser } from '../../actions/user_actions';
import {openModal} from '../../actions/modal_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  return({
    currentUser: state.session.currentUser,
    user: state.user[ownProps.match.params.id],
  });
};

const mapDispatchToProps = dipatch => {

  return({
    getUser: (id) => dispatch(getUser(id)),
    openModal: (component) => dispatch(openModal(component)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
