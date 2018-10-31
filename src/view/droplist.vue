<template>
  <div class="droplist">
    <div class="page-cell">
      <a class="mint-cell mint-cell-swipe" v-for="(item,index) of lists" :key="index">
        <div class="mint-cell-wrapper" @click="goto(index)">
          <div class="mint-cell-title">
            <span class="mint-cell-text" v-text="item.title"></span>
          </div> 
          <div class="mint-cell-value" style="font-size:13px"  v-text="item.content"></div> 
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lists:[
          {title:'红茶',content:'正山小种 | 祁门红茶 | 金骏眉'},
          {title:'绿茶',content:'龙井 | 猴魁 | 碧螺春 | 信阳毛尖'},
          {title:'乌龙茶',content:'铁观音 | 大红袍 | 肉桂'},
          {title:'黑茶',content:'熟茶 | 普洱 | 生茶'},
          {title:'白茶',content:'寿眉 | 贡眉 | 白牡丹 | 白豪银针'},
          {title:'花茶',content:'茉莉花茶 | 菊花 | 再加工类茶'},
          {title:'茶具',content:'紫砂壶 | 建盏 | 茶具套装'}
        ]
      };
    },
    methods: {
      goto(index){
        this.$router.push({name:'product',params:{id:index}})
      }
    }
  };

</script>
<style>
a{color: #fff;text-decoration: none;}
.droplist{position: absolute;top: 57px;left: 0;width: 100%;z-index: 10;transition: .5s all;overflow: hidden;}
.droplist .page-cell>a{background: #F2F2F2;}
.page-back{
    display: inline-block;
    position: absolute;
    top: -8px;
    left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
}
.page-back i{    font-size: 24px;
    line-height: 40px;}
.page-title{    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;}
</style>
