import { useEffect, useState } from "react";
import SupportBot from "../components/support";

const JSONBIN_URL = "https://api.jsonbin.io/v3/b/689b3ecfae596e708fc82ee9"; // Replace with your Bin ID
const JSONBIN_API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB."; // Replace with your API key

interface Winner {
  id: number;
  fullName: string;
  amount: number;
  status: string;
  gender: string;
}

const Winners = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // 🔍 Search state

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await fetch(JSONBIN_URL, {
          headers: { "X-Master-Key": JSONBIN_API_KEY },
        });
        const data = await response.json();
        setWinners(data.record); // JSONBin stores data inside 'record'
      } catch (error) {
        console.error("Error fetching winners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);

  // 🔍 Filter winners by name
  const filteredWinners = winners.filter((winner) =>
    winner.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">🏆 Winners List</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Full Name</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredWinners.length > 0 ? (
              filteredWinners.map((winner) => (
                <tr key={winner.id} className="text-center">
                  <td className="border p-2">{winner.fullName}</td>
                  <td className="border p-2">${winner.amount}</td>
                  <td className="border p-2">{winner.status}</td>
                  <td className="border p-2">{winner.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 p-4">
                  No winners found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
    <SupportBot/>
    </>
  );
};

export default Winners;
