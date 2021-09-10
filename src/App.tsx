import React from 'react';
import {MasterDetail} from './components/MasterDetail'
import './App.css';
interface Idummydata {
  name: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
}
const Data: Idummydata[] = [
  {
      name: "Object 1",
      attribute1: "A",
      attribute2: "B",
      attribute3: "C",
      attribute4: "D",
  },
  {
    name: "Object 2",
    attribute1: "E",
    attribute2: "F",
    attribute3: "G",
    attribute4: "H",
},
{
  name: "Object 3",
  attribute1: "I",
  attribute2: "J",
  attribute3: "K",
  attribute4: "L",
}
,
{
  name: "Object 4",
  attribute1: "M",
  attribute2: "N",
  attribute3: "O",
  attribute4: "P",
}
,
{
  name: "Object A",
  attribute1: "1",
  attribute2: "2",
  attribute3: "3",
  attribute4: "4",
}
,
{
  name: "Object Why",
  attribute1: "W",
  attribute2: "H",
  attribute3: "Y",
  attribute4: "?",
},
{
  name: "Cheese",
  attribute1: "I",
  attribute2: "Like",
  attribute3: "Cheese",
  attribute4: "Ok?",
}
]
function App() {
  return (
    <div className="App">
      <div style = {{width: "50%", margin: "0 auto"}}>
      <MasterDetail data = {Data}>

      </MasterDetail>
      </div>

    </div>
  );
}

export default App;
