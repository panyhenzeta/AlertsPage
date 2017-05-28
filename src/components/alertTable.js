import React, { Component } from 'react';

import { alerts } from '../data/alerts.json';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import RowButtons from './rowButtons';

export default class AlertTable extends Component {

    owner(fieldValue) {
        return fieldValue === '' ? 'No Owner' : fieldValue;
    }

    buttonFormatter(cell, row) {
        return <RowButtons row={row} />
    }   

    render() {
        return (
            <BootstrapTable
                bordered={false}
                data={alerts}
                pagination
                tableHeaderClass="tableHeader"
                tableBodyClass="tableBody"
                tableContainerClass="tableContainer"
            >
                <TableHeaderColumn dataField='owner'
                    dataFormat={this.owner}
                    width="15%"
                    row="0">Owner</TableHeaderColumn>              
                <TableHeaderColumn dataField='message'
                    row="0"                    
                    isKey>Message</TableHeaderColumn>
                <TableHeaderColumn dataField='teams'>Teams</TableHeaderColumn>
                <TableHeaderColumn dataField='snoozedUntil'
                    width="15%">Snoozed Until</TableHeaderColumn>
                <TableHeaderColumn width="110"
                    dataField='button'
                    dataFormat={this.buttonFormatter}></TableHeaderColumn>
            </BootstrapTable>

        );
    }
}
