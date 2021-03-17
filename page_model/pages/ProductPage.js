import {Selector} from 'testcafe'

class ProductPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.cartButton= Selector('.svg-inline--fa.fa-shopping-cart')
        this.item1 = Selector('.btn_primary.btn_inventory').nth(0)
        this.item2 = Selector('.btn_primary.btn_inventory').nth(2)
        this.item3 = Selector('.btn_primary.btn_inventory').nth(1)
    }
}

export default new ProductPage()