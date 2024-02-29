import { TestBed } from '@angular/core/testing';

import { KniteProcessEditorService } from './knite-process-editor.service';

describe('KniteProcessEditorService', () => {
  let service: KniteProcessEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KniteProcessEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
