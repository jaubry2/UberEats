<template>
  <div class="home">
    <RestaurantRow
      v-for="(data, i) in data_restaurant"
      :key="i"
      :three_restaurant="data"
    />
  </div>
</template>

<script>
// IMPORT
import BDD from "../BDD.js";
import { onMounted, ref } from "vue";
// COMPONENTS
import RestaurantRow from "../components/RestaurantRow.vue";
export default {
  name: "HomePage",
  components: { RestaurantRow },
  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }

    let data_restaurant = ref([]);

    const makeDataRestaurant = () => {
      let threeRestaurant = [];
      for (const restaurant of BDD) {
        const newRestaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );

        if (threeRestaurant.length === 2) {
          threeRestaurant.push(newRestaurant);
          data_restaurant.value.push(threeRestaurant);
          threeRestaurant = [];
        } else {
          threeRestaurant.push(newRestaurant);
        }
      }
    };
    onMounted(makeDataRestaurant);
    console.log(data_restaurant);

    //RETURN
    return { data_restaurant };
  },
};
</script>

<style></style>
