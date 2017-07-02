import { ShoppingListNRecipesPage } from './app.po';

describe('shopping-list-n-recipes App', () => {
  let page: ShoppingListNRecipesPage;

  beforeEach(() => {
    page = new ShoppingListNRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
