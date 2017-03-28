import { browser, element, by } from 'protractor';

describe('Exerlog edit component', function() {
  beforeEach(() => {
  	browser.get('/edit/1');
  });

  let elem = element(by.css('app-edit')),
  	btn = element(by.css('button[type=submit]'));

  it('should find app-edit element tag', () => {
    expect(elem.isPresent()).toBeTruthy();
  });
  
  it('on clicking the submit button the success message should appear', () => {
    btn.click().then(function() {
      browser.waitForAngular();
      expect(element(by.css('.alert')).isPresent()).toBeTruthy();
    });
  });

  it('clicking the back button should take you to the home page', () => {
  	element(by.css('button[routerLink="/home"]')).click();
  	expect(browser.getCurrentUrl()).toContain('home');
  });

});