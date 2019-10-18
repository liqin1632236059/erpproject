<template>
<div>
	<el-container  style='height:95vh; border: 1px solid #eee'>
		 <el-header style='height:10%'>头部Log</el-header>
		    <el-container>
		 <el-aside style='height:100%'>
		{{`欢迎${this.$store.getters.getUsers.username}用户`}}
			 <el-menu :router="true"
				default-active="2"
				class="el-menu-vertical-demo">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-user"></i>
                        <span>会员管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="1-1" @click="redirectPage('/index/users')">
							<i class="el-icon-user"></i>
                            <span>会员管理</span>
						</el-menu-item>
						<el-menu-item index="1-2" @click="goToUrl('/index/addManager')">
						<i class="el-icon-user"></i>
                            <span>添加管理员</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-refrigerator"></i>
						<span slot="title">商品管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1" @click="goToUrl('/index/product')">
							<i class="el-icon-user"></i>
                            <span>商品管理</span>
						</el-menu-item>
						<el-menu-item index="2-2" @click="goToUrl('/index/addProduct')">
							<i class="el-icon-user"></i>
                            <span>添加商品</span>
						</el-menu-item>
						<el-menu-item index="2-3" @click="goToUrl('/index/listProduct')">
							<i class="el-icon-user"></i>
                            <span>商品信息搜索</span>
						</el-menu-item>
					</el-menu-item-group>
					</el-submenu>
					   <el-menu-item index="3" @click="loginOut">
							<i class="el-icon-menu"></i>
							<span slot="title">退出登录</span>
						</el-menu-item>
				</el-menu>	
		 </el-aside>
		 <el-main>
			  <router-view />
		 </el-main>
		    </el-container>
		 <el-footer style='height:10%'>底部Log</el-footer>
	</el-container>
	
</div>
</template>
<script>
export default {
    methods: { 
		goToUrl(url){
			this.$router.push(url);
		},
		redirectPage(path){
			this.$router.push(`${path}/${Math.random()}`);
		},
		changeVal(){
			//同步设置【非常重要】
			this.$store.commit('setUsers',{userName:'sa',userPwd:'123'});
		},
		loginOut(){
			if(this.$store.getters.getToken!=""){
				this.$store.commit('setToken',"");
				this.$router.push('/');
			}
		}
     
    }
 }

</script>
<style scoped>
.el-header,
.el-footer {
    background: gainsboro;
    font-size: 30px;
}
.el-menu {
    border: 0px;
}
</style>
