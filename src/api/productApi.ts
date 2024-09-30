import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from "../types";


export const productsSlice = createApi({
    reducerPath: 'productsSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => 'products',
        }),
        deleteProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useDeleteProductMutation } = productsSlice;