import React from "react";

// Reports page with welcome message and basic instructions
const Reports = () => {
  return (
    <div className="container">
      <h2>Welcome to the Excel Report App</h2>
      <p>
        This app helps you generate PDF reports from your Excel files.
      </p>
      <p>
        Go to the <strong>Upload</strong> tab and select your Excel file.
      </p>
      <p>
        After uploading, the system will process your data and generate a PDF with a graph.
      </p>
    </div>
  );
};

export default Reports;

