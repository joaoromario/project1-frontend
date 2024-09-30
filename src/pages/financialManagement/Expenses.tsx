import React, { useState } from "react";
import "./FinancialManagement.scss";

const Expenses = () => {
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    category: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="financial-management">
      <h1>Financial Management</h1>
      <div className="tabs">
        <button className="tab">Revenue</button>
        <button className="tab active">Expenses</button>
      </div>
      <div className="form-container">
        <h2>Add Expense</h2>
        <p>Record new expenses for the hotel.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="yyyy-mm-dd"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="e.g., Utilities, Maintenance, etc."
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional information"
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
