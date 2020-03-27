import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import {
    FiPower,
} from 'react-icons/fi'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import Case from './Case';

const Profile = (props) => {

    const history = useHistory();
    const [cases, setCases] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {fetchCasesForOng()});

    const fetchCasesForOng = async (props) => {
        try{
            const response = await api.get("/profile",{
                headers:{
                    'Authorization' : ongId
                }
            });
            setCases(response.data);
        }catch(err){
            alert("Aconteceu um erro na requisição de dados do backend");
        }
    }

    const onDeleteCase = async (id) => {
        try{
            await api.delete(`/incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            });
            fetchCasesForOng();
        }catch(err){
            alert('[Delete Incident] Erro na requisição com a API.')
        }
    }

    const onLogOutHandler = () => {
        localStorage.clear();
        history.push('/');
    }

    var caseList = cases.map(caseItem => {
        return <Case 
                key={caseItem.id} 
                id = {caseItem.id}
                name={caseItem.title} 
                description={caseItem.description} 
                value={Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'}).format(caseItem.value)} 
                onDeleteHandler = {onDeleteCase}/>
    });

    return(
        <div className = "profile-container">
            <header>
                <img src = {logoImg} alt = "Be the Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className = "button" to = "/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={() => onLogOutHandler()}>
                    <FiPower size = {18} color = "E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {caseList}
            </ul>
        </div>
    );
}

export default Profile;