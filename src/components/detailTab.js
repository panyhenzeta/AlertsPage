import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';

export default class DetailTab extends Component {
    render() {
        return (
            <div>
                <Row className="detail-grid">
                    <Col md={12}>
                        <FormGroup>
                            <p className="headerControl"> Message </p>
                            <p>{this.props.alertDetail.message}</p>
                        </FormGroup>
                    </Col>
                </Row>

                <Row className="detail-grid">
                    <Col md={4}>
                        <FormGroup>
                            <p className="headerControl"> CreatedAt </p>
                            <p>{this.props.alertDetail.createdAt}</p>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className="headerControl"> Status </p>
                            <p>{this.props.alertDetail.status}</p>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className="headerControl"> Count </p>
                            <p>{this.props.alertDetail.count}</p>
                        </FormGroup>
                    </Col>
                </Row>

                <Row className="detail-grid">
                    <Col md={12}>
                        <FormGroup>
                            <p className="headerControl"> Owner </p>
                            <p>{this.props.alertDetail.owner}</p>
                        </FormGroup>
                    </Col>                  
                </Row>

                <Row className="detail-grid">                  
                    <Col md={12}>
                        <FormGroup>
                            <p className="headerControl"> Source </p>
                            <p>{this.props.alertDetail.source}</p>
                        </FormGroup>
                    </Col>
                </Row>

                <Row className="detail-grid">
                    <Col md={12}>
                        <FormGroup>
                            <p className="headerControl"> Tags </p>
                            <p>{(this.props.alertDetail.tag).join()}</p>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}