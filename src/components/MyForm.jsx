import React, { useState } from "react";
import Select from "react-select";

import "./MyForm.css";

const options = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "October",
    label: "October",
  },
  {
    value: "November",
    label: "November",
  },
  {
    value: "December",
    label: "December",
  },
];

const MyForm = () => {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dayNumber, setDayNumber] = useState(null);

  const handleAddRow = () => {
    setData([...data, {}]);
  };

  const handleDeleteRow = (index) => {
    setData(data.filter((row, i) => i !== index));
  };

  const countSelectedMonths = (options) => {
    return options.filter((option) => option.value).length;
  };

  const handleOkClick = (event) => {
    setDayNumber(event.target.previousSibling.value);
  };

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const selectedCount = countSelectedMonths(selectedOptions);
  const totalCount = options.length;

  const totalOption = {
    value: "total",
    label: `Total (${totalCount})`,
    isDisabled: true,
  };

  const optionsWithTotal = [...options, totalOption];

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    let modeDetailsOptions = [];
    if (name === "mode") {
      if (value === "travel") {
        modeDetailsOptions = Array.from({ length: 100 }, (_, i) =>
          (i + 1).toString()
        );
      } else if (value === "visit") {
        modeDetailsOptions = Array.from({ length: 100 }, (_, i) =>
          (i + 101).toString()
        );
      } else if (value === "trip") {
        modeDetailsOptions = Array.from({ length: 100 }, (_, i) =>
          (i + 201).toString()
        );
      } else if (value === "tour") {
        modeDetailsOptions = Array.from({ length: 100 }, (_, i) =>
          (i + 301).toString()
        );
      }
    }
    const newData = [...data];
    newData[index] = { ...newData[index], [name]: value, modeDetailsOptions };
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Day Number
              <td>
                <input type="number" />
                <button onClick={handleOkClick}>Ok</button>
              </td>
            </th>
          </tr>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>City</th>
            <th>Mode</th>
            <th>Mode Details</th>
            <th>A/D</th>
            <th>Months</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                {dayNumber && (
                  <select
                    name="day"
                    value={row.day || ""}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option value="">--Select Day--</option>
                    {Array.from({ length: dayNumber }, (_, i) => i + 1).map(
                      (day) => (
                        <option key={day} value={`Day${day}`}>
                          {`Day${day}`}
                        </option>
                      )
                    )}
                  </select>
                )}
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
                  <option value="tour">tour</option>
                </select>
              </td>
              <td>
                <select
                  name="modeDetails"
                  value={row.modeDetails || ""}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="">--Select Mode Details--</option>
                  {row.modeDetailsOptions &&
                    row.modeDetailsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
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
                <label htmlFor="month-select">Select months:</label>
                <Select
                  options={optionsWithTotal}
                  isMulti
                  onChange={handleChange}
                  value={selectedOptions}
                />

                <p>
                  Selected: {selectedCount}/{totalCount}
                </p>
              </td>

              <td>
                {countSelectedMonths(selectedOptions) > 0 && (
                  <div className="selected-count">
                    ({countSelectedMonths(selectedOptions)})
                  </div>
                )}
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
