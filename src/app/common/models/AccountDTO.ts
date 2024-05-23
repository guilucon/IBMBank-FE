import {ClientDTO} from "./ClientDTO";
import {TransactionDTO} from "./TransactionDTO";

export class AccountDTO {
  id: number;
  accountNumber: number;
  balance: number;
  client: ClientDTO;
  transactions: TransactionDTO[];

  constructor(
    id: number = 0,
    accountNumber: number = 0,
    balance: number = 0,
    client: ClientDTO = new ClientDTO(),
    transactions: TransactionDTO[] = []
  ) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.client = client;
    this.transactions = transactions;
  }
}
