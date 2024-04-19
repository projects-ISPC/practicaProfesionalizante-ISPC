export class User {

  private _name: string;
  private _profilePic: string;
  private _subscription: boolean;
  private _rentedTotal: number;
  private _actualRented: number;

  constructor(name: string, profilePic: string, subscription: boolean, rentedTotal: number, actualRented: number) {
    this._name = name;
    this._profilePic = profilePic;
    this._subscription = subscription;
    this._rentedTotal = rentedTotal;
    this._actualRented = actualRented;
  }


  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get profilePic(): string {
    return this._profilePic;
  }

  public set profilePic(profilePic: string) {
    this._profilePic = profilePic;
  }

  public get subscription(): boolean {
    return this._subscription;
  }

  public set subscription(subscription: boolean) {
    this._subscription = subscription;
  }

  public get rentedTotal(): number {
    return this._rentedTotal;
  }

  public set rentedTotal(rentedTotal: number) {
    this._rentedTotal = rentedTotal;
  }

  public get actualRented(): number {
    return this._actualRented;
  }

  public set actualRented(actualRented: number) {
    this._actualRented = actualRented;
  }
}
