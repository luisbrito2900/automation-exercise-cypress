import { faker } from "@faker-js/faker";

export const userData = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  birthDay: "12",
  birthMonth: "January",
  birthYear: "2000",
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  secondaryAddress: faker.location.secondaryAddress(),
  country: "United States",
  state: faker.location.state(),
  city: faker.location.city(),
  zipCode: faker.location.zipCode(),
  mobileNumber: faker.phone.number(),
  cardName: faker.person.fullName(),
  cardNumber: faker.finance.creditCardNumber(),
  cvcNumber: faker.finance.creditCardCVV(),
  ccExpirationMonth: faker.helpers.rangeToNumber({ min: 1, max: 12 }),
  ccExpirationYear: faker.helpers.rangeToNumber({ min: 2056, max: 2099 }),
};
export const loginData = {
  loginEmail: userData.email,
  loginPassword: userData.password,
};
