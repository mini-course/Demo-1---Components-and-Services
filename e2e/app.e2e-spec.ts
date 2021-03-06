import { Project1Page } from './app.po';

describe('project1 App', () => {
  let page: Project1Page;

  beforeEach(() => {
    page = new Project1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
