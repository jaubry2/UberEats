<template>
  <div class="restaurant--card">
    <div :style="changeBackground" class="restaurant--image"></div>
    <div class="restaurant--info">
      <div class="top">
        <p class="name">{{ info_restaurant.name }}</p>
        <p class="note">
          <span>{{ info_restaurant.note }}</span>
        </p>
      </div>
      <p class="time">{{ info_restaurant.drive_time }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "RestaurantCard",
  props: {
    info_restaurant: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image})`,
      };
    });

    //RETURN
    return { changeBackground };
  },
};
</script>

<style lang="scss">
.restaurant--card {
  width: 32%;
  height: 30vh;
  p {
    margin: 0;
  }
  .restaurant--image {
    background-image: url("../assets/img/Subway.png");
    height: 70%;
    background-size: cover;
    background-position: center;
  }
  .restaurant--info {
    .top {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .note {
        background-color: #eeeeee;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        border-radius: 50%;
      }
    }
    .time {
      font-size: 0.9rem;
    }
  }
}
</style>
