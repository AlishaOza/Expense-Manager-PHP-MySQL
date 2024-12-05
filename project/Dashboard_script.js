let totalIncome = 0;
let totalExpenses = 0;
const categories = {};
const transactions = [];

function saveIncome() {
    totalIncome = parseFloat(document.getElementById('income').value) || 0;
    document.getElementById('total-income').innerText = totalIncome.toFixed(2);
    calculateSavings();
}

function addExpense() {
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const category = document.getElementById('category').value;

    // Validation for empty fields
    if (!date || !amount || amount <= 0 || !category || totalIncome === 0) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Check if the user has enough savings
    const savings = totalIncome - totalExpenses;
    if (amount > savings) {
        alert("You don't have enough savings.");
        // Continue to add the expense anyway
    }

    // Add expense to the transactions array
    transactions.push({ date, amount, category });

    // Sort transactions by date
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Update total expenses
    totalExpenses += amount;
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);

    // Add expense to the correct category
    if (!categories[category]) {
        categories[category] = 0;
    }
    categories[category] += amount;

    // Update the monthly envelopes
    updateMonthlyCategories();

    // Update transaction summary table
    updateTransactionTable();

    // Calculate savings after the new expense
    calculateSavings();
}

function updateMonthlyCategories() {
    const monthlyCategoriesDiv = document.getElementById('monthly-categories');
    monthlyCategoriesDiv.innerHTML = ''; // Clear previous content
    Object.keys(categories).forEach((category) => {
        const amount = categories[category];
        const categoryElement = document.createElement('p');
        categoryElement.innerHTML = `${category}: <span class="total">₹${amount.toFixed(2)}</span>`;
        monthlyCategoriesDiv.appendChild(categoryElement);
    });
}

function updateTransactionTable() {
    const transactionSummaryTable = document.getElementById('transaction-summary');
    transactionSummaryTable.innerHTML = ''; // Clear previous content

    transactions.forEach((transaction) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>Expense</td>
            <td>₹${transaction.amount.toFixed(2)}</td>
            <td>${transaction.category}</td>
        `;
        transactionSummaryTable.appendChild(row);
    });
}

function calculateSavings() {
    const savings = totalIncome - totalExpenses;
    document.getElementById('savings').innerText = savings.toFixed(2);
}