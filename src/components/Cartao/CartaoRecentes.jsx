import React from 'react';
import styled from 'styled-components';
import miniatura from '../../assets/img/miniatura_1.png'

const Container = styled.article``;

const Titulo = styled.h3``;

const CartaoLink = styled.a``;

const Lista = styled.ul``;

const Item = styled.li``;

const ItemThumbnail = styled.img``;

const ItemTitulo = styled.h4``;

const ItemPerfil = styled.p``;

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