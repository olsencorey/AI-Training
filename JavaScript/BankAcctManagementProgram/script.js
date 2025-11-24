class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions.filter(tx => tx.type === 'deposit').map(tx => tx.amount);
    return `Deposits: ${deposits.join(',')}`;
  }

    listAllWithdrawals() {
    const withdrawals = this.transactions.filter(tx => tx.type === 'withdraw').map(tx => tx.amount);
    return `Withdrawals: ${withdrawals.join(',')}`;
  }

}

const myAccount = new BankAccount();

// At least two deposits
myAccount.deposit(150);
myAccount.deposit(100);

// At least two withdrawals
myAccount.withdraw(50);
myAccount.withdraw(30);

// One more transaction (can be another deposit or withdrawal)
myAccount.deposit(50);

console.log(myAccount.checkBalance());
