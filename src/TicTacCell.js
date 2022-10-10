import React from 'react';
import { Cell } from './styles';

export const TicTacToeCell = ({value, position, selectCell}) => {
    return (<Cell onClick={() => selectCell(position)}>
        {value}
    </Cell>)
}