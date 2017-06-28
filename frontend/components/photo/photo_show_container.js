import React from 'react';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
    photo: state.photos[ownProps.id],
  });
};

const mapDispatchToProps = dipatch => {

  return({
    requestPhoto: (id) => dispatch(requestPhoto(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
