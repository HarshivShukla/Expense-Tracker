# Expense Tracker Application

## Overview
The Expense Tracker is a React-based web application that allows users to track their expenses and manage their wallet balance. Users can:

- Add income to their wallet.
- Add, edit, and delete expenses.
- View a summary of expenses in a chart format.
- Ensure expenses are not exceeding the available wallet balance.
- Persist data in local storage to retain information across sessions.

## Features

### Wallet Balance Management
- View current wallet balance.
- Add income by specifying the amount and date via a modal.

### Expense Management
- Add new expenses with title, amount, category, and date via a modal.
- Edit and delete expenses.
- Prevent expenses that exceed the available wallet balance.

### Expense Summary
- View expense data visualized in pie and bar charts.
- Top expenses by category are highlighted.

### Recent Transactions
- List of recent transactions with details like title, date, amount, and actions (edit/delete).

### Responsive Design
- The application is fully responsive and works across different screen sizes.

## Tech Stack

- **Frontend:** React, HTML, CSS, JavaScript
- **Charts:** Recharts (for pie and bar charts)
- **State Management:** React useState
- **Styling:** Plain CSS

## Project Structure
```
src/
├── components/
│   ├── Navbar/
│   │   └── Navbar.js
│   ├── WalletBalance/
│   │   └── WalletBalance.js
│   ├── IncomeModal/
│   │   ├── IncomeModal.js
│   │   └── IncomeModal.css
│   ├── ExpenseModal/
│   │   ├── ExpenseModal.js
│   │   └── ExpenseModal.css
│   ├── ExpenseList/
│   │   └── ExpenseList.js
│   ├── ExpenseSummary/
│   │   └── ExpenseSummary.js
│   ├── ExpenseChart/
│   │   └── ExpenseChart.js
│
├── App.js
├── index.js
└── index.css
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

1. **Add Income:**
   - Click on the `+ Add Income` button.
   - Enter the amount and date in the modal popup.

2. **Add Expense:**
   - Click on the `+ Add Expense` button.
   - Enter the title, amount, category, and date in the modal popup.

3. **View Transactions:**
   - Recent transactions are displayed in the "Recent Transactions" section.

4. **View Expense Summary:**
   - Expense data is visualized in charts in the "Top Expenses" section.

5. **Delete/Edit Transactions:**
   - Use the delete or edit buttons next to each transaction.

## Local Storage

The application uses local storage to persist:
- Wallet balance
- Expense data

This ensures data is not lost on page refresh.

## Future Enhancements

- Implement user authentication.
- Add filters for transactions (e.g., by date or category).
- Add recurring expenses functionality.
- Enhance UI with additional animations and themes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author:** Your Name

 
