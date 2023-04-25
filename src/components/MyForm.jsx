import React, { useState } from "react";
import "./MyForm.css"


const MyForm = () => {
  const [data, setData] = useState([]);

  const handleAddRow = () => {
    setData([...data, {}]);
  };

  const handleDeleteRow = (index) => {
    setData(data.filter((row, i) => i !== index));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index] = { ...newData[index], [name]: value };
    setData(newData);
  };


    
  return (
    <div>
      <table>
        <thead >
          <tr >
            <th>Day</th>
            <th>Time</th>
            <th>City</th>
            <th>Mode</th>
            <th>Mode Details</th>
            <th>A/D</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <select
                  name="day"
                  value={row.day || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select Day--</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </td>

              <td>
                <input
                  type="time"
                  name="time"
                  value={row.time || ""}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>

              <td>
                <select
                  name="city"
                  value={row.city || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select City--</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="jaipur">Jaipur</option>
                </select>
              </td>
              <td>
                <select
                  name="mode"
                  value={row.mode || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select Mode--</option>
                  <option value="travel">travel</option>
                  <option value="visit">visit</option>
                  <option value="trip">Road</option>
                  <option value="journey">journey</option>
                </select>
              </td>
              <td>
                <select
                  name="modeDetails"
                  value={row.modeDetails || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select Mode Details--</option>
                  <option value="Flight">Flight</option>
                  <option value="Train">Train</option>
                  <option value="Bus">Bus</option>
                  <option value="truck">Truck</option>
                </select>
              </td>
              <td>
                <select
                  name="aOrD"
                  value={row.aOrD || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select--</option>
                  <option value="A">A</option>
                  <option value="D">D</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="remarks"
                  placeholder="We"
                  value={row.remarks || ""}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default MyForm;
