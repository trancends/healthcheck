import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-health-check',
  standalone: true,
  imports: [],
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.scss',
})
export class HealthCheckComponent implements OnInit {
  public result?: Result;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Result>(environment.baseUrl + '/api/health').subscribe(
      (result) => {
        this.result = result;
      },
      (error) => console.error(error),
    );
  }
}

interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
