import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppRoutingModule],
    }).compileComponents();
  });

  it('should load the default route to the PagesModule', () => {
    const routes = TestBed.inject(AppRoutingModule).routes;
    expect(routes).toContain({ path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) });
  });
});
