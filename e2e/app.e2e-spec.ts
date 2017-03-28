import { browser, element, by } from 'protractor';

describe('Exerlog App component', function() {
  beforeEach(() => {
  	browser.get('/');
  });

  it('should find app-root element tag', () => {
    let elem = element(by.css('app-root'));
    expect(elem.isPresent()).toBeTruthy();
  });

  it('clicking the menu button should open the navigation', () => {
  	element(by.css('.btn-menu')).click();
		expect(element(by.css('header.open')).isPresent()).toBe(true);	  
  });

  // expect home link to go to home page
  // expect new link to go to new page
});