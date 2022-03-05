import React from 'react';
import styled from 'styled-components';
import { logotipo, cores, icones } from '../UI/variaveis';

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: ${cores.menuLateral};
    width: 75vw;
    height: 100vh;
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
        content: "${(props) => (props.icone)}";
        width: 24px;
        height: 24px;
        font-size: 24px;
        position: absolute;
        left: 24px;
    };
`;

const MenuLateral = () => {

    const links = [
        {
            url: '#',
            texto: 'Inicio',
            icone: icones.inicio
        },
        {
            url: '#',
            texto: 'Vdeos',
            icone: icones.videos
        },
        {
            url: '#',
            texto: 'Picos',
            icone: icones.picos
        },
        {
            url: '#',
            texto: 'Integrantes',
            icone: icones.integrantes
        },
        {
            url: '#',
            texto: 'Camisas',
            icone: icones.camisas
        },
        {
            url: '#',
            texto: 'Pinturas',
            icone: icones.pinturas
        },
    ]

    return(
        <Menu>
            <Logo src={logotipo.src} alt={logotipo.alt}/>
            {links.map((menuItem, index) => {
                return <MenuItem key={index} icone={menuItem.icone} href={menuItem.url}>{menuItem.texto}</MenuItem>;
            })}
        </Menu>
    )
};

export default MenuLateral;