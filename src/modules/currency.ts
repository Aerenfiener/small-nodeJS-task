import { CurrencyService } from "../services/currency.service";
import { CurrencyEnum, CurrencyModel } from "../models/currency.model";

export class Currency {
	constructor(protected currencyService: CurrencyService) {}

	async fetchCurrency(): Promise<CurrencyModel> {
		const currencyList = (await this.currencyService.fetchAllCurrency()).rates;

		return {
			[CurrencyEnum.USD]: currencyList[CurrencyEnum.USD],
			[CurrencyEnum.RUB]: currencyList[CurrencyEnum.RUB],
			[CurrencyEnum.JPY]: currencyList[CurrencyEnum.JPY],
			[CurrencyEnum.GBP]: currencyList[CurrencyEnum.GBP],
			[CurrencyEnum.EUR]: currencyList[CurrencyEnum.EUR]
		};
	}
}