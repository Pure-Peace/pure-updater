<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{ title }}</text>
			<button type="primary" plain="true" style="margin:270upx 40upx 0 40upx;" @click="goToCheck()">我想check一下更新页面</button>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '嗨!'
			}
		},
		onLoad() {
      
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../update/index'
			})
		},
		methods: {
			goToCheck() {
				uni.navigateTo({url: '../update/index'})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
