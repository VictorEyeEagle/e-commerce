"use client"

import React, { useState } from "react";
import "./estilos/loginregistro.css";

function Loginregistro() {
    const [show, setShow] = useState('entrar');

    return (
        <div className="loginregistro">
            <button onClick={() => setShow('entrar')} className={show === 'entrar' ? "botao ativo" : "botao"}><h2>Entrar</h2></button>
            <button onClick={() => setShow('registrar')} className={show === 'registrar' ? "botao ativo" : "botao"}><h2>Registrar</h2></button>
            {show === 'entrar' && (
                <div className="entrar" >
                    <input type="email" id="email" placeholder="Email" className="input" />
                    <input type="password" id="senha" placeholder="Senha" className="input" />
                    <button><h2>Logar</h2></button>
                </div>
            )}
            {show === 'registrar' && (
                <div className="registrar">
                    <input id="nome de usuario" placeholder="Nome de Usuario" className="input" />
                    <input type="email" id="email" placeholder="Email" className="input" />
                    <input type="password" id="senha" placeholder="Senha" className="input" />
                    <input type="password" id="confirmar senha" placeholder="Confirmar senha" className="input" />
                    <button><h2>Registrar-se</h2></button>
                </div>
            )}
        </div>
    );
}

export default Loginregistro;
