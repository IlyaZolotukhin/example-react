import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

interface MyPageProps {
    trigger(): void
}

const MyPage: React.FC<MyPageProps> = ({trigger}) => {
    const navigate = useNavigate();

    const Trigger = () => {
        trigger()
        navigate('/loading')
    }

    return (
        <Container>
            <Title>Добро пожаловать на мою страницу!</Title>
            <Button onClick={Trigger}>Нажми меня</Button>
        </Container>
    );
};

// Стили для контейнера страницы
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`
;

// Стили для заголовка
const Title = styled.h1`
    color: #333;
    font-size: 2.5rem;`
;

// Стили для кнопки
export const Button = styled.button`
    height: 40px;
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

export default MyPage;