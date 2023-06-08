// container/top-menu/top-menu.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        toGoPage(event) {
            const path = event.currentTarget.dataset.type;
            wx.navigateTo({
                url: `/pages/${path}/${path}`,
            })
        }
    }
})