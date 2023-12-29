import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';

function ExpenseItem(props){
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetail amount={props.amount} title={props.title} location={props.location} />
        </div>
    );
}

export default ExpenseItem;