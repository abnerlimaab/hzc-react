import React from 'react';
import styled from 'styled-components';
import { cores, sombra, icones, logotipo } from '../UI/variaveis.js'

const CabecalhoStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    box-shadow: ${sombra};
    background-color: ${cores.cabecalho};
`;

const CabecalhoLogo = styled.img`
    width: 40px;
`;

const Botao = styled.button`
    background-color: ${cores.corpo};
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
    return(
        <CabecalhoStyled>
            <BotaoMenu aria-label='Menu'><i></i></BotaoMenu>
            <CabecalhoLogo src={logotipo.src} alt={logotipo.alt}/>
            <BotaoNotificacao aria-label='Notificação'><i></i></BotaoNotificacao>
        </CabecalhoStyled>
    )
};

export default Cabecalho;