import {Selector} from 'testcafe'

class CartPage{
    constructor(){
       this.cartPageTitle = Selector('.subheader')
       this.singleItem = Selector('.btn_primary.btn_inventory').nth(1)
       this.singleItemName = Selector('.inventory_item_name')
       this.checkoutButton = Selector('.btn_action.checkout_button')
       this.cartItem1 = Selector('#item_4_title_link')
       this.cartItem2 = Selector('#item_1_title_link')
       this.cartItem3 = Selector('#item_5_title_link')
    }
}
export default new CartPage()