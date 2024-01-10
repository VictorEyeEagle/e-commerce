"use client"

import React, { useState } from "react";
import styles from "./estilos/loginregistro.module.css";

function Loginregistro() {
    const [show, setShow] = useState('entrar');

    return (
        <div className={styles.loginregistro}>
            <button onClick={() => setShow('entrar')} className={show === 'entrar' ? `${styles.botao} ${styles.ativo}` : styles.botao}><h2>Entrar</h2></button>
            <button onClick={() => setShow('registrar')} className={show === 'registrar' ? `${styles.botao} ${styles.ativo}` : styles.botao}><h2>Registrar</h2></button>
            {show === 'entrar' && (
                <div className={styles.entrar} >
                    <input type="email" id="email" placeholder="Email" className={styles.input} />
                    <input type="password" id="senha" placeholder="Senha" className={styles.input} />
                    <button><h2>Logar</h2></button>
                </div>
            )}
            {show === 'registrar' && (
                <div className={styles.registrar}>
                    <input id="nome de usuario" placeholder="Nome de Usuario" className={styles.input} />
                    <input type="email" id="email" placeholder="Email" className={styles.input} />
                    <input type="password" id="senha" placeholder="Senha" className={styles.input} />
                    <input type="password" id="confirmar senha" placeholder="Confirmar senha" className={styles.input} />
                    <button><h2>Registrar-se</h2></button>
                </div>
            )}
        </div>
    );
}

export default Loginregistro;
