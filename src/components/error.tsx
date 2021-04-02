import React from 'react';
import { connect } from 'react-redux';

function Error(props: any) {
  return(
    <p> Error message: {props.message} </p>
  );
}

const mapStateToProps = (state: any) => {
  return {message: state.globalState.errorMessage};
}

export default connect(mapStateToProps)(Error);
