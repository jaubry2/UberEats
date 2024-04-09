<template>
  <RouterLink to="/"> <div id="return">Retour à la Home</div></RouterLink>
  <br />
  <div class="restaurant">
    <h1>{{ restaurant.name }}</h1>
    <img :src="restaurant.image" alt="restaurant" />
    <p>Note : {{ restaurant.note }}/5</p>
    <p>Temps de livraison : {{ restaurant.drive_time }} min</p>
  </div>
</template>

<script>
import BDD from "../BDD.js";
import { useRoute } from "vue-router";
export default {
  name: "RestaurantPage",
  setup() {
    const route = useRoute();
    const restaurant = BDD.find(
      (restaurant) => restaurant.name === route.params.name
    );
    return { restaurant };
  },
};
</script>

<style lang="scss" scoped>
#return {
  margin: 25px 45px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: inherit;

  &:hover {
    font-weight: 900;
  }
}
</style>
