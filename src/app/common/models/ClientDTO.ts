export class ClientDTO {
  constructor(
    public id: number | null = null,
    public name: string = '',
    public age: number | null = null,
    public email: string = '',
    public accountNumber: number | null = null
  ) {}
}
