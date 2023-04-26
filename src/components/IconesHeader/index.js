import React from 'react'
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components'

const Icones = styled.ul`
{
    display: flex;
    flex-direction: row;
    align-items: center;
}
`
const Icone = styled.li`
{
    margin-right: 40px;
    width: 25px;
}
`
function IconesHeader() {

    const iconeOpcoes = [perfil, sacola];
    return (
        <Icones>
            {iconeOpcoes.map((icone) => (
                <Icone >
                    <img src={icone} alt=''></img>
                </Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader
