import React from "react";
import "./form.css";
import { useState } from "react";

function Button({ type, className = "", onClick, children }) {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
function Input({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function SelectOptions({ id, name, label, onChange, value, options }) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="">Select a {label.toLowerCase()}</option>

        {options.map((option) => {
          <option key={option.value} value={option.value}>
            {option.label}
          </option>;
        })}
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
}

function CheckBox({ options, selectedValues, onChange, name, label }) {
  return (
    <div className="form-input">
      {<label>{label}</label>}
      <div className="check-group">
        {options.map(({ value, label }) => (
          <label key={value} htmlFor={value}>
            <input
              type="checkbox"
              id={value}
              name={name}
              value={value}
              checked={selectedValues.includes(value)}
              onChange={onChange}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
function RadioBox({ options, selectedValue, onChange, name, label }) {
  return (
    <div className="form-input">
      {label && <label>{label}</label>}
      <div className="radio-group">
        {options.map(({ value, label: optionLabel }) => (
          <label key={value} htmlFor={value}>
            <input
              type="radio"
              id={value}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              checked={selectedValue === value}
            />
            {optionLabel}
          </label>
        ))}
      </div>
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");
  const [sauces, setSauces] = useState("");
  const [beststooge, setBestStooge] = useState("");
  function handleChange(event) {
    setFirstName(event.target.value);
  }
  return (
    <div className="form">
      <Input
        id="firstName"
        label="First Name"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
      />
      <Input
        id="lastName"
        label="Last Name"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
      />
      <Input
        id="age"
        type="number"
        label="Age"
        name="age"
        placeholder="Age"
        value={age}
        onChange={handleChange}
      />
      <div className="form-input">
        <label htmlFor="employed">Employed</label>
        <input type="checkbox" id="employed" name="employed" />
      </div>
      <SelectOptions
        id="favoriteColor"
        name="favoriteColor"
        label="Favorite Color"
        onChange={handleChange}
        options={[
          { value: "red", label: "Red" },
          { value: "blue", label: "Blue" },
          { value: "green", label: "Green" },
          { value: "yellow", label: "Yellow" },
          { value: "purple", label: "Purple" },
        ]}
      />
      <CheckBox
        label="Sauces"
        options={[
          { value: "ketchup", label: "Ketchup" },
          { value: "mustard", label: "Mustard" },
          { value: "mayonnaise", label: "Mayonnaise" },
          { value: "guacamole", label: "Guacamole" },
        ]}
        selectedValues={sauces}
        onChange={setSauces}
        name="sauces"
      />
      <RadioBox
        label="Best Stooge"
        options={[
          { value: "larry", label: "Larry" },
          { value: "moe", label: "Moe" },
          { value: "curly", label: "Curly" },
        ]}
        selectedValues={beststooge}
        onChange={setBestStooge}
      />

      <Input
        id="notes"
        label="Notes"
        name="notes"
        type="textarea"
        placeholder="Notes"
        value={notes}
        onChange={handleChange}
      />
      <div className="buttons-wrapper">
        <Button className="submit">Submit</Button>
        <Button type="reset" className="reset">
          Reset
        </Button>
      </div>
      <div className="object-info-wrapper"></div>
    </div>
  );
}

export default Form;
