import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from "../UI/Card";

function ExpenseItem(props) {
    let title = props.title

    const clickHandler = () =>{
        title = 'Updated!!'
        console.log(title)
    }

    return (

        <Card className='expense-item'>

            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

            <button onClick={clickHandler}></button>

        </Card>);
 

}

export default ExpenseItem