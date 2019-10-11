<template>
  <div class="Header">
    <div class="container">
      <div class="Header__hamburger" :class="{active: isHambuergerOpen}" @click="openNavbar"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isHambuergerOpen: false
    };
  },
  methods: {
    openNavbar() {
      this.isHambuergerOpen = !this.isHambuergerOpen;
    }
  },
  async created() {
   const users = await this.$http.get('https://jsonplaceholder.typicode.com/users');
   console.log(users.data);
  }
};
</script>