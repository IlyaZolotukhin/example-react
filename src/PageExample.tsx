import React from 'react';
import styled from 'styled-components';

// Стили для контейнера страницы
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #f0f0f0;`
;

// Стили для заголовка
const Title = styled.h1`
color: #333;
font-size: 2.5rem;`
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

const PageExample = () => {
    return (
        <Container>
            <Title>Добро пожаловать на мою страницу!</Title>
            <Button>Нажми меня</Button>
        </Container>
    );
};

export default PageExample;