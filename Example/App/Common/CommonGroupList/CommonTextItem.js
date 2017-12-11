/**
 * @providesModule CommonTextItem
 */

import CommonListItem from 'CommonListItem'

function CommonTextItem(title,tipTitle,showArrow) {

    CommonListItem.call(this,'',title,tipTitle,showArrow);
}

module.exports =  CommonTextItem;