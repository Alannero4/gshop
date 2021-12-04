<template>
  <div class="cartcontrol">
    <transation name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updataFoodsCount(false)"></div>
    </transation>
    <div class="cart-count" v-if="food.count">{{ food.count }}</div>
    <div class="iconfont icon-add_circle" @click.stop="updataFoodsCount(true)"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
      food: Object
  },
  methods: {
    updataFoodsCount(isAdd) {
      const {food} = this
      this.$store.dispatch("updataFoodsCount", { isAdd,food });
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.cartcontrol 
  font-size: 0;

  .cart-decrease 
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    background-color: rgb(0, 160, 220);
  

  .icon-remove_circle_outline
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    background-color: $green;
    &.move-enter-active,&.move-leave-active
      transform: all 0.3s
    &.move-enter,&.move-leave-to
      opacity 0
      transform: translateX(20px) rotate(180deg)

  .cart-count 
    display: inline-block;
    vertical-align: top;
    width: 12px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  

  .icon-add_circle 
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    background-color: $green;

</style>
