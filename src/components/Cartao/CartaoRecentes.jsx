import React from 'react';
import styled from 'styled-components';
import miniatura from '../../assets/img/miniatura_1.png'
import { cores } from '../UI/variaveis';

const Container = styled.article`
    display: none;

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto 1fr;
        align-items: center;
        row-gap: 24px;
        width: 256px;
        padding: 16px;
        box-sizing: border-box;
    }
`;

const Titulo = styled.h3`
    grid-column: auto;
    align-self: flex-start;
`;

const CartaoLink = styled.a`
    font-size: 0.8rem;
    font-weight: 600px;
    color: ${cores.links};
    align-self: flex-start;
    justify-self: flex-end;
`;

const Lista = styled.ul`
    align-self: flex-start;
    display: grid;
    row-gap: 16px;
    grid-column: span 2;
`;

const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
`;

const ItemThumbnail = styled.img`
    width: 32px;
    grid-row: span 2;
`;

const ItemTitulo = styled.h4`
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 700;
`;

const ItemPerfil = styled.p`
    font-size: 0.8rem;
    color: ${cores.fonteAlternativa};
`;

const CartaoRecentes = () => {
    return (
        <Container>
            <Titulo>Vídeos Recentes</Titulo>
            <CartaoLink>
                Ver todos
            </CartaoLink>
            <Lista>
                <Item>
                    <ItemThumbnail src={miniatura} alt='Thumbnail'/>
                    <ItemTitulo>
                        HZC - Love Machine
                    </ItemTitulo>
                    <ItemPerfil>
                        Bruno Lopez
                    </ItemPerfil>
                </Item>
                <Item>
                    <ItemThumbnail src={miniatura} alt='Thumbnail'/>
                    <ItemTitulo>
                        HZC - Love Machine
                    </ItemTitulo>
                    <ItemPerfil>
                        Bruno Lopez
                    </ItemPerfil>
                </Item>
                <Item>
                    <ItemThumbnail src={miniatura} alt='Thumbnail'/>
                    <ItemTitulo>
                        HZC - Love Machine
                    </ItemTitulo>
                    <ItemPerfil>
                        Bruno Lopez
                    </ItemPerfil>
                </Item>
                <Item>
                    <ItemThumbnail src={miniatura} alt='Thumbnail'/>
                    <ItemTitulo>
                        HZC - Love Machine
                    </ItemTitulo>
                    <ItemPerfil>
                        Bruno Lopez
                    </ItemPerfil>
                </Item>
                <Item>
                    <ItemThumbnail src={miniatura} alt='Thumbnail'/>
                    <ItemTitulo>
                        HZC - Love Machine
                    </ItemTitulo>
                    <ItemPerfil>
                        Bruno Lopez
                    </ItemPerfil>
                </Item>
            </Lista>
        </Container>
    )
}

export default CartaoRecentes;