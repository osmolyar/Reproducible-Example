import BasePage  from  '../common/pageObjects/base.page' ;
import HomePageLocators  from '../locDefs/googleHome.locators';
import GoogleResultsPage  from './/googleResults.page';

class HomePage extends BasePage {

    constructor(validate=false) {
        super();
        if (validate===true)
            this.validatePageOpen();
    }

  get map() {
    return new HomePageLocators();
  };
  getPage(url) {
      browser.reloadSession();
    this.open(url);
      console.log('Setting viewport size');
      browser.setWindowSize(
          1500,
          800
      );
      // var windowSize = browser.windowHandleSize();
    return this;
  };

  search(Search='') {
      this.element.setValue(this.map.searchForm,Search);
      this.element.click(this.map.searchBtn);
      return new GoogleResultsPage(true);
  };

    getLucky(Search='') {
        this.element.setValue(this.map.searchForm,Search);
        this.element.click(this.map.iFeelLuckyBtn);
        return new GoogleResultsPage(true);
    };

   validatePageOpen() {
       assert.equal(browser.getTitle(), 'Google');
   };

}
export default HomePage;