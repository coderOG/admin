<template>
	
	<div>
		<el-button type="success" @click="qrcode">生成二维码</el-button>
		<div id="qrcode" ></div>
	</div>
</template>

<script>
import QRCode  from "qrcodejs2"
export default {
	props: ["link"],
	components: {
		QRCode
	},
	data(){
		return {
			
		}
	},
	methods:{
		qrcode () {
		  $('#qrcode').html('');
		  let that = this;
		  let qrcode = new QRCode('qrcode', {
			  width: 124, 
			  height: 124,        // 高度
			  text:  this.link,   // 二维码内容
			  // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
			  // background: '#f0f',   // 背景色
			  // foreground: '#ff0'    // 前景色
		  })
		}
	},
	// mounted(){
	// 	this.$nextTick (function () {
	// 	   this.qrcode();
	// 	})
	// }
}
</script>


