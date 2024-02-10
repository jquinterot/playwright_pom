import { CustomerInfo } from "../types/CustomerInfo";
import {  faker } from '@faker-js/faker';

export const johnInfo: CustomerInfo = {
    name: 'John Doe',
    city: 'Doe City',
    country: 'Doeland',
    username: faker.internet.userName(),
    password: faker.internet.password()
};