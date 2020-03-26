import React from 'react';
import {Link} from 'react-router-dom';
import {
    FiPower,
    FiTrash2
} from 'react-icons/fi'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import Case from './Case';

const Profile = (props) => {

    const ongName = localStorage.getItem('ongName');

    return(
        <div className = "profile-container">
            <header>
                <img src = {logoImg} alt = "Be the Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className = "button" to = "/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size = {18} color = "E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>

                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />
                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />
                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />
                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />
                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />
                <Case name="Caso teste" description="descrição" value="R$ 12.000,00" />

            </ul>
        </div>
    );
}

export default Profile;