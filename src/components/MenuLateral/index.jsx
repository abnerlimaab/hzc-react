import React, { useState } from 'react';
import styled from 'styled-components';
import { logotipo, cores, icones } from '../UI/variaveis';

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: ${cores.menuLateral};
    width: 75vw;
    height: 100vh;
    position: fixed;
    left: 0;
`;

const Blur = styled(Menu)`
    width: 25vw;
    position: fixed;
    width: 75vw;
    left: 75vw;
    background: transparent;
    backdrop-filter: blur(30px);
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

    return showMenuLateral && (
        <Menu>
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