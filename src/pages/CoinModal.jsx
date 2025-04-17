import React, { useState } from "react";

const CoinModal = ({ isOpen, onClose, onUpdate, student }) => {
  const [coinsToAdd, setCoinsToAdd] = useState(0);
  const [coinsToSubtract, setCoinsToSubtract] = useState(0);

  const handleAddCoin = () => {
    onUpdate(coinsToAdd, 0);  
  };

  const handleSubtractCoin = () => {
    onUpdate(0, coinsToSubtract);  
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-xl font-bold mb-4">Manage Coins for {student.name}</h3>
          <div className="mb-4">
            <label htmlFor="add-coins" className="block text-sm">Coins to Add</label>
            <input
              type="number"
              id="add-coins"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={coinsToAdd}
              onChange={(e) => setCoinsToAdd(parseInt(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subtract-coins" className="block text-sm">Coins to Subtract</label>
            <input
              type="number"
              id="subtract-coins"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={coinsToSubtract}
              onChange={(e) => setCoinsToSubtract(parseInt(e.target.value))}
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleAddCoin}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Add Coins
            </button>
            <button
              onClick={handleSubtractCoin}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Subtract Coins
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CoinModal;
