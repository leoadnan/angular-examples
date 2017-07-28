import { GithubProfileSearcherPage } from './app.po';

describe('github-profile-searcher App', () => {
  let page: GithubProfileSearcherPage;

  beforeEach(() => {
    page = new GithubProfileSearcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
