import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokeApiService } from './poke-api.service';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });
    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return pokemon data', () => {
    const mockResponse = {
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/'
          },
          is_hidden: false,
          slot: 1
        }
      ]
    };

    service.apiGetPokemons('https://pokeapi.co/api/v2/pokemon/1/').subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1/');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
