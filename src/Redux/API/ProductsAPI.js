import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.BACKEND_URL}/api`}),
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
