import { MyProjPage } from './app.po';

describe('my-proj App', () => {
  let page: MyProjPage;

  beforeEach(() => {
    page = new MyProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
