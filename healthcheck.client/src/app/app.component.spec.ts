import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()],
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  beforeEach(() => {});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'WeatherForecast' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WeatherForecast');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'WeatherForecast',
    );
  });

  it('should retrieve weather forecasts from the server', () => {
    const mockForecasts = [
      {
        date: '2021-10-01',
        temperatureC: 20,
        temperatureF: 68,
        summary: 'Mild',
      },
      {
        date: '2021-10-02',
        temperatureC: 25,
        temperatureF: 77,
        summary: 'Warm',
      },
    ];

    component.getForecasts();

    console.log('forecast: ', component.forecasts);
    console.log('Requests:');
    const req = httpMock.expectOne('http://localhost:5269/api/weatherforecast');
    console.log('Request found:');

    expect(req.request.method).toEqual('GET');
    req.flush(mockForecasts);

    expect(component.forecasts).toEqual(mockForecasts);
  });
});
