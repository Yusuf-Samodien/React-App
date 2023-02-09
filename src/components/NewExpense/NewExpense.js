import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react'

const NewExpense = (props) => {
  function saveExpenseDataHandler(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setFormView(false)
  }


  const [formView,setFormView] = useState(false)

  function startEditingHandler(){
    setFormView(true)
  }

  function stopEditingHandler(){
    setFormView(false)
  }

  return (
    <div className="new-expense">
      {!formView && <button onClick={startEditingHandler}>Add New Expense</button>}
      {formView && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
