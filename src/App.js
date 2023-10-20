import {React, useEffect, useState} from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {initializeApp} from 'firebase/app';
import { getFirestore, onSnapshot} from "firebase/firestore";
import { doc, setDoc, getDocs, collection, deleteDoc} from "firebase/firestore"; 

import RootLayer from './pages/RootLayer';
import ErrorPage from './pages/Error';
import UploadPage from './pages/Upload';
import ListPage from './pages/ListPage';

const firebaseConfig = {
  apiKey: "AIzaSyDmZZE5yOjzAyHfHtYNjayK6XtpKt02ruw",
  authDomain: "mylisttest-be9b5.firebaseapp.com",
  projectId: "mylisttest-be9b5",
  storageBucket: "mylisttest-be9b5.appspot.com",
  messagingSenderId: "94232593897",
  appId: "1:94232593897:web:f233cae8e406400b62b778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);






function App() {


  const [data, setData] = useState([]);


  const dataUploadHandler = async (title, date, description) => {
    await setDoc(doc(db, "todolist", title), {
      key : Math.random(),
      title: title,
      date: date,
      description: description
    });
  };

  // const dataLoadHandler = async () => {
  //   const q = query(collection(db, "todolist"));
  //   const querySnapshot = await getDocs(q);
  //   const list = querySnapshot.docs.map((doc) => doc.data());
  //   console.log(list);
  //   setData(list);
  // }


  function sortDate1(list) {
    const sorted_list = list.sort(function(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
      return sorted_list;
  }

  const dataLoadHandler = async () => {
    const dataCollection = collection(db, "todolist");

    // getDocs(dataCollection)
    // .then(snapshot => {
    //   const todoListData = []
    //   snapshot.forEach(doc => {
    //     todoListData.push(doc.data())
    //   })
    //   console.log(todoListData);
    //   setData(sortDate1(todoListData));
    // })
    // .catch(error => {
    //   console.error(error)
    // })

    onSnapshot(dataCollection, (snapshot) => {
      const todoListData = []
      snapshot.forEach(doc => {
        todoListData.push(doc.data())
      })
      setData(sortDate1(todoListData));
    })
  };

  const onDeleteClick = async (title) => {
    const nweetTextRef = doc(db, "todolist", `${title}`); // 우선 nweetTextRef 변수에다가 nweet의 id를 담아줌
    const ok = window.confirm("are you sure delete?");
    if (ok) {
      await deleteDoc(nweetTextRef); // deleteDoc을 이용해서 지워버림
  }};

  useEffect(() => {
    dataLoadHandler();
    // unSub();
  }, [data]);

    


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayer />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'list',
          element: <ListPage list={data} delete={onDeleteClick}/>,
        },
        {
          path: 'upload',
          element: <UploadPage upload={dataUploadHandler} />
        },
        {
          path: 'login',
          element: <h1>Login</h1>,
        },
      ],
    },
  ])



  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
