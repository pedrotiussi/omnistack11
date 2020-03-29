import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';


export default function Incident(){
    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');
    const [value,setvalue] = useState('');
    const ongId = localStorage.getItem('ondId');
    const history = useHistory();

    async function handleNewIncident (e){
        e.preventDefault ();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data,{
                headers:{
                    Authorization: ongId
                }
            })
            history.push('profile');
        } catch (error) {
            alert ("Erro ao cadastrar caso, tente novamente.")
        }
    }


    return (
        <div className="new-incident-container">   
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color = "#e02041"/>
                            Voltar para home
                    </Link>
            
                </section>

                <form>
                    <input 
                        placeholder="Título do caso"
                        value = {title}
                        onChange={e => settitle(e.target.value)}
                    />
                    <textearea 
                        placeholder="Descrição"
                        value = {description}
                        onChange={e => setdescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value = {value}
                        onChange={e => setvalue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
      </div>  

    );
}