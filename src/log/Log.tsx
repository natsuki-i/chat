import * as React from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { Message } from './reducer';
import { State } from './../reducer';

interface Props {
    messages: Message[]
}

function Log(props: Props)
{
    let items = props.messages.map((message) => {
        return (
            <TableRow key={message.id}>
                <TableRowColumn>{message.name}</TableRowColumn>
                <TableRowColumn>{message.text}</TableRowColumn>
            </TableRow>
        );
    });
    return (
        <Table>
            <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>name</TableHeaderColumn>
                    <TableHeaderColumn>message</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {items}
            </TableBody>
        </Table>
    );
}

function mapStateToProps(state: State) : Props {
    return {
        messages: state.log
    };
}

export default connect<Props, {}, {}>(mapStateToProps)(Log)
