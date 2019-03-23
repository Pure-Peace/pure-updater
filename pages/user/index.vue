<template>
	<view class="content">
		<view class="hi">
            <text class="title">{{ title }}</text>
			<text class="title">这是您的用户界面</text>
			<text class="title">\n\n它现在空空如也</text>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '您好！'
			}
		},
		onLoad() {
			console.log('首页')
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../update/index'
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .hi{
        margin-top: 375upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
