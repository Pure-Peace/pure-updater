export function checkUpdater(currentId, updaterPage) {
    uni.request({
        url: 'https://www.easy-mock.com/mock/5c95e1ac8e241c358386bc16/pure-updater/version/id',
        method: 'GET',
        data: {
            search: 'latestId'
        },
        success: res => {
            if (res.statusCode === 200) {
                const response = res.data
                const latestId = response.latest.id
                if (!latestId) {
                    console.log('当前没有发行版本')
                } else if (currentId != latestId) {
                    console.log('检测到更新')
                    uni.showModal({
                        title: '发现新版本',
                        content: '有新版本可用 (版本id:' + latestId + ')，请问您是否更新？',
                        success: (res) => {
                            if (res.confirm) {
                                uni.navigateTo({
                                    url: updaterPage
                                })										
                            } else if (res.cancel) {
                                console.log('取消')
                            }
                        }
                    })
                } else {
                    console.log('现在是最新版本')
                }      
            }
        }
    })
}