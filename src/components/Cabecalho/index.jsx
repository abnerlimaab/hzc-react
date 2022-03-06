import React, { useState } from 'react';
import styled from 'styled-components';
import MenuLateral from '../MenuLateral/index.jsx';
import { cores, sombra, icones, logotipo } from '../UI/variaveis.js'

const Header = styled.header`
    position: fixed;
    width: 100vw;
    margin-bottom: 5vh;
`;

const CabecalhoStyled = styled.nav`
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

const Perfil = styled.p``;

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
        <Header>
        <CabecalhoStyled>
            <BotaoMenu 
            aria-label='Menu' 
            onClick={() => {
                setShowMenuLateral(!statusMenuLateral)
            }}>
                <i></i>
            </BotaoMenu>
            <Perfil>
                Bruno Lopez
            </Perfil>
            <CabecalhoLogo src={logotipo.src} alt={logotipo.alt}/>
            <BotaoNotificacao aria-label='Notificação'><i></i></BotaoNotificacao>
        </CabecalhoStyled>
        <MenuLateral showMenuLateral={statusMenuLateral} setShowMenuLateral={setShowMenuLateral.bind(this)}/>        
        </Header>
    )
};

export default Cabecalho;