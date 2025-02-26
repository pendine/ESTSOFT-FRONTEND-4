import { create } from 'zustand'

export const useProductStore = create(set => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })
    const response = await fetch('https://dummyjson.com/products/')
    const data = await response.json()
    set({
      products: data.products.map(p => ({
        id: p.id,
        title: p.title,
        price: p.price,
        thumbnail: p.thumbnail
      })),
      loading: false
    })
  }
}))
