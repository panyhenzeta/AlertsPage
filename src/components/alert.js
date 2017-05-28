import React, { Component } from 'react';
import { connect } from 'react-redux'

import AlertTable from './alertTable';
import AlertDetail from './alertDetail';

class Alert extends Component {
  render() {
    return (
      <div className="container"> 
        <br/>
        <AlertTable/>
        <AlertDetail popupIsOpen = {this.props.popupIsOpen}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        popupIsOpen: state.alert.popupIsOpen
    }
}

export default connect(mapStateToProps, null)(Alert);
