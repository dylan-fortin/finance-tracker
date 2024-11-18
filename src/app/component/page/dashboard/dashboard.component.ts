import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TransactionService } from '../../../service/transactionService/transaction.service';
import { Transaction } from '../../../classe/transaction';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  transactions: Transaction[] = [];

  constructor(public auth: AuthService,private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getRecentTransactions().subscribe((data: Transaction[]) => {
      this.transactions = data;
    });
  }

}
