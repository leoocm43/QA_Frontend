import { Selector } from 'testcafe'

class CheckoutPage{
    constructor(){
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('.svg-inline--fa.fa-times-circle')
        this.firstnameField = Selector('#first-name')
        this.lastnameField = Selector('#last-name')
        this.zipField = Selector('#postal-code')
        this.overviewHeader = Selector('.subheader')
        this.selectedItem = Selector('#item_0_title_link').withText('Sauce Labs Bike Light')
        this.finishButton = Selector('.btn_action.cart_button')
        
    }
}

export default new CheckoutPage()