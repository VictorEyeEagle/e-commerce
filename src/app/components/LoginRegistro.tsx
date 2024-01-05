"use client"
import React, { useState } from "react";
import "./estilos/loginregistro.css";

function Loginregistro() {
    const [show, setShow] = useState('entrar');

    return (
        <div className="loginregistro">
            <button onClick={() => setShow('entrar')} className="botao"><h2>Entrar</h2></button>
            <button onClick={() => setShow('registrar')} className="botao"><h2>Registrar</h2></button>
            {show === 'entrar' && (
                <div className="entrar" >
                    <input id="email" placeholder="Email" className="input" />
                    <input id="senha" placeholder="Senha" className="input" />
                </div>
            )}
            {show === 'registrar' && (
                <div className="registrar">
                    <input id="email" placeholder="Email" className="input" />
                    <input id="senha" placeholder="Senha" className="input" />
                    <input id="nome de usuario" placeholder="Nome de Usuario" className="input" />
                    <input id="confirmar senha" placeholder="Confirmar senha" className="input" />
                </div>
            )}
        </div>
    );
}

export default Loginregistro;
