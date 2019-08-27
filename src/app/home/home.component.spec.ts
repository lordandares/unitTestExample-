import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render p', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('home works!');
  });

  it('should click button', async(() => {
    spyOn(component, 'onEditButtonClick');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onEditButtonClick).toHaveBeenCalled();
    });
  }));

  it('should click button and render text', async(() => {
    spyOn(component, 'onEditButtonClick').and.callFake( function() {
      // return whatever you want to here
      component.text = 'hola';
  });

    let button = fixture.debugElement.nativeElement.querySelector('button');
    let divText = fixture.debugElement.query(By.css('.textDiv')).nativeElement;

    expect(divText.textContent.trim()).toEqual('');
    button.click();
    fixture.detectChanges();
    expect(component.onEditButtonClick).toHaveBeenCalled();
    expect(divText.textContent.trim()).toContain('hola');

  }));

});
