export class AccountListDTO {
  constructor(
    public id: number = 0,
    public accountNumber: number = 0,
    public balance: number = 0,
    public clientId: number = 0,
    public clientName: string = ''
  ) {}
}
