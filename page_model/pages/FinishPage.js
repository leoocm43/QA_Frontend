import { Selector } from 'testcafe'

class FinishPage{
    constructor(){
        this.finishHeader = Selector('.subheader')  
    }
}

export default new FinishPage()