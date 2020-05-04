<template>
	<div style="width: 100%;">
		<img src="@/assets/img/sci.gif" style="position: absolute;top: 20px;right: 20px;"/>
		<div id="logo">
			<h1 class="hogo" style="top:15vh;"><i> STARK INDUSTRIES</i></h1>
		</div>
		<section class="stark-login">
			<form action="" method="" style="margin-top: 33vh;">
				<div id="fade-box">
					<input type="text"  id="username" placeholder="Username"  v-model="formLabelAlign.useName" autocomplete="off">
					<input type="password" placeholder="Password"  v-model="formLabelAlign.password">
		
					<button @click.prevent='btn' >Log In</button>
				</div>
			</form>
			<div class="hexagons" style="top: 52vh;">
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
		
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
			</div>
		</section>
		
		<div id="circle1" style="top: 8vh;">
			<div id="inner-cirlce1">
				<h2> </h2>
			</div>
		</div>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>
<script>
	import CryptoJS from '@/utils/CryptoJS.js'
	
	export default {
	    data() {
	      return {
	        formLabelAlign: {
	          useName: '',
	          password: ''
	        },
			checked: true //是否选中记住密码 true为选中
	      };
	    },
		methods:{
			btn(){
				if(this.formLabelAlign.useName==''){
					if(document.getElementsByClassName('el-message').length === 0) {
						this.$message({
						  showClose: true,
						  message: '请输入用户名',
						  type: 'warning'
						});
					}
					return;
				}
				if(this.formLabelAlign.password==''){
					if(document.getElementsByClassName('el-message').length === 0) {
						this.$message({
						  showClose: true,
						  message: '请输入密码',
						  type: 'warning'
						});
					}
					return;
				}
				localStorage.removeItem("useName");
				let encryName = CryptoJS.encrypt(this.formLabelAlign.useName);
				localStorage.setItem("useName",encryName);
				this.$router.push({ path: '/index' });
				
			},
		},
		mounted(){
			$('html') .css("background-color","#000");
		},
		destroyed () {
		    $('html') .css("background-color","#fff");
		 },
	  }
</script>
<style scoped>

	#login{
		width: 100%;
		height: 100%;
		/* margin: 24vh auto; */
		border: 1px solid #CCCCCC;
		padding: 50px 100px;
	}
</style>

