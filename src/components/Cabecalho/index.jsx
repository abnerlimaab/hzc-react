import React, { useState } from 'react';
import styled from 'styled-components';
import MenuLateral from '../MenuLateral/index.jsx';
import { cores, sombra, icones, logotipo } from '../UI/variaveis.js'
import profileImg from '../../assets/img/profile_2.png'

const Header = styled.header`
    position: fixed;
    width: 100vw;
    margin-bottom: 5vh;

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: auto 1fr;
        /* column-gap: 32px; */
    }
`;

const CabecalhoStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 8px 16px; */
    box-shadow: ${sombra};
    background-color: ${cores.cabecalhoMobile};

    @media screen and (max-width: 1439px) {
        position: absolute;
        top: 0;
        height: 5vh;
        width: 100vw;
    }

    @media screen and (min-width: 1440px) {
        background-color: ${cores.cabecalho};
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 16px 60px;
        height: 80px;
        box-box-sizing: border-box;
    }
`;

const CabecalhoLogo = styled.img`
    width: 40px;

    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

const Perfil = styled.p`
    display: none;

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: repeat(3, auto);
        column-gap: 8px;
        align-items: center;
        justify-self: flex-end;
        color: ${cores.fonte};
        padding: 8px 32px;
        border-right: 1px solid ${cores.fonteAlternativa};

        &::before {
            content: "";
            display: block;
            width: 32px;
            height: 32px;
            background-image: url(${profileImg});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        &::after {
            font-family: "Icones";
            content: "${icones.setaBaixo}";
            color: ${cores.fonte};
            font-size: 1.5rem;
        }
    }
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

    @media screen and (min-width: 1440px) {
        display: none;
    }
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
        <MenuLateral showMenuLateral={statusMenuLateral} setShowMenuLateral={setShowMenuLateral.bind(this)}/>        
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
        </Header>
    )
};

export default Cabecalho;