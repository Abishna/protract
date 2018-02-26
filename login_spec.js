
// spec.js
describe('NBL Login Validation: ', function() {
	browser.ignoreSynchronization=true;
    browser.waitForAngularEnabled(false); 
	
	it('Open the Login page', function() { 
	browser.driver.manage().window().maximize();
    browser.get('https://msmecor.com/app/account#/login'); 
	browser.sleep(2000)
    var loginPageTitle= browser.getTitle();
    expect(loginPageTitle).toEqual('MSM eCOR');
	console.log('Successfully opens the Login page');
	});

it('Login With Valid Data', function() { 

    element(by.id('username')).sendKeys('nbl'); 
    element(by.id('password')).sendKeys('msm12!!2017');
    element(by.css('.acc-btn')).click();
	browser.sleep(5000)
	var title=element(by.xpath('/html/body/div/div/div/div[2]/div/div[1]/div[1]'));
    expect(title.getText()).toEqual('NBL Main Dashboard (Beta)');  		
	console.log('Successfully logs into the application');
	element(by.xpath('/html/body/div/div/div/div/div[3]/div/span')).click();
	browser.sleep(5000)
	element(by.xpath('/html/body/data-menu/div/div/div/div/div[5]/div/div[1]')).click();
	browser.sleep(6000)
	var loginPageText=element(by.xpath('/html/body/div/div/div/div[2]/div[1]/div/div[1]')); 
    expect(loginPageText.getText()).toEqual('MSM eCOR');
	console.log('Successfully logs out the application');
 });
 
  it('Login With Invalid Data', function() { 

    element(by.id('username')).sendKeys('nbl'); 
    element(by.id('password')).sendKeys('nbl');
    element(by.css('.acc-btn')).click();
	browser.sleep(10000)
   	var errorMessage=element(by.xpath('/html/body/div/div/div/div[2]/div[2]/div/div[3]'));
    expect(errorMessage.getText()).toEqual('Wrong user name and/or password. Please try again'); 		
	console.log('Error message is displayed successfully');
 });
 
  
});