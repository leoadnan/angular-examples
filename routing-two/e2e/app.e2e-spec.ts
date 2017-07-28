import { RoutingTwoPage } from './app.po';

describe('routing-two App', () => {
  let page: RoutingTwoPage;

  beforeEach(() => {
    page = new RoutingTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
