import { C01TheBasicsPage } from './app.po';

describe('c01-the-basics App', () => {
  let page: C01TheBasicsPage;

  beforeEach(() => {
    page = new C01TheBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
