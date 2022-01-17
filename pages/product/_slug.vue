<template>
    <transition name="home">
        <div class="detail-container">
            <div class="detail-container-img">
                <img :src="detailProduct.img ? require(`@/assets/images/${detailProduct.img}`) : ''" alt="" srcset=""/>
            </div>
            <div class="detail-container-content">
                <div class="product-title">
                    <h1>{{detailProduct.nama_product}} {{loader}}</h1>
                </div>
                <div class="product-keterangan">
                    <span><i class="fas fa-star" style="color: orange"></i> {{detailProduct.rating}} | Terjual {{detailProduct.terjual}} | {{detailProduct.domisili}}</span>
                </div>
                <div class="product-harga">RP. {{detailProduct.harga}}</div>
                <div class="product-detail" v-html="detailProduct.keterangan"></div>
                <div class="product-pemesanan">
                    <button class="keranjang"><i class="fas fa-shopping-cart"></i> Keranjang</button>
                    <button class="beli">Beli</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'DetailPage',
    transition: 'home',
    layouts: 'default',
    computed:{
        ...mapState(['detailProduct', 'loader']),
    },
    methods: {
        ...mapActions(['getDetail']),
    },
    mounted(){
        this.getDetail(this.$route.params.slug)
    }
}
</script>
<style>