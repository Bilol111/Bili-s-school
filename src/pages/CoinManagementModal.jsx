import React, { useState, useEffect } from "react";

const CoinManagementModal = ({ isOpen, onClose, student, onUpdateCoins }) => {
  const [coinChange, setCoinChange] = useState(0);
  const [error, setError] = useState(null);

  const handleUpdateCoins = () => {
    if (coinChange === 0) {
      setError("Coin change cannot be zero!");
      return;
    }

    onUpdateCoins(student._id, coinChange);
    setCoinChange(0); // Reset form after submission
    setError(null); // Clear error
    onClose();
  };

  const handleCoinChange = (e) => {
    const value = Number(e.target.value);
    setCoinChange(value);
    if (value === 0) {
      setError("Coin change cannot be zero!");
    } else {
      setError(null); // Clear error if value is not zero
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Manage Coins for {student.name}
        </h3>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Coin Change"
            value={coinChange}
            onChange={handleCoinChange}
            className="p-3 border border-gray-300 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateCoins}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Update Coins
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinManagementModal;
