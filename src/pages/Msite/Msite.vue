<template>
  <div class="msite">
    <headerTop :title="address.name">
      <router-link class="header_search" slot="left" to='/search'>
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          {{userInfo.name || '登录/注册'}}
        </span>
        <span class="header_login_text">
            <i class="iconfont icon-person"></i>
        </span>
        
      </router-link>
    </headerTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categoryArr.length">
        
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(category, index) in categoryArr"
            :key="index"
          >
            <a
              href="javascript"
              class="link_to_food"
              v-for="(item, index2) in category"
              :key="index2"
            >
              <div class="food_container">
                <img :src="baseUrl + item.image_url" />
              </div>
              <span>{{ item.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--附近商家-->
    <div class="msite_shop_list">
      <div class="shop-header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shoopList></shoopList>
    </div>
  </div>
</template>

<script>
import headerTop from "../../components/headerTop/headerTop.vue";
import shoopList from "../../components/shoopList/shoopLlist.vue"; 
import Swiper from 'swiper'//npm i swiper 引入swiper
import 'swiper/swiper.min.css'//在node-modules里的swiper下
import { mapState } from "vuex";
export default {
  name: "Miste",
  data() {
    return {
      baseUrl: "https://fuss10.elemecdn.com",
    };
  },
  components: {
    headerTop,
    shoopList,
  },
  computed: {
    ...mapState(["address", "categorys", "shops","userInfo"]),
    //根据categorys一维数组生成二维数组
    categoryArr() {
      const { categorys } = this;
      //准备二维数组
      const arr = [];
      let minArr = [];
      categorys.forEach((c) => {
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(c);
        //当数组满八个后，就把数组添加到大数组里，然后数组清空，再去添加（导航页一页最多只有八个）
        if (minArr.length === 8) {
          minArr = [];
        }
      });
      return arr;
    },
  },
  watch: {
      categorys(value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    },
  mounted() {
    this.$store.dispatch("getFoodList");
    this.$store.dispatch("getShopList");
  },
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl';

.msite {
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0 10px;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>