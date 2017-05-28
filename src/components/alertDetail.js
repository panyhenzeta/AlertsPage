import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { notes } from '../data/notes.json';
import DetailTab from './detailTab';
import RecipientsTab from './recipientsTab';
import NoteTab from './noteTab';
import * as alertActions from '../actions/index';
import { Modal, Tabs, Tab } from 'react-bootstrap';

class AlertDetail extends Component {

    constructor(props) {
        super(props);
        this.notes = [];
    }

    getAlertNote() {
        let alertObj = this.props.alertDetail;
        let alertNotes = [];

        notes.map((note) => {
            if (note.alertId == alertObj.id) {               
                alertNotes.push(note.note);
            }
        });
       this.notes = alertNotes;
    }

    closePopup() {
        this.props.actions.setPopupIsOpen(false);
    }

    render() {
        this.getAlertNote();
        return (
            <Modal show={this.props.popupIsOpen}
                onHide={this.closePopup.bind(this)}
                backdrop={true}>
                <Modal.Body>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Details"><DetailTab alertDetail={this.props.alertDetail}/></Tab>
                        <Tab eventKey={2} title="Recipients"><RecipientsTab teams={this.props.alertDetail.teams}/></Tab>
                        <Tab eventKey={3} title="Notes"><NoteTab notes={this.notes}/></Tab>                        
                    </Tabs>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alertDetail: state.alert.alertDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(alertActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertDetail);
