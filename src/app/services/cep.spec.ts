import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CepService } from './cep';
describe('CepService', () => {
  let service: CepService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CepService);
  });
  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
