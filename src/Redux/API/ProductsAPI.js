import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: `https://c4f8-41-100-25-227.eu.ngrok.io/api`}),
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
