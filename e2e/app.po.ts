export class PuppyLovePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('puppy-love-app h1')).getText();
  }
}
