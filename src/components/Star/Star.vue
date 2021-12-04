<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(item,index) in starClass" :class="item" :key="index"></span>
  </div>

  
</template>
<script>
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';
export default { 
    props:{
        size:Number,
        score:Number
    },
    computed:{
        /* 计算方法
        分数： 全星+半星+灰星
        3.5 ： 3 + 1 + 1
        3.2 ： 3 + 0 + 2
        */
        starClass(){
            const {score} = this
            let starList = []
            //向starList中添加n个on
            let zsScore = Math.floor(score)//取整数
            for (let i = 0; i < zsScore; i++) {
                starList.push(CLASS_ON)   
            }
            //向starList中添加1/0个half
            if(score*10 - zsScore*10 >= 5){//小数减法可能损失精度，都*10化整
                starList.push(CLASS_HALF)
            }
            //向starList中添加n个off
            while(starList.length <5){
                starList.push(CLASS_OFF)
            }
            return starList
        }
    }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl';
 &.star-48 {
                  .star-item {
                    width: 20px;
                    height: 20px;
                    margin-right: 22px;
                    background-size: 20px 20px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star48_on');
                    }

                    &.half {
                      bg-image('./images/stars/star48_half');
                    }

                    &.off {
                      bg-image('./images/stars/star48_off');
                    }
                  }
                }

                &.star-36 {
                  .star-item {
                    width: 15px;
                    height: 15px;
                    margin-right: 6px;
                    background-size: 15px 15px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star36_on');
                    }

                    &.half {
                      bg-image('./images/stars/star36_half');
                    }

                    &.off {
                      bg-image('./images/stars/star36_off');
                    }
                  }
                }

                &.star-24 {
                  display: inline-flex !important
                  .star-item {
                    width: 10px;
                    height: 10px;
                    margin-right: 3px;
                    background-size: 10px 10px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star24_on');
                    }

                    &.half {
                      bg-image('./images/stars/star24_half');
                    }

                    &.off {
                      bg-image('./images/stars/star24_off');
                    }
                  }
                }
</style>