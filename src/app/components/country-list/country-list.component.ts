import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryList: [];
  constructor(
    private service: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCountrylist().subscribe(resp => {
      // console.log(resp);
      this.countryList = resp;
    });
  }

  getCountryDetail(id: string) {
    this.router.navigate(['/country', id]);
  }

}
