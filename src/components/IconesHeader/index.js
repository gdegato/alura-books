import React from 'react'
import './styles.css'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';


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
