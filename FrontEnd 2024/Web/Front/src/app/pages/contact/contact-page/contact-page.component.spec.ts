import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPageComponent } from './contact-page.component';
import { Component } from '@angular/core';

// Mocks para los componentes hijos

@Component({
  selector: 'app-contact-info',
  template: ''
})
class ContactInfoComponentStub {}

@Component({
  selector: 'app-contact-form',
  template: ''
})
class ContactFormComponentStub {}

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactPageComponent,
        ContactInfoComponentStub,
        ContactFormComponentStub
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});