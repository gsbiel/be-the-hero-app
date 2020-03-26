import React from 'react';
import {
    FiArrowLeft
} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';

const Register = (props) => {
    return(
        <div className = "register-container">
            <div className = "content">
                <section>
                    <img src = {logoImg} alt = "Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className = "back-link" to = "/register">
                        <FiArrowLeft size={16} color="#E02041"/> Não tenho cadastro
                    </Link>
                </section>

            </div>
        </div>
    );
}

export default Register;