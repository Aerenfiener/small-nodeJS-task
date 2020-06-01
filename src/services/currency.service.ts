import { CurrencyFromBackend } from "../models/currency.model";

const request = require('request');

export class CurrencyService {
    public readonly url: string = "https://api.exchangeratesapi.io/latest?base=USD";

    public fetchAllCurrency(url: string = this.url): Promise<CurrencyFromBackend> {
        return new Promise((resolve, reject) => {
			request({url},
				(error: string, response, body: any) => {
					if (error) {
						reject(error);
						return;
					}

					resolve(JSON.parse(body));
				}
			)}
        )
    }
}