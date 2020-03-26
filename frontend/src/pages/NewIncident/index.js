import React from 'react';
import {Link} from 'react-router-dom';
import {
    FiArrowLeft

} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

const newIncident = (props) => {
    return(
        <div className = "new-incident">
            <div className = "content">
                <section>
                    <img src = {logoImg} alt = "Be the Hero"/>
                    <h1>Cadastar novo caso.</h1>
                    <p>Descreva o caso detalhadamente para encontrar o herói que vai te ajudar a resolver isso.</p>
                    <Link className = "back-link" to = "/profile">
                        <FiArrowLeft size={16} color="#E02041"/> Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" /> 
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}

export default newIncident;