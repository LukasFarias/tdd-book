interface Object {
    amount: Dolar;
}

interface DolarDTO {
    value: number;
}



export default class Dolar {

    private amount: number;

    constructor(amount: number){
        this.amount = amount;
    }

    public times(multipler: number){
        return new Dolar(this.amount * multipler);
    }

    public equals(object: Dolar): boolean{
        return this.amount === object.amount;
    }
}