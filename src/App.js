import { React, useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot } from "firebase/firestore";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";

import RootLayer from "./pages/RootLayer";
import ErrorPage from "./pages/Error";
import UploadPage from "./pages/Upload";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";

const firebaseConfig = {
  apiKey: "AIzaSyDmZZE5yOjzAyHfHtYNjayK6XtpKt02ruw",
  authDomain: "mylisttest-be9b5.firebaseapp.com",
  projectId: "mylisttest-be9b5",
  storageBucket: "mylisttest-be9b5.appspot.com",
  messagingSenderId: "94232593897",
  appId: "1:94232593897:web:f233cae8e406400b62b778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [data, setData] = useState([]);
  const [deletedData, setDeletedData] = useState("");

  const dataUploadHandler = async (key, title, date, time, description) => {
    console.log(key, title, date, time, description);
    await setDoc(doc(db, "todolist", key), {
      title: title,
      date: date,
      time: time,
      description: description,
      key: parseFloat(key),
    });
  };

  const deletedDataChoiceHandler = async (title) => {
    if (window.confirm("are you sure you want to delete this?")) {
      setDeletedData(title);
      await deleteDoc(doc(db, "todolist", title));
    } else {
      return;
    }
  };

  // const dataLoadHandler = async () => {
  //   const q = query(collection(db, "todolist"));
  //   const querySnapshot = await getDocs(q);
  //   const list = querySnapshot.docs.map((doc) => doc.data());
  //   console.log(list);
  //   setData(list);
  // }

  function sortDate1(list) {
    const sorted_list = list.sort(function (a, b) {
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
      const todoListData = [];
      snapshot.forEach((doc) => {
        todoListData.push(doc.data());
      });
      setData(sortDate1(todoListData));
    });
  };

  useEffect(() => {
    dataLoadHandler();
    // unSub();
  }, [data]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayer />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "list",
          element: <ListPage list={data} delete={deletedDataChoiceHandler} />,
        },
        {
          path: "upload",
          element: <UploadPage upload={dataUploadHandler} />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
