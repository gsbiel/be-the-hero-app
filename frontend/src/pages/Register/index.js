import React, {useState} from 'react';
import {
    FiArrowLeft
} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

const Register = (props) => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const handleRegister = async (event) => {
        event.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const resp = await api.post('ongs', data);
            alert(`Seu ID de acesso ${resp.data.id}`);
            history.push('/');
        }catch(err){
            alert("Erro: ", err);
        }

    }

    return(
        <div className = "register-container">
            <div className = "content">
                <section>
                    <img src = {logoImg} alt = "Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className = "back-link" to = "/">
                        <FiArrowLeft size={16} color="#E02041"/> Voltar
                    </Link>
                </section>

                <form onSubmit={(event) => handleRegister(event)}>
                    <input 
                        placeholder="Nome da ONG" 
                        value = {name}
                        onChange = {(event) => setName(event.target.value)}
                    /> 

                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange = {(event) => setEmail(event.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={(event) => setWhatsapp(event.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{width: 80}} 
                            value={uf}
                            onChange={(event)=>setUf(event.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;