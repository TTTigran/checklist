import React, {useState} from "react";
import "./App.css";

function App() {

    const [doc, setDoc] = useState('');
    const [clote, setClote] = useState('');
    const [hygienic, setHygienic] = useState('')
    const [checked, setChecked] = useState([]);
    const [hygienics] = useState(["A", "B", "C"]);
    const [documents] = useState(["A1", "B1", "C1", "D1"]);
    const [clotes ] = useState(["Apple", "Banana", "Tea", "Coffee"]);
    let data = [
        {
            tytle: "Hygienic",
            items: hygienics
        },
        {
            tytle: "Document",
            items: documents
        },
        {
            tytle: "Clotes",
            items: clotes
        },
    ]
    const [list, setList] = useState(data);


    const addDocument = (item) => {
        data[1].items.push(item)
        setList(data)
    }

    const addClote = (item) => {
        data[2].items.push(item)
        setList(data)
    }

    const addHygienic = (item) => {
        data[0].items.push(item)
        setList(data)
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
                    {list.map((item, bigIndex) => (
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
