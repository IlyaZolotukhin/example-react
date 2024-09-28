import React from 'react';
import styled from 'styled-components';
import {Product} from "./types";
import {useLazyGetProductsQuery} from "./api/productApi";

const PageExample: React.FC = () => {
    const [trigger, { data: products = [], error, isLoading }] = useLazyGetProductsQuery();

    return (
        <Container>
            <Title>Добро пожаловать на мою страницу!</Title>
            <Button onClick={() => trigger()}>Нажми меня</Button>
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p style={{color: "red"}}>Error fetching products.</p>}
                {products.map((product: Product) => (
                    <ContainerIMG key={product.id}>
                        <IMG src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h4 style={{ marginLeft: 100 }}>{product.price}$</h4>
                    </ContainerIMG>
                ))}
            </div>
        </Container>
    );
};

// Стили для контейнера страницы
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;`
;

// Стили для заголовка
const Title = styled.h1`
    color: #333;
    font-size: 2.5rem;`
;

// Стили для картинки
const IMG = styled.img`
    margin-right: 50px;
    height: 100px`
;

// Стили для продуктов
const ContainerIMG = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    background-color: #f0f0f0;`
;

// Стили для кнопки
const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }`
;

export default PageExample;