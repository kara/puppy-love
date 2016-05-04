import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PuppyLoveAppComponent } from '../app/puppy-love.component';

beforeEachProviders(() => [PuppyLoveAppComponent]);

describe('App: PuppyLove', () => {
  it('should create the app',
      inject([PuppyLoveAppComponent], (app: PuppyLoveAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'puppy-love works!\'',
      inject([PuppyLoveAppComponent], (app: PuppyLoveAppComponent) => {
    expect(app.title).toEqual('puppy-love works!');
  }));
});
