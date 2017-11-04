import { ReduxApp1Page } from './app.po';

describe('redux-app1 App', () => {
  let page: ReduxApp1Page;

  beforeEach(() => {
    page = new ReduxApp1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
