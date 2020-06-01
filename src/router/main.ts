import Express, { Request, Response } from 'express';
import { Currency } from "../modules/currency";
import { CurrencyService } from "../services/currency.service";
import { Basket } from "../modules/basket";
import { CurrencyModel } from "../models/currency.model";

const router = Express.Router();

const currency = new Currency(new CurrencyService());
const basket = new Basket();

router.get('/', (req: Request, res: Response) => {
    currency.fetchCurrency()
        .then((currencyList: CurrencyModel) => {
            res.send(basket.showSumOfBasket(
                basket.getSumOfBasket(
                    basket.getBasket(),
                    currencyList
                )
            ));
        }).catch((error) => {
            console.error(error);
            res.send('Something went wrong. Please try again later.');
        });
});



export default router;

