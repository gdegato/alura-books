import React from 'react'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

import './styles.css'

function IconesHeader() {

    const iconeOpcoes = [perfil, sacola];
    return (
        <div>
            <ul
                className="App-icones">
                {iconeOpcoes.map((icone) => (
                    <li className="App-icone">
                        <img src={icone} alt=''></img>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default IconesHeader
