/**
 *@providesModule CommonListItem
 */

function CommonListItem(image,title,tipTitle,showArrow) {
    this.image = image;
    this.title = title;
    this.tipTitle = tipTitle;
<<<<<<< HEAD
=======
    //是否显示箭头
    this.hiddenArrow = showArrow;

    //item点击
    this.itemClick = null;

    //路由Screen
    this.routeScreen = null;
>>>>>>> 682506c7dee2c6311fdd8fb9a20bd0228bcd71c3
}

module.exports = CommonListItem;