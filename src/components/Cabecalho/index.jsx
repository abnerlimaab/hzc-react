import React, { useState } from 'react';
import styled from 'styled-components';
import MenuLateral from '../MenuLateral/index.jsx';
import { cores, sombra, icones, logotipo } from '../UI/variaveis.js'

const CabecalhoStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    box-shadow: ${sombra};
    background-color: ${cores.cabecalhoMobile};
`;

const CabecalhoLogo = styled.img`
    width: 40px;
`;

const Botao = styled.button`
    background-color: ${cores.cabecalhoMobile};
    color: ${cores.fonte};
    border: none;
`;

const BotaoMenu = styled(Botao)`
    & i::before {
        font-style: normal !important;
        font-size: 24px;
        content: "${icones.menu}";
    };
`;

const BotaoNotificacao = styled(Botao)`
    & i::before {
        font-style: normal !important;
        font-size: 24px;
        content: "${icones.notificacao}";
    }
`

const Cabecalho = () => {

    const [statusMenuLateral, setShowMenuLateral] = useState(false);

    return(
        <>
        <CabecalhoStyled>
            <BotaoMenu 
            aria-label='Menu' 
            onClick={() => {
                setShowMenuLateral(!statusMenuLateral)
            }}>
                <i></i>
            </BotaoMenu>
            <CabecalhoLogo src={logotipo.src} alt={logotipo.alt}/>
            <BotaoNotificacao aria-label='Notificação'><i></i></BotaoNotificacao>
        </CabecalhoStyled>
        <MenuLateral showMenuLateral={statusMenuLateral}/>        
        </>
    )
};

export default Cabecalho;