import React, { useState } from 'react';

const TextInput = ({ value, onChange, label }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const SelectInput = ({ value, onChange, options, label }) => {
  return (
    <div>
      <label>{label}:</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const TextAreaInput = ({ value, onChange, label }) => {
  return (
    <div>
      <label>{label}:</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};

const ReviewForm = ({ formData }) => {
  return (
    <div>
      <h2>Review Your Form</h2>
      {/* Display formData for review */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    textInput1: '',
    textInput2: '',
    selectInput: '',
    textAreaInput: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with formData
    console.log('Form submitted:', formData);
    // You can add further logic for submitting the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Text Input 1"
        value={formData.textInput1}
        onChange={handleInputChange}
        name="textInput1"
      />
      <TextInput
        label="Text Input 2"
        value={formData.textInput2}
        onChange={handleInputChange}
        name="textInput2"
      />
      <SelectInput
        label="Select Input"
        value={formData.selectInput}
        onChange={handleInputChange}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          // Add more options as needed
        ]}
        name="selectInput"
      />
      <TextAreaInput
        label="Text Area Input"
        value={formData.textAreaInput}
        onChange={handleInputChange}
        name="textAreaInput"
      />
      <button type="submit">Submit</button>
      <ReviewForm formData={formData} />
    </form>
  );
};

export default SurveyForm;
