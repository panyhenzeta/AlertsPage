import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as alertActions from '../actions/index';

import {ButtonToolbar, Button, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

class RowButtons extends Component {

    isSeenTooltip = <Tooltip id="tooltip">Is seen?</Tooltip>;
    isSeenButton() {
        let isSeenButton;
        if (this.props.row.isSeen) {
            isSeenButton = <Button className="btn btn-success btn-sm">
                                <Glyphicon glyph="ok" />
                            </Button>;
        } else{
            isSeenButton = <Button className="btn btn-warning btn-sm" onClick={this.hasSeen.bind(this)}>
                                <Glyphicon glyph="play-circle" />
                           </Button>;
       }

        return <OverlayTrigger placement="top" overlay={this.isSeenTooltip}>{isSeenButton}</OverlayTrigger>;
    }

    detailTooltip = <Tooltip id="tooltip">Show Detail</Tooltip>; 
    detailButton() {
        return    <OverlayTrigger placement="top" overlay={this.detailTooltip}>
                    <Button onClick={this.showDetail.bind(this)} className="btn btn-info btn-sm">
                        <Glyphicon glyph="eye-open" />
                    </Button>
                  </OverlayTrigger>
    }

    hasSeen(){      
        let newRow = this.props.row;
        newRow.isSeen = true;
        this.props.actions.setAlertDetail(newRow);

        this.forceUpdate();
    }

    showDetail() {    
       this.props.actions.setAlertDetail(this.props.row);  
       this.props.actions.setPopupIsOpen(true);     
    }

    render() {      
        return (
            <ButtonToolbar>
                {this.isSeenButton()}
                {this.detailButton()}
            </ButtonToolbar>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(alertActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(RowButtons);
