import React from 'react';
import PhotoUploadForm from './photo_upload_form_container';

class PhotoUploadButton extends React.Component {

  render(){
    return (
      <div className='photo-upload-button-container'>
        <button className='photo-upload-button'
          onClick={() => this.props.openModal(<PhotoUploadForm/>)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </button>
      </div>
  );}
}

export default PhotoUploadButton;
