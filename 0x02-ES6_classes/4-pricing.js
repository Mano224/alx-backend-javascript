import Currency from './3-currency'

export default class Pricing{

    constructor(_amount, _currency){
        this.amount = _amount;
        this.currency = _currency;
    }

    get amount() {
        return this._amount;
      }
    
      set amount(value) {
        if (typeof value !== 'number') {
          throw new TypeError('amount must be a number');
        }
        this.amount = value;
      }

    
    get currency(){
        return this.currency
    }
    set currency(value){
        if(!( value instanceof Currency)){
            throw new TypeError('currency must be a Currency');
        }
        this.currency = value
    }

    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`
    }
    static convertPrice(amount, conversionRate){
        if (typeof amount !== 'number') {
            throw new TypeError('amount must be a number');
          }
          if (typeof conversionRate !== 'number') {
            throw new TypeError('conversionRate must be a number');
          }
          return amount * conversionRate;

    }



}
