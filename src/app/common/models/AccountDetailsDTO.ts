export class AccountDetailsDTO {
  constructor(
    public accountNumber: number = 0,
    public balance: number = 0,
    public clientName: string = '',
    public clientAge: number = 0,
    public clientEmail: string = ''
  ) {}
}
