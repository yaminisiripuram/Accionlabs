import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockAppRouter
      ],
      providers: [{ provide: Router, useClass: RouterStub },
      { provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Accion Labs');
  }));


});

@Component({ selector: 'router-outlet', template: '<div></div>' })
class MockAppRouter { }


class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}
class ActivatedRouteStub {
  navigateByUrl(url: string) {
    return url;
  }
}