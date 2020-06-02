import { CurrencyEnum, CurrencyModel } from "../models/currency.model";
import { TotalBasketPrice, BasketItem } from "../models/basket.model";

export class Basket {
	protected readonly basket: BasketItem[] = [
		{  price: 20 },
		{  price: 45 },
		{  price: 67 },
		{  price: 1305 },
	];

	getBasket(): BasketItem[] {
		return this.basket;
	}

	// All prices in basket are in dollars
	// and currencyList is contains numbers with main currency dollar
	getSumOfBasket(basket: BasketItem[], currencyList: CurrencyModel): TotalBasketPrice {
		const sum = basket.reduce((prev: number, curr: BasketItem) => prev += curr.price, 0);

		return {
			rubles: this.cropCurrency(sum * currencyList[CurrencyEnum.RUB]),
			euros: this.cropCurrency(sum * currencyList[CurrencyEnum.EUR]),
			USDollars: this.cropCurrency(sum * currencyList[CurrencyEnum.USD]),
			pounds: this.cropCurrency(sum * currencyList[CurrencyEnum.GBP]),
			yens: this.cropCurrency(sum * currencyList[CurrencyEnum.JPY])
		};
	}

	showSumOfBasket(total: TotalBasketPrice): string {
		let resultObject = JSON.stringify(total).replace(/,/g, ',<br>')
			.replace(/"/g, '')
			.replace(/:/g, ': ')
			.replace('{', '')
			.replace('}', '');

		return `<div> ${resultObject} </div>`;
	}

	private cropCurrency(currency: number): number {
		return parseFloat(currency.toFixed(2));
	}
}