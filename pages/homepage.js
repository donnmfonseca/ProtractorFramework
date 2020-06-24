let homepage = function(){

    let inputOne_input = element(by.model('first'));
    let inputTwo_input = element(by.model('second'));
    let goBtn_btn = element(by.css('[ng-click="doAddition()"]'));
    

    this.get = function(url){
        browser.get(url)
    }

    this.enterFirstNumber = function(firstNo){
        inputOne_input.sendKeys(firstNo);
    }

    this.enterSecondNumber = function(secondNo){
        inputTwo_input.sendKeys(secondNo);
    }

    this.clickGo = function(){
        goBtn_btn.click();
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result))
        expect(output.getText()).toBe(result)
    }
};

module.exports = new homepage();