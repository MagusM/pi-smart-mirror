import { PiSmartMirrorPage } from './app.po';

describe('pi-smart-mirror App', () => {
  let page: PiSmartMirrorPage;

  beforeEach(() => {
    page = new PiSmartMirrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
