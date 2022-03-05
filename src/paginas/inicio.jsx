import React from 'react';
import styled from 'styled-components';
import Cartao from '../components/Cartao/Cartao';

const Container = styled.main`
    padding: 24px 16px;
    display: grid;
    gap: 16px;
    padding-top: 9vh;
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
            <Cartao destaque={true}/>
            <Secao>
                <TituloSecao>Vídeos mais vistos</TituloSecao>
                <Cartao destaque={false}/>
                <Cartao destaque={false}/>
            </Secao>
        </Container>
    )
}

export default Inicio;