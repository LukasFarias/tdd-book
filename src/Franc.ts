export default class Franc {

  private amount: number;

  constructor(amount: number){
      this.amount = amount;
  }

  public times(multipler: number){
      return new Franc(this.amount * multipler);
  }

  public equals(object: Franc): boolean{
      return this.amount === object.amount;
  }
}
