import { useRef } from 'react';

import classes from './UploadForm.module.css';


const UploadForm = (props) => {
    const titleInputRef = useRef();
    const dateInputRef = useRef();
    const descriptionInputRef = useRef();
    const timeInputRef = useRef();


    const uploadHandler = (event) => {
        event.preventDefault();

        const a = Math.random();
        const enteredKey = a.toString();
        const enteredTitle = titleInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredTime = timeInputRef.current.value;


        if(enteredTitle.trim().length === 0 || 
        enteredDate.trim().length === 0 || 
        enteredDescription.trim().length === 0 || 
        enteredTime.trim().length === 0){
            window.alert('Please fill all the fields!');
            return;
        };
        props.dataupload(enteredKey, enteredTitle, enteredDate, enteredTime, enteredDescription);



        titleInputRef.current.value='';
        dateInputRef.current.value='';
        timeInputRef.current.value='';
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
                <input type='time' ref={timeInputRef} />
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