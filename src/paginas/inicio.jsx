import React from 'react';
import styled from 'styled-components';
import Cartao from '../components/Cartao/Cartao';
import CartaoDestaque from '../components/Cartao/CartaoDestaque';
import CartaoRecentes from '../components/Cartao/CartaoRecentes';

const Container = styled.main`
    padding: 24px 16px;
    display: grid;
    gap: 16px;
    padding-top: 9vh;

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: auto 1fr auto;
        column-gap: 32px;
        padding: 16px 60px;
    }
`;

const Titulo = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
`;

const Secao = styled.section`
    display: grid;
    gap: 16px;
`;

const TituloSecao = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
`;

const Inicio = () => {
    return (
        <Container>
            <Titulo>Inicio</Titulo>
            <CartaoDestaque/>
            <CartaoRecentes/>
            <Secao>
                <TituloSecao>Vídeos mais vistos</TituloSecao>
                <Cartao/>
                <Cartao/>
            </Secao>
            <CartaoRecentes/>
        </Container>
    )
}

export default Inicio;