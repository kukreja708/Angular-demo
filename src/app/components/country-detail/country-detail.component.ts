import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  countryDetails = {} as any;
  countryId: string;
  constructor(
    private service: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.countryId = param.id;
    });
    this.service.getCountryDetails(this.countryId).subscribe(resp => {
      // console.log(resp);
      this.countryDetails = resp;
    });
  }

  backToList() {
    this.router.navigate(['/list']);
  }

}
