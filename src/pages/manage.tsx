import { useEffect, useState } from "react";

const JSONBIN_URL = "https://api.jsonbin.io/v3/b/689b3ecfae596e708fc82ee9"; // Replace with your Bin ID
const JSONBIN_API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB."; // Replace with your API key

interface Winner {
  id: number;
  fullName: string;
  amount: number;
  status: string;
  gender: string;
}

const ManageWinners = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [newWinner, setNewWinner] = useState<Winner>({
    id: 0,
    fullName: "",
    amount: 0,
    status: "Pending",
    gender: "Male",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    try {
      const response = await fetch(JSONBIN_URL, {
        headers: { "X-Master-Key": JSONBIN_API_KEY },
      });
      const data = await response.json();
      setWinners(data.record);
    } catch (error) {
      console.error("Error fetching winners:", error);
    }
  };

  const handleSaveWinner = async () => {
    if (!newWinner.fullName || newWinner.amount <= 0) return alert("Please enter valid details");

    let updatedWinners: Winner[];

    if (editingId !== null) {
      // Editing existing
      updatedWinners = winners.map(w =>
        w.id === editingId ? { ...newWinner, id: editingId } : w
      );
    } else {
      // Adding new
      updatedWinners = [...winners, { ...newWinner, id: Date.now() }];
    }

    try {
      await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
        },
        body: JSON.stringify(updatedWinners),
      });

      setWinners(updatedWinners);
      setNewWinner({ id: 0, fullName: "", amount: 0, status: "Pending", gender: "Male" });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving winner:", error);
    }
  };

  const handleEditWinner = (winner: Winner) => {
    setNewWinner(winner);
    setEditingId(winner.id);
  };

  const handleRemoveWinner = async (id: number) => {
    const updatedWinners = winners.filter((winner) => winner.id !== id);

    try {
      await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
        },
        body: JSON.stringify(updatedWinners),
      });

      setWinners(updatedWinners);
    } catch (error) {
      console.error("Error removing winner:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">🛠 Manage Winners</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Full Name"
          value={newWinner.fullName}
          onChange={(e) => setNewWinner({ ...newWinner, fullName: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={newWinner.amount}
          onChange={(e) => setNewWinner({ ...newWinner, amount: Number(e.target.value) })}
          className="border p-2 w-full mb-2"
        />
        <select
          value={newWinner.status}
          onChange={(e) => setNewWinner({ ...newWinner, status: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="On Hold">On Hold</option>
        </select>
        <select
          value={newWinner.gender}
          onChange={(e) => setNewWinner({ ...newWinner, gender: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          onClick={handleSaveWinner}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          {editingId !== null ? "Update Winner" : "Add Winner"}
        </button>
      </div>

      <ul>
        {winners.map((winner) => (
          <li key={winner.id} className="flex justify-between items-center border p-2 mb-2">
            <span>
              {winner.fullName} (${winner.amount}) - {winner.status} [{winner.gender}]
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEditWinner(winner)}
                className="bg-blue-600 text-white px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemoveWinner(winner.id)}
                className="bg-red-600 text-white px-2 rounded"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageWinners;
