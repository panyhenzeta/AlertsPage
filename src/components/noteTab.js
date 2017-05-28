import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

export default class NoteTab extends Component {
    generateNotes(){      
        let lenght = Object.keys(this.props.notes).length;
        if(lenght > 0){
            let noteList = [];
            this.props.notes.map((note,i) => {                
                noteList.push(<li key={i}> {note} </li>); 
            });
            return <ul> {noteList} </ul>;
        }
    }
    render(){       
        return <Row className="detail-grid">
                    <Col md={12}>
                        <FormGroup>
                            <FormControl.Static className="headerControl"> Notes </FormControl.Static>
                            {this.generateNotes()}
                        </FormGroup>
                    </Col>
                </Row>;
    }
}