import React from "react";
import './styles.css';
import logoCadadstro from '../../assets/cadastro.png';
import { Link } from "react-router-dom";
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';

export default function Alunos() {
    return (
        <div className="aluno-container">
            <header>
                <img src={logoCadadstro} alt="Cadastro" />
                <span>Bem-Vindo, <strong>Leonardo</strong>!</span>
                <Link className="button" to="/aluno/novo/0">Novo Aluno</Link>
                <button type="button">
                    x
                    {/* <FiXCircle size={35} color="#17202a" /> */}
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" className="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome:</b> Paulo<br /><br />
                    <b>Email:</b> paulo@email.com<br /><br />
                    <b>Idade:</b> 22<br /><br />
                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                </li>
                <li>
                    <b>Nome:</b> Cícero<br /><br />
                    <b>Email:</b> cicero@email.com<br /><br />
                    <b>Idade:</b> 50<br /><br />
                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    );
}