import React, {useState} from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id,setid] = useState('');
    const history = useHistory();

    async function handleLogon () {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem ('ondId', id);
            localStorage.setItem('ongName',response.data.name);

            history.push('profile');

        } catch (error) {
            alert ('Falha no logon, tente novamente')
        }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu Logon</h1>

                    <input
                        placeholder="Sua ID"
                        value = {id}
                        onChange = {e => setid(e.target.value)}    
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color = "#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        
        <img src= {heroesImg} alt="Heroes" />
        </div>
    );
}