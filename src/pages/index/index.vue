<template>
	<div class="box">
		<div class='left'>

			<el-scrollbar style="height: 100%;">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#304156" text-color="#fff" style="min-height: 100%;">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">分组一</span>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">分组一</span>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item>
				</el-menu>

			</el-scrollbar>

		</div>
		<div class="right">
			<header style="height: 40px;width: 100%;border-bottom: 1px solid #CCCCCC;">
				<div style="width: 50px;height: 40px;cursor: pointer;" @click="openBtn">
					<i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" style="font-size: 24px;line-height: 40px;"></i>
				</div>
				<div class="bread">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>活动管理</el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<el-dropdown trigger="click" size="medium" style="height: 100%;" @command="handleCommand">
					<div style="cursor: pointer;" class="user">
						<el-avatar icon="el-icon-user-solid" size='small'></el-avatar>
						<span style="margin-left: 10px;">{{useName}}</span>
					</div>

					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item disabled>v2.4.0</el-dropdown-item>
						<el-dropdown-item divided>个人信息</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item command="/login">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

			</header>
			<div class="tab" style="width: 100%;">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户管理">用户管理 </el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>

				</el-tabs>
			</div>

		</div>
	</div>
</template>

<script>
	import CryptoJS from '@/utils/CryptoJS.js'
	export default {
		data() {
			return {
				isCollapse: false,
				activeName: 'second',
				useName: ''
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			openBtn() {
				this.isCollapse = !this.isCollapse
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},

			handleCommand(command) {
				this.$router.push(command);
			}
		},
		mounted() {
			this.useName = CryptoJS.decrypt(localStorage.getItem('useName'));
		}
	}
</script>
<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100vh;
		display: flex;

		.right {
			flex: 1;
			overflow-x: hidden;
			header {
				display: flex;
				align-items: center;
			}
		}
	}

	.left {
		height: 100%;
		overflow-y: auto;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 210px;
		min-height: 200px;
	}

	

	.bread {
		width: calc(100% - 150px);
		height: 40px;
	}

	.user {
		display: flex;
		align-items: center;
		width: 100px;
		height: 100%;
	}

	.user:hover {
		background: rgba(0, 0, 0, 0.025);
	}

	.bread>div {
		line-height: 40px;
	}

</style>
