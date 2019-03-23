<script>
	// 引入检查更新模块
	import { checkUpdater } from '@/common/checkUpdater'
	export default {
		onLaunch: function () {			
			console.log('App Launch')
			// app打开时先检查是否有更新记录（更新记录会被保存在storage中）
			// 更新记录的内容为 { 更新标记, 安装包位置 }
			// 如果存在更新记录则删除上次使用过的安装包，达到存储释放空间的目的

			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary') //竖屏正方向锁定

			const updated = uni.getStorageSync('updated') // 尝试读取storage

			if (updated.completed === true) { // 如果上次刚更新过
				// 删除安装包及安装记录
				uni.removeSavedFile({ 
					filePath: updated.packgePath,
					success: (res) => {
						uni.removeStorageSync('updated')
					}
				})
			}
			// 检查更新，参数：{ 当前版本号，跳转到更新页面的url }
			checkUpdater(this.$current.id, '../update/index') 
			// #endif
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
