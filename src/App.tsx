import React from 'react';
import MyPage from "./MyPage";
import LoadingPage from "./LoadingPage";
import LoginPage from "./LoginPage";
import {useLazyGetProductsQuery} from "./api/productApi";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";

function App() {
    const [trigger, { data: products = [], error, isLoading }] = useLazyGetProductsQuery();

    return (
        <Container>
                <Routes>
                    <Route path={"/"} element={<LoginPage />} />
                    <Route path={"/my-page"} element={<MyPage trigger={trigger} />} />
                    <Route path={"/loading"} element={<LoadingPage initialProducts={products} error={error} isLoading={isLoading} />} />
                </Routes>
        </Container>
  );
}

// Стили для контейнера страницы
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;`
;

export default App;
