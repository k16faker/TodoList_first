import UploadForm from "../components/UploadForm";

import classes from './Upload.module.css';



const UploadPage = (props) => {

    const uploadDataHandler = async (title, date, description) => {
        await props.upload(title, date, description);
    }

    return (
        <div className={classes.uploadpage}>
            <UploadForm dataupload={uploadDataHandler}/>
        </div>
    );
};


export default UploadPage;