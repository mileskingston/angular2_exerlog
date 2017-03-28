import { browser, element, by } from 'protractor';

describe('Exerlog new component', function() {
  beforeEach(() => {
  	browser.get('/new');
  });

  let elem = element(by.css('app-new')),
    btn = element(by.css('button[type=submit]')), 
    input = element(by.css('input[type=text]'));
  
  it('should find app-new element tag', () => {
    expect(elem.isPresent()).toBeTruthy();
  });

  it('the submit button should be disabled', () => {
    expect(element(by.css('button[type=submit]')).isEnabled()).toBe(false);
  });
  
  it('on clicking the submit button the success message should not appear', () => {
    btn.click().then(function() {
      browser.waitForAngular();
      expect(element(by.css('.alert')).isPresent()).toBeFalsy();
    });
  });

  it('on clicking back button I should go back to the home page', () => {
  	element(by.css('button[routerLink="/home"]')).click();
  	expect(browser.getCurrentUrl()).toContain('home');
  });

  it('on filling in the input the submit button should be enabled', () => {
    input.sendKeys('testing');
    expect(btn.isEnabled()).toBe(true);
  });

  it('on filling in the input and clicking the submit button a success message should appear', () => {
    input.sendKeys('testing');
    btn.click().then(function() {
      browser.waitForAngular();
      expect(element(by.css('.alert')).isPresent()).toBeTruthy();
    });
  });
});