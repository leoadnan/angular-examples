import { AngularWithJqueryPage } from './app.po';

describe('angular-with-jquery App', () => {
  let page: AngularWithJqueryPage;

  beforeEach(() => {
    page = new AngularWithJqueryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
