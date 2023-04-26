import React from 'react'
import './styles.css';
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className="logo">
            <img
                src={logo}
                alt='Logotipo da Alura Books' className="logo-img" />
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo
