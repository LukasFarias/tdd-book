export default class Dolar {
    amount: number;
    constructor(amount: number){
        this.amount = amount;
    }
    public times(multipler: number){
        return new Dolar(this.amount * multipler);
    }

}