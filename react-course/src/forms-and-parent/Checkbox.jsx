import React, { useState }  from 'react'

const Checkbox = () => {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: true,
        checkbox2: true,
        checkbox3: false,
        checkbox4: false,
      });
    
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
      };
    
      return (
        <div>
          <label>
            Checkbox 1:
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Checkbox 2:
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Checkbox 3:
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Checkbox 4:
            <input
              type="checkbox"
              name="checkbox4"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      );
}

export default Checkbox