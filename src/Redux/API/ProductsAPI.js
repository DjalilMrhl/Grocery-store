import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: `https://strapi-kp0a.onrender.com/api`}),
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
