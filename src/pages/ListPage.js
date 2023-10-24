

import List from '../components/List';
import classes from './ListPage.module.css';

const ListPage = (props) => {

    const data = props.list;
    const deleteHandler = props.delete;


    return (
        <div className={classes.fulllist}>
            <List list={data} delete={deleteHandler}/>
        </div>
    )
};

export default ListPage;