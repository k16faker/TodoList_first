

import List from '../components/List';

const ListPage = (props) => {

    const data = props.list;
    const deleteHandler = props.delete;


    return (
        <div>
            <List list={data} delete={deleteHandler}/>
        </div>
    )
};

export default ListPage;