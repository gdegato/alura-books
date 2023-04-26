import React from 'react'
import './styles.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <div>
            <ul
                className="App-opcoes">
                {textoOpcoes.map((texto) => (
                    <li className="App-opcao">
                        <p>{texto}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default OpcoesHeader
