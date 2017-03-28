import { browser, element, by } from 'protractor';

describe('Exerlog home component', function() {
  beforeEach(() => {
  	browser.get('/home');
  });

  it('should find home-app element tag', () => {
    let elem = element(by.css('app-home'));
    expect(elem.isPresent()).toBeTruthy();
  });

  it('on clicking add button I should go to the new page', () => {
  	element(by.css('button[routerLink="/new"]')).click();
  	expect(browser.getCurrentUrl()).toContain('new');
  });

  it('on clicking edit button I should go an edit page', () => {
    element(by.css('.btn-edit')).click();
    expect(browser.getCurrentUrl()).toContain('edit');
  });

  // clicking the delete button
});