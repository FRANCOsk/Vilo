import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    const component = new AppComponent();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'login'`, () => {
    const component = new AppComponent();
    expect(component.title).toEqual('login');
  });
});
