import React, { useState } from 'react';
import styled from 'styled-components';
import { logotipo, cores, icones } from '../UI/variaveis';

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: ${cores.menuLateral};
    width: 75vw;
    height: 95vh;
    margin-top: 5vh;
    left: 0;

    @media screen and (max-width: 1439px) {
        ${({showMenuLateral}) => showMenuLateral && `display: none`}
    }

    @media screen and (min-width: 1440px) {
        height: 100vh;
        margin-top: 0;
        width: 200px;
    }
`;

const Blur = styled(Menu)`
    position: fixed;
    top: 0;
    left: 75vw;
    width: 25vw;
    height: 95vh;
    background: transparent;
    backdrop-filter: blur(30px);

    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

const Logo = styled.img`
    width: 118px;
    align-self: center;
    padding: 16px;
`;

const MenuItem = styled.a`
    height: 64px;
    color: ${cores.fonteAlternativa};
    text-decoration: none;
    padding-left: 64px;
    display: flex;
    align-items: center;

    &:before {
        font-family: "Icones" !important;
        content: "${({icone}) => (icone)}";
        width: 24px;
        height: 24px;
        font-size: 24px;
        position: absolute;
        left: 24px;
    };

    ${({ativo}) => ativo && `
        color: ${cores.fonte};
        padding-left: 56px;
        border-left: 8px solid ${cores.fonte}
    `}
`;

const MenuLateral = ({ showMenuLateral, setShowMenuLateral}) => {

    const [itemAtivo, setItemAtivo] = useState("Inicio");

    const links = [
        {
            url: '#',
            texto: 'Inicio',
            icone: icones.inicio,
        },
        {
            url: '#',
            texto: 'Vdeos',
            icone: icones.videos,
        },
        {
            url: '#',
            texto: 'Picos',
            icone: icones.picos,
        },
        {
            url: '#',
            texto: 'Integrantes',
            icone: icones.integrantes,
        },
        {
            url: '#',
            texto: 'Camisas',
            icone: icones.camisas,
        },
        {
            url: '#',
            texto: 'Pinturas',
            icone: icones.pinturas,
        },
    ]

    return (
        <Menu 
            showMenuLateral={showMenuLateral}
            >
            <Blur
                onClick={() => setShowMenuLateral(!showMenuLateral)}
            ></Blur>
            <Logo src={logotipo.src} alt={logotipo.alt}/>
            {links.map((menuItem, index) => {
                return (
                <MenuItem 
                    onClick={(e) => {
                        setItemAtivo(e.target.innerHTML)
                        setShowMenuLateral(!showMenuLateral)
                    }}
                    key={index} 
                    icone={menuItem.icone} 
                    ativo={itemAtivo === menuItem.texto} 
                    href={menuItem.url}>
                    {menuItem.texto}    
                </MenuItem>);
            })}
        </Menu>
    )
};

export default MenuLateral;