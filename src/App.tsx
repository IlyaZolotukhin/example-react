import React from 'react';
import MyPage from "./MyPage";
import LoadingPage from "./LoadingPage";
import LoginPage from "./LoginPage";
import {useLazyGetProductsQuery} from "./api/productApi";
import styled from "styled-components";

function App() {
    const [trigger, {data: products = [], error, isLoading}] = useLazyGetProductsQuery();

  return (
    <Container>
        <LoginPage />
        <MyPage trigger={trigger} />
        <LoadingPage initialProducts={products} error={error} isLoading={isLoading} />
    </Container>
  );
}

// Стили для контейнера страницы
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;`
;

export default App;
