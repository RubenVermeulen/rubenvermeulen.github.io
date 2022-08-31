import { TestBed } from '@angular/core/testing';
import { AppViewComponent } from './app-view.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppViewComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppViewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
