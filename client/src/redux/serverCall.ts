import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverCall = createApi({
    reducerPath: 'serverCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder)  => ({
        getBudgets: builder.query<void, void>({
            query: () => '/budgets',
        }),
        getBudget: builder.query({
            query: (id) => `/budgets/${id}`,
        }),
        getBudgetCategory: builder.query({
            query: (category) => `/budgets/categories/${category}`,
        }),
        addBudget: builder.mutation({
            query: (newBudget) => ({
                url: '/budgets',
                method: 'POST',
                body: newBudget,
            }),
        }),
        updateBudget: builder.mutation({
            query: (updatedBudget) => ({
                url: `/budgets/${updatedBudget.id}`,
                method: 'PUT',
                body: updatedBudget,
            }),
        }),
        deleteBudget: builder.mutation({
            query: (id) => ({
                url: `/budgets/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetBudgetsQuery,
    useGetBudgetQuery,
    useGetBudgetCategoryQuery,
    useAddBudgetMutation,
    useUpdateBudgetMutation,
    useDeleteBudgetMutation,
} = serverCall;