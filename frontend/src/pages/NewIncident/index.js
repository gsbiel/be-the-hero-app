import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    FiArrowLeft

} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

const NewIncident = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const data = {
            title,
            description,
            value
        }
        try{
            const resp = await api.post('/incidents',data,{
                headers:{
                    Authorization: localStorage.getItem('ongId')
                }
            });
            console.log(`Ong criada com id: ${resp.data.id}`);
        }catch(err){
            alert('[NewIncident onSubmitHandler]: Aconteceu um erro na requisição com o backend.')
        }
    }


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

                <form onSubmit={(event) => onSubmitHandler(event)}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}   
                    /> 
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}   
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}

export default NewIncident;