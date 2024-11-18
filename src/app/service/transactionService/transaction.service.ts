import { Injectable } from '@angular/core';
import { Transaction } from '../../classe/transaction';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  getRecentTransactions(): Observable<Transaction[]> {
    const transactions: Transaction[] = [
      { id: 1, description: 'Groceries', amount: -50, date: new Date(), type: 'expense' },
      { id: 2, description: 'Salary', amount: 500, date: new Date(), type: 'income' },
      // Add more mock transactions as needed
    ];
    return of(transactions);
  }
}
