import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date (2023, 12, 29);
    const expenseTitle = 'car';
    const expenseAmount = 500000
    const locationOfExpenditure = 'India'

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div>{locationOfExpenditure}</div>
                <div className='expense-item__price'>Rs.{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;