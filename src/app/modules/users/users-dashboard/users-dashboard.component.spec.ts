import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UsersDashboardComponent } from './users-dashboard.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from '../services/users-service';
import { HttpService } from '../../../services/htp.service';

describe('UsersDashboardComponent', () => {
  let component: UsersDashboardComponent;
  let fixture: ComponentFixture<UsersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDashboardComponent],
      providers: [HttpClient, HttpHandler, HttpService, UserService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain gridoptions', async(() => {
    expect(component.gridOptions).toBeDefined();
  }));

  it('should contain columns', async(() => {
    expect(component.gridOptions.columns.length).toEqual(3);
  }));

  it('should contain userservice', () => {
    // Create a fake userService object with a `getUserPosts()` spy
    const userService = jasmine.createSpyObj('UserService', ['getUserPosts']);
    // Make the spy return a synchronous Observable with the test data
    const getQuoteSpy = userService.getUserPosts.and.returnValue();
    expect(getQuoteSpy.calls.any()).toBe(false);
  });

  it('should render call sorting method in a th tag', async(() => {
    spyOn(component, 'doSorting');
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('th');
    el.click(component.gridOptions.columns[0]);
    expect(component.doSorting).toHaveBeenCalled();
  }));

});

