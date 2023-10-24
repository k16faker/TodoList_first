import UploadForm from "../components/UploadForm";

import classes from './Upload.module.css';



const UploadPage = (props) => {

    const uploadDataHandler = async (key, title, date, time, description) => {
        await props.upload(key, title, date, time, description);
    }

    return (
        <div className={classes.uploadpage}>
            <UploadForm dataupload={uploadDataHandler}/>
        </div>
    );
};


export default UploadPage;