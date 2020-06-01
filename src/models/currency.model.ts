export enum CurrencyEnum {
	USD = 'USD', // Dollar, main currency
	RUB = 'RUB', // Ruble
	JPY = 'JPY', // Yen
	GBP = 'GBP', // Pound
	EUR = 'EUR'  // Euro
}

export interface CurrencyModel {
	USD: number;
	RUB: number;
	JPY: number;
	GBP: number;
	EUR: number;
}

export interface CurrencyFromBackend {
	rates: Rates,
	base: string,
	date: string
}

export interface Rates {
	CAD: number,
	HKD: number,
	ISK: number,
	PHP: number,
	DKK: number,
	HUF: number,
	CZK: number,
	GBP: number,
	RON: number,
	SEK: number,
	IDR: number,
	INR: number,
	BRL: number,
	RUB: number,
	HRK: number,
	JPY: number,
	THB: number,
	CHF: number,
	EUR: number,
	MYR: number,
	BGN: number,
	TRY: number,
	CNY: number,
	NOK: number,
	NZD: number,
	ZAR: number,
	USD: number,
	MXN: number,
	SGD: number,
	AUD: number,
	ILS: number,
	KRW: number,
	PLN: number
}
