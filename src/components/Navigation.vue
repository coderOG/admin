<template>
  <div class="FloorNavigation">
    <div class="CenterFixed">
      <ul>
        <li style="line-height: 36px;">导航</li>
        <li v-for="(item,index) in FixedNavigation" :key='index'
            v-html="item.name"
            @click="rightFixed(index)"
            v-bind:key="index"></li>
        <li class="goTop"
            @click="goTop">返回顶部</li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  props: ["FixedNavigation"],
  data() {
    return {
		heightArr:[]
	};
  },
  mounted() {
	 let className=[];
	 for(let i=0;i<this.FixedNavigation.length;i++){
		 className.push(this.FixedNavigation[i].class);
	 } 
	  for(let i=0;i<className.length;i++){
		  this.heightArr.push( $('.'+className[i])[0].offsetTop ) 
	  }
	  this.heightArr.push($('.'+className[className.length-1])[0].offsetTop +$('.'+className[className.length-1])[0].offsetHeight);
	  $(".FloorNavigation ul li:nth-child(2)").addClass("fixedLiActive");
      window.addEventListener("scroll", this.myScroll);
  },
//解决其他页面未使用报错的bug
  destroyed() {
    window.removeEventListener("scroll", this.myScroll);
  },
  methods: {
    rightFixed(index) {
      
      let topVal = this.heightArr[index];
      $("body,html").animate({ scrollTop: topVal }, 1000);
    },
    goTop() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
    },
    myScroll() {
      this.bodyScroll = $(window).scrollTop();
      // console.log(this.bodyScroll);
      let fixedLi = $(".FloorNavigation ul li");
      let goTopButton = $(".goTop");
	  
	  
      if (this.bodyScroll <= this.heightArr[1] - 100) {
        goTopButton.fadeOut(300).css("display", "none");
      } else {
        goTopButton.fadeIn(300).css("display", "block");
      }
	  
	 function find(array,val){
		if(val  <   Math.min.apply(null,array)){
			return 0;
		};
		if(val  >   Math.max.apply(null,array)){
			return array.length-1;
		};
		var idx =   0,
			i   =   0,
			j   =   array.length;
		for(;i<j;i++){
			if(array[i] > val){
				idx = i;
				break;
			};
		};
		return idx;
	 };
	 let idx= find(this.heightArr,this.bodyScroll);

	 fixedLi
	  .eq(idx)
	  .addClass("fixedLiActive")
	  .siblings()
	  .removeClass("fixedLiActive");

    }
  }
};
</script>
<style  lang="scss" scoped>
.FloorNavigation {
  width: 38px;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 40px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .CenterFixed {
    ul {
      width: 38px;
      span {
        display: block;
        width: 38px;
        height: 38px;
        background: #93abc2;
        text-align: center;
        margin-top: 5px;
        color: white;
        line-height: 38px;
      }
      li {
        width: 44px;
        height: 44px;
        padding: 5px;
        background: #93abc2;
        text-align: center;
        margin-top: 1px;
        color: white;
        word-wrap: break-word;
        line-height: 18px;
        overflow: hidden;
        cursor: pointer;
      }
    }
    li:hover {
      background-color: #505f6e;
    }
    li:first-child {
      background-color: #f9a101;
      cursor: text;
    }
    li:first-child:hover {
      background-color: #f9a101;
    }
    li:last-child {
      background-color: #a7a8a8;
    }
    li:last-child:hover {
      background-color: #a7a8a8;
    }
  }
}
.fixedLiActive {
  background-color: #505f6e !important;
}
.goTop {
  display: none;
}
</style>
