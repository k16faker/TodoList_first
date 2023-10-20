import {React} from "react";



import classes from './List.module.css';




const List = (props) => {

    const data = props.list;
    const deleteHandler = props.delete;


    return (
        <div>
            <ul className={classes.alllist}>
                {data.map((item) => (
                    <li key={item.key} className={classes.eachlist}>
                        <h3 className={classes.listel}>{item.title}</h3>
                        <p className={classes.listel}>{item.date}</p>
                        <p className={classes.listel}>{item.description}</p>
                        <button className={classes.deletebutton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>)
};


export default List;