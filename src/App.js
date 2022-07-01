import React, {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [doc, setDoc] = useState('');
  const [clote, setClote] = useState('');
  const [hygienic, setHygienic] = useState('')
  const [checked, setChecked] = useState([]);
  const [hygienics, setHygienics] = useState(["A", "B", "C"]);
  const [documents,setDocuments] = useState(["A1", "B1", "C1", "D1"]);
  const [clotes,setClotes ] = useState(["Apple", "Banana", "Tea", "Coffee"]);
  let collection = [
    {
      tytle: "Hygienic",
      data: hygienics
    },
    {
      tytle: "Document",
      data: documents
    },
    {
      tytle: "Clotes",
      data: clotes
    },
  ]
  const [list, setList] = useState(collection);


  const addDocument = (item) => {
    let a = documents
    a.push(item);
    setDocuments(a)
    setList(collection)
  }

  const addClote = (item) => {
   let a = clotes
    a.push(item)
    setClotes(a)
    setList(collection)
  }

  const addHygienic = (item) => {
    let a = hygienics
    a.push(item);
    setHygienics(a)
    setList(collection)
  }


  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function handleChangeDoc(event) {
    setDoc(event.target.value);
  }

  function handleChangeClots(event) {
    setClote(event.target.value);
  }

  function handleChangeHygienic(event) {
    setHygienic(event.target.value);
  }

  var isChecked = (item) =>
      checked.includes(item) ? "checked-item" : "not-checked-item";
  useEffect(()=>{
    console.log(list)
  },[list])
  return (

      <>
        <div className="app">

          <button onClick={() => addDocument(doc)}>+ Document</button>
          <input name="document" onChange={handleChangeDoc}/>
          <button onClick={() => addClote(clote)}>+ Clote</button>
          <input name="clote" onChange={handleChangeClots}/>
          <button onClick={() => addHygienic(hygienic)}>+ Hygienic</button>
          <input name="hygienic" onChange={handleChangeHygienic}/>

          <div className="title"><h1>Travel CheckList</h1></div>
          <div className='sort-items'>
            {list && list.map((item, bigIndex) => (
                <div className="checkList">
                  <b className='title-category'>{item.tytle}:</b>
                  <div className="list-container">
                    {item.data.map((item, index) => (
                        <div key={index}>
                          <input value={item} name={`checkbox${bigIndex}`} type="checkbox"
                                 onChange={handleCheck}/>
                          <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
  );

}

export default App;
