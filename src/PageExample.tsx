import React, {useState} from 'react';
import styled from 'styled-components';
import axios from "axios";

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

const PageExample: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);


    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    return (
        <Container>
            <Title>Добро пожаловать на мою страницу!</Title>
            <Button onClick={() => fetchProducts()}>Нажми меня</Button>
            <div>
                {products.map(product => (
                    <Product key={product.id}>
                        <IMG src={product.image} alt={product.title}/>
                        <h3>{product.title}</h3>
                    </Product>
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
const Product = styled.div`
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