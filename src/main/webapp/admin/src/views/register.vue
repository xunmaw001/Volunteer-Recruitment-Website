<template>
  <div>
        <canvas id="canvas" style="background:#eee"></canvas>
        <div class="container">
      <div class="login-form">
        <h1 class="h1">志愿者招募网站注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm">
			<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">学号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.xuehao" class="input" type="text" placeholder="学号">
			   </div>
			 </div> -->
			<el-form-item label="学号" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.xuehao" autocomplete="off" placeholder="学号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.xingming" class="input" type="text" placeholder="姓名">
			   </div>
			 </div> -->
			<el-form-item label="姓名" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.xingming" autocomplete="off" placeholder="姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">所在学院</div>
			   <div class="input-container">
			     <input v-model="ruleForm.suozaixueyuan" class="input" type="text" placeholder="所在学院">
			   </div>
			 </div> -->
			<el-form-item label="所在学院" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.suozaixueyuan" autocomplete="off" placeholder="所在学院"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<el-form-item label="邮箱" class="input send-code" v-if="tableName=='yonghu'">
			  <el-input style="width: auto;line-height: initial;" v-model="ruleForm.email" autocomplete="off" placeholder="邮箱"/>
			  <el-button v-if="isEndFlag" type="success" class="register-code" @click="sendemailcode()">发送验证码</el-button>
			  <el-button v-if="!isEndFlag" type="success" class="register-code" disabled="disabled">{{SecondToDate}}</el-button>
			</el-form-item>
			<el-form-item label="验证码" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="emailcode" autocomplete="off" placeholder="验证码"/>
			</el-form-item>
			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">组织编号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhibianhao" class="input" type="text" placeholder="组织编号">
			   </div>
			 </div> -->
			<el-form-item label="组织编号" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.zuzhibianhao" autocomplete="off" placeholder="组织编号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<el-form-item label="确认密码" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
			</el-form-item>

			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">组织名称</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zuzhimingcheng" class="input" type="text" placeholder="组织名称">
			   </div>
			 </div> -->
			<el-form-item label="组织名称" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.zuzhimingcheng" autocomplete="off" placeholder="组织名称"  />
			</el-form-item>
			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">隶属学院</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lishuxueyuan" class="input" type="text" placeholder="隶属学院">
			   </div>
			 </div> -->
			<el-form-item label="隶属学院" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.lishuxueyuan" autocomplete="off" placeholder="隶属学院"  />
			</el-form-item>
			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">负责人</div>
			   <div class="input-container">
			     <input v-model="ruleForm.fuzeren" class="input" type="text" placeholder="负责人">
			   </div>
			 </div> -->
			<el-form-item label="负责人" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.fuzeren" autocomplete="off" placeholder="负责人"  />
			</el-form-item>
			<!-- <div v-if="tableName=='zhiyuanzuzhi'" class="input-group">
			   <div class="label">联系电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxidianhua" class="input" type="text" placeholder="联系电话">
			   </div>
			 </div> -->
			<el-form-item label="联系电话" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="ruleForm.lianxidianhua" autocomplete="off" placeholder="联系电话"  />
			</el-form-item>
			<el-form-item label="邮箱" class="input send-code" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input style="width: auto;line-height: initial;" v-model="ruleForm.email" autocomplete="off" placeholder="邮箱"/>
			  <el-button v-if="isEndFlag" type="success" class="register-code" @click="sendemailcode()">发送验证码</el-button>
			  <el-button v-if="!isEndFlag" type="success" class="register-code" disabled="disabled">{{SecondToDate}}</el-button>
			</el-form-item>
			<el-form-item label="验证码" class="input" v-if="tableName=='zhiyuanzuzhi'">
			  <el-input v-model="emailcode" autocomplete="off" placeholder="验证码"/>
			</el-form-item>
			<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>

import canvasBg from "@/assets/js/canvas-bg-2.js";
import "@/assets/css/canvas-bg-2.css"

