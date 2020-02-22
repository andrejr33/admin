import React from 'react';
import './style.css';
function ListItem({dev}){    
    return (
        <li className="item">
            <p>{dev.nome}</p>
            <p>{dev.email}</p>
            <p>{dev.telefone}</p>
        </li>
    );
}

export default ListItem;