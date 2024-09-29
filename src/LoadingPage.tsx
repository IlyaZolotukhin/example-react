import React, {useEffect, useState} from 'react';
import {Product} from "./types";
import styled from "styled-components";
import {Button} from "./MyPage";
import {useDeleteProductMutation} from "./api/productApi";

interface LoadingPageProps {
    initialProducts: Product[];
    error: any;
    isLoading: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ initialProducts, error, isLoading }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [deleteProduct] = useDeleteProductMutation();

    useEffect(() => {
        setProducts(initialProducts);
    }, [initialProducts]);

    const handleDelete = async (id: number) => {
        try {
            await deleteProduct(id).unwrap(); // Удаление продукта
            // Обновляем состояние после успешного удаления
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.error('Failed to delete the product: ', err);
        }
    };


    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <ERROR>Error fetching products.</ERROR>}
            {products.map((product: Product) => (
                <ContainerIMG key={product.id}>
                    <IMG src={product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <h4>{product.price}$</h4>
                    <Button onClick={() => handleDelete(product.id)}>Удали меня</Button>
                </ContainerIMG>
            ))}
        </div>
    );
};

// Стили для картинки
const IMG = styled.img`
    height: 100px`
;

// Стили для ошибки
const ERROR = styled.p`
    color: red`
;

// Стили для продуктов
const ContainerIMG = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    margin-top: 100px;
    background-color: #f0f0f0;`
;

export default LoadingPage;