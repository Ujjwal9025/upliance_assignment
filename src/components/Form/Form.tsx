// UserDataForm.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

interface UserDataFormProps {
  onUnsavedChanges: () => void;
  onSavedChanges: () => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({onUnsavedChanges, onSavedChanges }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    onUnsavedChanges();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Auto-generate user ID (you can implement your logic here)
    const userId = generateUserId();
    const userDataWithId = { ...userData, id: userId };
    console.log(userDataWithId);
    dispatch(addUser(userDataWithId));
    // Clear form fields after submission
    setUserData({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    onSavedChanges();
  };

  // Function to generate user ID (example implementation)
  const generateUserId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="inputs">
        <TextField
          className="input"
          type="text"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <TextField
          className="input"
          type="text"
          id="outlined-basic"
          label="Address"
          variant="outlined"
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
        />
        <TextField
          className="input"
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <TextField
          className="input"
          type="tel"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserDataForm;
