import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KniteProcessEditorComponent } from './knite-process-editor.component';

describe('KniteProcessEditorComponent', () => {
  let component: KniteProcessEditorComponent;
  let fixture: ComponentFixture<KniteProcessEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KniteProcessEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KniteProcessEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
