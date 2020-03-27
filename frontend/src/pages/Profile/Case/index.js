import React from 'react';
import {
    FiTrash2
} from 'react-icons/fi';

const Case = (props) => {
    return(
        <li>
            <strong>Caso:</strong>
            <p>{props.name}</p>

            <strong>Descrição</strong>
            <p>{props.description}</p>

            <strong>Valor:</strong>
            <p>{props.value}</p>

            <button type="button" onClick = {() => props.onDeleteHandler(props.id)}>
                <FiTrash2 size = {30} color = "A8A8B3"/>
            </button>
        </li>
    );
}

export default Case;