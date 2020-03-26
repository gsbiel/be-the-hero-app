import React from 'react';
import {Link} from 'react-router-dom';
import {
    FiPower,
    FiTrash2
} from 'react-icons/fi'
import './styles.css';

import logoImg from '../../assets/logo.svg';

const Profile = (props) => {
    return(
        <div className = "profile-container">
            <header>
                <img src = {logoImg} alt = "Be the Hero" />
                <span>Bem vinda, APAD</span>
                <Link className = "button" to = "/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size = {18} color = "E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size = {30} color = "A8A8B3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size = {30} color = "A8A8B3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size = {30} color = "A8A8B3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size = {30} color = "A8A8B3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;