import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

export default class RecipientsTab extends Component {
    render(){       
        return <Row className="detail-grid">
                    <Col md={12}>
                        <FormGroup>
                            <FormControl.Static className="headerControl"> Teams </FormControl.Static>
                            <FormControl.Static>{(this.props.teams).join()}</FormControl.Static>
                        </FormGroup>
                    </Col>
                </Row>;
    }
}