import { useState } from 'react';
import './MasterDetail.css';
interface Idummydata {
  name: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  attribute4: string;
}
export const MasterDetail = (props: any) => {
  const dataArray: Idummydata[] = props.data;
  const [selected, setSelected] = useState<Idummydata | null>(null);
  let renderedArray = null;
  try {
    renderedArray = dataArray.map((data: Idummydata, index: number) => {
      console.log(data.name);
      return (
        <tr onClick={() => setSelected(dataArray[index])}>
          <td>{data.name}</td>
        </tr>
      );
    });
  } catch (error) {
    console.log(error);
    renderedArray = null;
  }
  return (
    <div style={{ width: "100%"}}>
      <div style={{ display: 'inline-block', width: "50%" }}>
        {renderedArray != null && (
          <table>
            <tbody>{renderedArray}</tbody>
          </table>
        )}
      </div>
      <div style={{ display: 'inline-block' , width: "50%"}}>
        {selected != null && (
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Attribute 1</td>
                <td>Attribute 2</td>
                <td>Attribute 3</td>
                <td>Attribute 4</td>
              </tr>
              <tr>
                <td>{selected.name}</td>
                <td>{selected.attribute1}</td>
                <td>{selected.attribute2}</td>
                <td>{selected.attribute3}</td>
                <td>{selected.attribute4}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
