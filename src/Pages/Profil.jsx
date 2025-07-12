import { useState, useEffect } from "react";

 function Profil() {
      const [users, setUsers] = useState([]);
      const [selectedUserId, setSelectedUserId] = useState(null);

      useEffect(() => {
        setUsers([
          {
            id: 1,
            name: "Alice",
            operations: [
              { expression: "2 + 3", result: 2 + 3 },
              { expression: "4 * 5", result: 4 * 5 },
              { expression: "10 - 2", result: 10 - 2 },
            ],
          },
          {
            id: 2,
            name: "Bob",
            operations: [
              { expression: "7 - 1", result: 7 - 1 },
              { expression: "8 / 2", result: 8 / 2 },
              { expression: "3 * 3", result: 3 * 3 },
            ],
          },
          {
            id: 3,
            name: "Charlie",
            operations: [
              { expression: "5 + 5", result: 5 + 5 },
              { expression: "6 * 2", result: 6 * 2 },
              { expression: "12 - 4", result: 12 - 4 },
            ],
          },
        ]);
      }, []);

      const handleClick = (id) => {
        setSelectedUserId((prev) => (prev === id ? null : id));
      };

      return (
        <div className="min-h-screen flex flex-col items-center  px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profil</h1>
          <p className="text-lg text-gray-600 mb-8">Cliquez sur un nom pour voir ses opérations :</p>
          <div className="w-full max-w-2xl space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div
                  onClick={() => handleClick(user.id)}
                  className="cursor-pointer bg-gray-200 p-4 font-semibold text-gray-800 hover:bg-gray-300 transition-colors duration-300"
                >
                  {user.name}
                </div>
                {selectedUserId === user.id && (
                  <ul className="p-4 space-y-2">
                    {user.operations.map((op, index) => (
                      <li key={index} className="text-gray-700">
                        ➤ <strong>{op.expression}</strong> = <span>{op.result}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Profil;
