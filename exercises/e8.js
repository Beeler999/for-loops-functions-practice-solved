// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let highBalance = [];
  for (let i = 0; i < array.length; i++) {
    const account = array[i];

    if (highBalance.length == 0) {
      highBalance = [account];
    } else if (account.balance > highBalance[0].balance) {
      highBalance = [account];
    }
  }
  return highBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
