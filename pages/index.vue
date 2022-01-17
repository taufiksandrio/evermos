<template>
    <div class="product">
      <div class="card" v-for="product in products" :key="product.id">
        <img :src="require(`@/assets/images/${product.img}`)" alt="" srcset="">
        <div class="card-header">
          <p><NuxtLink :to="'/product/'+product.slug">{{product.nama_product}}</NuxtLink></p>
        </div>
        <div class="card-body">
          <h3>Rp {{product.harga}}</h3>
          <p>{{product.domisili}}</p>
          <span><i class="fas fa-star" style="color: orange"></i> {{product.rating}} | Terjual {{product.terjual}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'IndexPage',
  layouts: 'default',
  computed:{
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted(){
    this.getProducts()
  }
}
</script>
