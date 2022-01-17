import axios from 'axios'

export const state = () => ({
    counter: 0,
    products: [],
    detailProduct: []
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    setProduct(state, items){
        state.products = items
    },
    setDetail(state, items){
        state.detailProduct = items
    }
}

export const actions = {
    async getProducts ({commit}) {
        axios.get('http://my-json-server.typicode.com/taufiksandrio/products/products')
        .then(response => {
            commit('setProduct', response.data)
        })
    },
    async getDetail ({commit}, data) {
        axios.get('http://my-json-server.typicode.com/taufiksandrio/products/products?slug='+ data)
        .then(response => {
            commit('setDetail', response.data[0])
        })
    }
}