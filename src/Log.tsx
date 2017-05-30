import * as React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

interface Props {
    messages: {
        id: number;
        name: string;
        text: string;
    }[];
}

export default function Log(props: Props)
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
