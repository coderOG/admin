<template>
	<div class="imgBox clearfix">
		<div class="img-box" v-for="(url, index) in urls" :style="{'background-image': 'url(' + url + ')'}" :key="index">
	       <img preview="repairDetail" preview-text="" :src="url" alt="">
		</div>
	</div>

</template>

<script>
	export default {
		props: ["urls"]
	}
</script>

<style scoped>
.img-box{
	float: left;
	width: 30%;
	padding: 15%;
	margin: 1.65%;
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.img-box img{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
}
.clearfix:after{
	content:"";
	display:block;
	clear:both
}
</style>
<!-- npm install vue-photo-preview --save -->