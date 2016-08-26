import { ClassTimeTablePage } from './app.po';

describe('class-time-table App', function() {
  let page: ClassTimeTablePage;

  beforeEach(() => {
    page = new ClassTimeTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
