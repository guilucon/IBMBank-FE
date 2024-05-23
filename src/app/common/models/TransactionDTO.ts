export class TransactionDTO {
  constructor(
    public transactionType: string | null = null,
    public amount: number | null = null,
    public accountNumber: number | null = null,
    public transactionDate: Date | string | null = null
  ) {}
}
