import { AppMoviesPage } from './app.po';

describe('app-movies App', () => {
  let page: AppMoviesPage;

  beforeEach(() => {
    page = new AppMoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
