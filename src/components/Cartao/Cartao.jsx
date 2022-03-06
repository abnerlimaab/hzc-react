import React from 'react';
import styled from 'styled-components';
import bannerMobile from '../../assets/img/banner-mobile_1.png';
import { cores, icones } from '../UI/variaveis';

const Container = styled.article`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${cores.cartao};
    margin: 1rem 0;
`;

const Imagem = styled.img`
    width: 100%;
`;

const Conteudo = styled.div`
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
`;

const Titulo = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    grid-column: span 2;
`;

const Perfil = styled.p`
    color: ${cores.fonteAlternativa};
    font-size: 0.9rem;
    grid-column: span 2;
`;

const Info = styled.p`
    display: flex;
    align-items: center;
    color: ${cores.fonteAlternativa};
`;

const Tempo = styled(Info)`
    &::before{
        content: "${icones.relogio}";
        margin-right: 8px;
    }
`;

const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${cores.botao};
    color: ${cores.fonte};
    border-radius: 18px;
    font-size: 0.9rem; 
    justify-self: flex-end;

    & i::before{
        content: "${icones.play}";
        font-size: 24px;
    }
`;

const Cartao = () => {
    return (
        <Container>
            <Imagem src={bannerMobile} alt="Banner do cartão" />
            <Conteudo>
                <Perfil>
                    Bruno Lopez
                </Perfil>
                <Titulo>
                    HZC - Título
                </Titulo>
                <Tempo>
                    33 minutos
                </Tempo>
                <Botao aria-label="Assistir agora">
                    <i></i>
                </Botao>
            </Conteudo>
        </Container>
    );
}

export default Cartao;