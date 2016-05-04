import { PuppyLovePage } from './app.po';

describe('puppy-love App', function() {
  let page: PuppyLovePage;

  beforeEach(() => {
    page = new PuppyLovePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('puppy-love works!');
  });
});
