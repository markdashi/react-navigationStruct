/**
 *@providesModule CommonListItem
 */

function CommonListItem(image,title,tipTitle,showArrow) {
    this.image = image;
    this.title = title;
    this.tipTitle = tipTitle;

    //是否显示箭头
    this.hiddenArrow = showArrow;

    //item点击
    this.itemClick = null;

    //路由Screen
    this.routeScreen = null;

    //自定义样式
    this.customItemTipStyle = {};
}

module.exports = CommonListItem;