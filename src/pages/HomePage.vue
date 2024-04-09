<template>
  <div class="home">
    <div class="header">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt="logo"
      />
      <div class="wrapper--input">
        <input
          v-model="userSearchRestaurant"
          type="text"
          placeholder="De quoi avez-vous envie ?"
        />
        <div class="search">
          <router-link
            v-for="(restaurant, i) in searchRestaurant"
            :key="i"
            :to="{ name: 'Restaurant', params: { name: restaurant.name } }"
          >
            <div class="container--restaurant--search">
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="" />
              </div>
              <p>{{ restaurant.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banniere"></div>
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
import { onMounted, ref, watch } from "vue";
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
    let all_restaurant = [];

    const makeDataRestaurant = () => {
      let threeRestaurant = [];
      for (const restaurant of BDD) {
        const newRestaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );
        // Make all restaurant array
        all_restaurant.push(newRestaurant);

        if (threeRestaurant.length === 2) {
          threeRestaurant.push(newRestaurant);
          data_restaurant.value.push(threeRestaurant);
          threeRestaurant = [];
        } else {
          threeRestaurant.push(newRestaurant);
        }
      }
    };

    // User Search Restaurant
    let userSearchRestaurant = ref("");
    let searchRestaurant = ref([]);
    watch(userSearchRestaurant, (new_value) => {
      let regex = RegExp(new_value.toLowerCase());

      let newSearchRestaurant = all_restaurant.filter((restaurant) =>
        regex.test(restaurant.name.toLowerCase())
      );

      new_value == 0
        ? (searchRestaurant.value = [])
        : (searchRestaurant.value = newSearchRestaurant);
    });

    // Mounted
    onMounted(makeDataRestaurant);

    //RETURN
    return {
      data_restaurant,
      userSearchRestaurant,
      searchRestaurant,
    };
  },
};
</script>

<style lang="scss">
.home {
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }
    .wrapper--input {
      position: relative;
      input {
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
      }
      .search {
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: #fff;
        .container--restaurant--search {
          display: flex;
          align-items: center;
          padding: 10px;

          &:hover {
            background-color: #f6f6f6;
          }
          .wrapper--img {
            width: 60px;
            height: 60px;
            margin-right: 25px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: auto;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .banniere {
    height: 100px;
    width: 100%;
    background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
    background-size: cover;
    background-position: center center;
  }
}
</style>
