import React from 'react';
import './styles.css';
import logoImagem from '../../assets/login4.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImagem} alt="Login" id="img1" />
                <form>
                    <h1>Cadastro de Alunos</h1>
                    <input placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}