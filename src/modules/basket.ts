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
		const sum = basket.reduce(
			({price: prevPrice}: BasketItem, {price: currPrice}: BasketItem) =>
				({price: prevPrice + currPrice})
		    ).price;

		return {
			rubles: parseFloat((sum * currencyList[CurrencyEnum.RUB]).toFixed(2)),
			euros: parseFloat((sum * currencyList[CurrencyEnum.EUR]).toFixed(2)),
			USDollars: parseFloat((sum * currencyList[CurrencyEnum.USD]).toFixed(2)),
			pounds: parseFloat((sum * currencyList[CurrencyEnum.GBP]).toFixed(2)),
			yens: parseFloat((sum * currencyList[CurrencyEnum.JPY]).toFixed(2))
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
}