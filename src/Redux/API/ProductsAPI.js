import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:1337/api`}),
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => 'products?populate=image'
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}?populate=image`,
        })
    })
})

export const {useGetAllProductsQuery, useGetProductQuery} = productsAPI
