/**
 *@providesModule CommonListSwitch
 */

import CommonListItem from 'CommonListItem';

function CommonListSwitch(image,title) {
     CommonListItem.call(this,image,title);
     
     this.disabled = true;
     this.switchOnvalueChange = null;
     //switch 默认关
     this.switchIsOn = false
}

module.exports = CommonListSwitch;
