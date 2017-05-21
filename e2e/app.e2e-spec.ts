import { ComputertimePage } from './app.po';

describe('computertime App', () => {
  let page: ComputertimePage;

  beforeEach(() => {
    page = new ComputertimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
