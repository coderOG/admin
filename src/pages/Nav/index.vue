<template>
  <div class="FundProductsMoneyDetails">
    
	<div id="con">
		<div class="AllStyle tab1" >基金资料
			<ewCode  :link="link" />
		</div>
		<div class="AllStyle tab2" >业绩表现</div>
		<div class="AllStyle tab3" >风险概述</div>
		<div class="AllStyle tab4" >收益统计</div>
		<div class="AllStyle tab5" >在险价值</div>
		<div class="AllStyle tab6"  style="height: 1000px;">资产概览
		
			<ul>
				<li v-for="(item ,index) in lists" :key='index'>
					<input type="checkbox" v-model="item.check" @click="btn(index)">
				</li>
			</ul>
		
			<br>全选<input type="checkbox"  v-model='checkAll' @click="checkBtn">
		
		</div>
		
	</div>
	
    <!-- 左侧楼层导航 -->
    <fixedRight :FixedNavigation="FloorNavigation"></fixedRight>
	 
	<imgPreview :urls="urls" />  
  </div>

</template>
<script>
import fixedRight from '@/components/Navigation.vue'   //楼层跳跃
import ewCode from '@/components/ewCode.vue'       //生成二维码
import imgPreview from '@/components/ImgPreview.vue'   //图片查看
export default {
  components: {
    fixedRight,
	ewCode,
	imgPreview
  },
  data() {
    return {
      // 楼层上显示的文字，灵活控制
      FloorNavigation: [
		{
			name: "基金资料",
			class:'tab1'
		},
		{
			name: "业绩表现",
			class:'tab2'
		},
		{
			name: "风险概述",
			class:'tab3'
		},
		{
			name: "收益统计",
			class:'tab4'
		},
		{
			name: "在险价值",
			class:'tab5'
		},
		{
			name: "资产概览",
			class:'tab6'
		}
      ],
	  lists:[
		{check:false},
		{check:true},
		{check:false},
		{check:false},
		{check:true}
	  ],
	  checkAll:false,
	  urls: [
	      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
	      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
	      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
	      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
	      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
	      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
	      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
	    ],
	  
	  link: 'https://baidu.com'
	};
  },
  methods: {
	  checkBtn(){
		  for(var i=0;i<this.lists.length;i++){
			  this.lists[i].check = !this.checkAll;
		  }
	  },
	  btn(index){
		 this.lists[index].check = ! this.lists[index].check
		 this.checkAll = this.lists.every(item => {return item.check})
	  }

  }

};
</script>
<style   lang="scss" scoped>
.FundProductsMoneyDetails {
  width: 1200px;
  margin: 0 auto;
  .AllStyle{
    width:100%;
    height:600px;
    border:1px solid red;
  }
  }


</style>

