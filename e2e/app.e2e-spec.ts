import { TouchPage } from './app.po';

describe('touch App', () => {
  let page: TouchPage;

  beforeEach(() => {
    page = new TouchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
