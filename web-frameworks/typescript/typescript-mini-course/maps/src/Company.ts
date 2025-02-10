import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: String;
  catchPhrase: String;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Hello, we're ${this.companyName}, where our slogan is "${this.catchPhrase}"`;
  }
}