export default {
  data() {
    return {
      ruleForm: {
      },
      tableName:"",
      rules: {},
	// 倒计时时间
	count: 60,
	// 倒计时定时器
	inter: null,
	// 倒计时是否结束
	isEndFlag: true
    };
  },
  computed: {
    SecondToDate: function() {
      var time = this.count;
      if (null != time && "" != time) {
  		  time = parseInt(time) + "秒后重发";
      }
      return time;
    }
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
        this.$nextTick(() => {
      canvasBg()
    })
      },
  created() {
    
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
	sendemailcode() {
		if(!this.ruleForm.email){
		  this.$message.error(`邮箱不能为空`);
		  return
		}
		if(this.ruleForm.email&&(!this.$validate.isEmail(this.ruleForm.email))){
		  this.$message.error(`请输入正确的邮箱格式`);
		  return
		}
		this.isEndFlag = false;
		var _this = this;
		this.inter = window.setInterval(function() {
		    _this.count = _this.count - 1;
		    if (_this.count <= 0) {
		      window.clearInterval(_this.inter);
		      _this.isEndFlag = true;
			  _this.count=60;
		    }
		}, 1000);
		this.$http({
		  url: `${this.tableName}/sendemail?email=`+this.ruleForm.email,
		  method: "get",
		  params: {}
		}).then(({ data }) => {
		  if (data && data.code === 0) {
			  this.$message.success(`发送成功`);
		  } else {
			  this.$message.error(`服务器异常，请稍后重试`)
		  }
		});
	},
    // 注册
    login() {
	var url=this.tableName+"/register";
      if((!this.ruleForm.xuehao) && `yonghu` == this.tableName){
        this.$message.error(`学号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `yonghu` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
        this.$message.error(`姓名不能为空`);
        return
      }
      if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`yonghu` == this.tableName && this.ruleForm.email&&(!this.$validate.isEmail(this.ruleForm.email))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if(`yonghu` == this.tableName ){
        url=this.tableName+"/register?emailcode="+this.emailcode;

            if(this.ruleForm.email&&(!this.$validate.isEmail(this.ruleForm.email))){
                this.$message.error(`请输入正确的邮箱格式`);
                return
        }
      }
      if((!this.emailcode) && `yonghu` == this.tableName){
	    this.$message.error(`验证码不能为空`);
	    return
      }
      if((!this.ruleForm.zuzhibianhao) && `zhiyuanzuzhi` == this.tableName){
        this.$message.error(`组织编号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `zhiyuanzuzhi` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((this.ruleForm.mima!=this.ruleForm.mima2) && `zhiyuanzuzhi` == this.tableName){
	    this.$message.error(`两次密码输入不一致`);
	    return
      }
      if((!this.ruleForm.zuzhimingcheng) && `zhiyuanzuzhi` == this.tableName){
        this.$message.error(`组织名称不能为空`);
        return
      }
      if(`zhiyuanzuzhi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }
      if(`zhiyuanzuzhi` == this.tableName && this.ruleForm.email&&(!this.$validate.isEmail(this.ruleForm.email))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if(`zhiyuanzuzhi` == this.tableName ){
        url=this.tableName+"/register?emailcode="+this.emailcode;

            if(this.ruleForm.email&&(!this.$validate.isEmail(this.ruleForm.email))){
                this.$message.error(`请输入正确的邮箱格式`);
                return
        }
      }
      if((!this.emailcode) && `zhiyuanzuzhi` == this.tableName){
	    this.$message.error(`验证码不能为空`);
	    return
      }
      this.$http({
        url: url,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}

	.container {
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
    
		.login-form {
			right: 50%;
			top: 50%;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			font-size: 14px;
			font-weight: 500;
      box-sizing: border-box;

			width: 400px;
			height: auto;
			padding: 15px;
			margin: 0 auto;
			border-radius: 20px;
			border-width: 5px;
			border-style: solid;
			border-color: rgba(78, 75, 75, 0.98);
			background-color: rgba(52, 67, 81, 0.63);
			box-shadow: 0 0 0px rgba(255,0,0,.1);

			.h1 {
				width: 80%;
				height: auto;
				line-height:auto;
				color: rgba(255, 255, 255, 1);
				font-size: 28px;
				padding: 0;
				margin: 0 auto;
				border-radius: 0;
				border-width: 0;
				border-style: solid;
				border-color: rgba(255,0,0,0);
				background-color: rgba(255,0,0,0);
				box-shadow: 0 0 6px rgba(255,0,0,0);
				text-align: center;
			}

			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

        .el-form-item {
          width: 100%;
          display: flex;

          & /deep/ .el-form-item__content {
            flex: 1;
            display: flex;
          }
        }

				.input {
          width: 90%;
          height:auto;
          padding: 0;
          margin: 0 10px 10px 10px;
          border-radius: 0;
          border-width: 0;
          border-style: solid;
          border-color: rgba(255,0,0,0);
          background-color: rgba(255,0,0,0);
          box-shadow: 0 0 6px rgba(255,0,0,0);

					& /deep/ .el-form-item__label {
            width: 70px;
            line-height:40px;
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            padding: 0 10px 0 0;
            margin: 0;
            border-radius: 0;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            background-color: rgba(255,0,0,0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
					}

					& /deep/ .el-input__inner {
            width: 100%;
            height: 40px;
            line-height:40px;
            color: rgba(55, 55, 55, 1);
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 4px;
            border-width: 1px;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
					}
				}

        .send-code {
          & /deep/ .el-input__inner {
            width: 180px;
            height: 40px;
            line-height:40px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 0;
            border-width: 1;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
          }

          .register-code {
            margin: 0;
            padding: 0;
            width: 74px;
            height: 39px;
            line-height:39px;
            color: #fff;
            font-size: 14px;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            border-radius: 5px;
            background-color: rgba(250, 212, 0, 1);
            box-shadow: 0 0 0px rgba(255,0,0,0);
          }
        }

				.btn {
					margin: 0 10px;
          padding: 0;
					width: 88px;
					height: 44px;
          line-height:44px;
					color: #fff;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(255, 255, 255, 1);
					border-radius: 4px;
					background-color: rgba(250, 212, 0, 1);
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

				.close {
          margin: 0 10px;
          padding: 0;
          width: 88px;
          height: 44px;
          line-height:44px;
          color: rgba(14, 14, 14, 1);
          font-size: 14px;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          background-color: #FFF;
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

			}
		}
	}
</style>
