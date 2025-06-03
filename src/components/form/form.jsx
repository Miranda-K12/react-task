import React from "react";
import "./form.css";
import { useState } from "react";
import CollectData from "../data/data";

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
        <option value="" disabled>
          Choose the color
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
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
  const [employed, setEmployed] = useState(false);
  const [notes, setNotes] = useState("");
  const [sauces, setSauces] = useState([]);
  const [beststooge, setBestStooge] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [submissions, setSubmissions] = useState([]);

  function handleChange(e) {
    const { name, value, checked } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "employed":
        setEmployed(checked);
        break;
      case "favoriteColor":
        setFavoriteColor(value);
        break;
      case "notes":
        setNotes(value);
        break;
      default:
        break;
    }
  }
  function handleSauceChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setSauces((prev) => [...prev, value]);
    } else {
      setSauces((prev) => prev.filter((sauces) => sauces !== value));
    }
  }
  function handleStoogeChange(value) {
    setBestStooge(value);
  }

  function handleSubmit(e) {
    if (!firstName.trim() || !lastName.trim()) {
      alert("First Name and Last Name are required");
      return;
    }
    e.preventDefault();
    const collectedData = {
      firstName,
      lastName,
      age,
      employed,
      favoriteColor,
      sauces,
      beststooge,
      notes,
    };
    setSubmissions((prev) => [...prev, collectedData]);
    handleReset();
  }
  function handleReset() {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmployed(false);
    setNotes("");
    setSauces([]);
    setBestStooge("");
    setFavoriteColor("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          id="firstName"
          label="First Name"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
          required
        />
        <Input
          id="lastName"
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
          required
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
          <input
            type="checkbox"
            id="employed"
            name="employed"
            checked={employed}
            onChange={handleChange}
          />
        </div>
        <SelectOptions
          id="favoriteColor"
          name="favoriteColor"
          label="Favorite Color"
          onChange={handleChange}
          value={favoriteColor}
          options={[
            { value: "green", label: "Green" },
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
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
          onChange={handleSauceChange}
          name="sauces"
        />
        <RadioBox
          label="Best Stooge"
          options={[
            { value: "larry", label: "Larry" },
            { value: "moe", label: "Moe" },
            { value: "curly", label: "Curly" },
          ]}
          selectedValue={beststooge}
          onChange={handleStoogeChange}
        />

        <Input
          id="notes"
          label="Notes"
          name="notes"
          placeholder="Notes"
          value={notes}
          onChange={handleChange}
        />
        <div className="buttons-wrapper">
          <Button type="submit" className="submit">
            Submit
          </Button>
          <Button type="reset" className="reset" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
      <CollectData submissions={submissions} />
    </div>
  );
}

export default Form;
