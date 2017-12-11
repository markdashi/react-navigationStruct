/**
 * @providesModule CommonSwitchItem
 */

import CommonListItem from 'CommonListItem'

function CommonSwitchItem(image,title) {

    CommonListItem.call(this,image,title);

    this.disabled = true;
    this.switchOnvalueChange = null;
    //switch 默认关
    this.switchIsOn = false
}
module.exports = CommonSwitchItem;