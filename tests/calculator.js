let homepage = require('../pages/homepage');

describe('demo calculator test',function(){
    let calcUrl = 'http://juliemr.github.io/protractor-demo/';

    it('addition test',function(){
        
       homepage.get(calcUrl);

       homepage.enterFirstNumber('1');
       homepage.enterSecondNumber('2');
       homepage.clickGo();
       homepage.verifyResult('3');
    
       browser.sleep(2000);

    });

    it('subtraction test',function(){
        
        homepage.get(calcUrl);
 
        homepage.enterFirstNumber('1');
        homepage.enterSecondNumber('2');
        homepage.clickGo1();
        homepage.verifyResult('4');
     
        browser.sleep(2000);
 
     });

});