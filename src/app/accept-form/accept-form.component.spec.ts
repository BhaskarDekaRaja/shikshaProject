import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AcceptFormComponent } from './accept-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule, FormBuilder,FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { AppModule } from '../app.module';

describe('AcceptFormComponent', () => {
  let component: AcceptFormComponent;
  let fixture: ComponentFixture<AcceptFormComponent>;

  beforeEach(async(() => {
    // const formBuilder = { group: object1 => ({}) };
    TestBed.configureTestingModule({
      declarations: [ AcceptFormComponent ],
      imports:[
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MatCommonModule,
        // AppModule
      ],
      providers: [
        // reference the new instance of formBuilder from above
        // { provide: FormBuilder,FormArray, useValue: formBuilder }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
