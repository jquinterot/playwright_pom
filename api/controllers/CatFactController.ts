import { APIRequestContext } from '@playwright/test';

export class CatFactController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  getCatFact = async () => {
    const request = await this.request.get(`/fact`);
    const response = request.json();
    return response;
  };

  getCatFacts = async () => {
    const request = await this.request.get(`/facts`);
    const response = request.json();
    return response;
  };
}
