import { Company } from "./company.model";
import { Geo } from "./geo.model";

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;

  constructor( street: string,
                suite: string,
                city: string,
                zipcode: string,
                geo: Geo,
                phone: string,
                website: string,
                company: Company ) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

}
