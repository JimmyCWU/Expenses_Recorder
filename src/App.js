import React, {useState} from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
import Filter from './components/Expenses/ExpensesFilter'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Insurance",
    amount: 100,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Rent",
    amount: 250,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "New Iphone",
    amount: 1200,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      // [新加入的, 原本就存在的]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
