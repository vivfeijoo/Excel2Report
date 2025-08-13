import React, { useState } from "react";

// Upload component
const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // Save the selected file to state
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload the file to the backend
  const handleUpload = async () => {
    const token = sessionStorage.getItem("token"); // Get JWT token

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Send token for access
      },
      body: formData,
    });

    const data = await response.json();
    setMessage(data.msg); // Show message from backend
  };

  return (
    <div className="container">
      <h2>Upload Excel File</h2>
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default Upload;


