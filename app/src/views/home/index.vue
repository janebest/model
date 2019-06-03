<template>
  <div class="wrap">
    首页内容
    城市：{{$store.state.city}}
    <section>
      <mt-index-list>
        <mt-index-section v-for="item in cityList" :key="item.initial" :index="item.initial">
          <mt-cell @click.native="change(city.name)" v-for="(city,i) in item.list" :key="item.initial+i" :title="city.name"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </section>
  </div>
</template>
<script>
import { get } from "../../requests/apis";
export default {
  name: "home",
  data() {
    return {
      cityList: ""
    };
  },
  created() {
    get("/mock/cityList.json").then(res => {
      this.cityList = res.city;
    });
  },
  methods:{
      change(city){
          this.$store.commit('changeCity',city)
      }
  },
  mounted() {
    AMap.plugin("AMap.CitySearch", () => {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity((status, result) => {
        if (status === "complete" && result.info === "OK") {
          // 查询成功，result即为当前所在城市信息
          console.log(result);
          const city = result.city.slice(0, -1);
          this.$messagebox
            .confirm("是否定位到当前城市?", "")
            .then(action => {
              //confirm
              this.$store.commit("changeCity", city);
            })
            .catch(action => {
              console.log(action);
            });
        }
      });
    });
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
}
</style>