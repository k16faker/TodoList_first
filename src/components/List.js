import {React} from "react";



import classes from './List.module.css';




const List = (props) => {

    const data = props.list;
    
    const deleteHandler = (event) => {
        event.preventDefault();
        props.delete(event.target.parentNode.firstChild.textContent);
        console.log(event.target.parentNode.firstChild.textContent);
    }


    return (
        <div>
            <ul className={classes.alllist}>
                {data.map((item) => (
                    <li key={item.key} className={classes.eachlist}>
                        <p className={classes.listkey}>{item.key}</p>
                        <h3 className={classes.listel}>{item.title}</h3>
                        <p className={classes.listel}>{item.date}</p>
                        <p className={classes.listel}>{item.time}</p>
                        <p className={classes.listel}>{item.description}</p>
                        <button className={classes.deletebutton} onClick={deleteHandler}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        )
};


export default List;