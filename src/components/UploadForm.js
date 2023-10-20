import { useRef } from 'react';

import classes from './UploadForm.module.css';


const UploadForm = (props) => {
    const titleInputRef = useRef();
    const dateInputRef = useRef();
    const descriptionInputRef = useRef();


    const uploadHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        props.dataupload(enteredTitle, enteredDate, enteredDescription);


        titleInputRef.current.value='';
        dateInputRef.current.value='';
        descriptionInputRef.current.value='';

        window.alert('Upload Successful!');

    };

    return (
        <div className={classes.form}>
            <h2>Upload Form</h2>
            <div className={classes.titleinput}>
                <input type='text' placeholder='Title' ref={titleInputRef} />
            </div>
            <div className={classes.dateinput}>
                <input type="date" ref={dateInputRef} />
            </div>
            <div className={classes.descriptioninput}>
                <textarea placeholder='Description' ref={descriptionInputRef} />
            </div>
            <div className={classes.button}>
                <button className={classes.submitbutton} onClick={uploadHandler}>Upload</button>
            </div>
        </div>
    );
};

export default UploadForm;