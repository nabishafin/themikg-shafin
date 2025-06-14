import React, { useState, useEffect } from "react";

const Report = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Cameron Williamson",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Laoreet ultrices nunc amet volutpat. Nec nibh vel tincidunt mattis enim ac turpis nibh. Penatibus imperdiet auctor venenatis nunc sit sed at porttitor ac. Faucibus rutrum.",
    },
    {
      id: 2,
      name: "Darrell Steward",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Darrell Steward.",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Brooklyn Simmons.",
    },
    {
      id: 4,
      name: "Kristin Watson",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Kristin Watson.",
    },
    {
      id: 5,
      name: "Devon Lane",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Devon Lane.",
    },
    {
      id: 6,
      name: "Esther Howard",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Esther Howard.",
    },
    {
      id: 7,
      name: "Julie Jones",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Julie Jones.",
    },
    {
      id: 8,
      name: "Ronald Richards",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Ronald Richards.",
    },
    {
      id: 9,
      name: "Robert Fox",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Robert Fox.",
    },
    {
      id: 10,
      name: "Ahmad Kabir",
      email: "abc100@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sample message content for Ahmad Kabir.",
    },
  ];

  // Set the first user as selected by default
  useEffect(() => {
    setSelectedUser(users[0]);
  }, []);

  return (
    <div className=" bg-black">
      {/* Header */}
      <div className="bg-gray-400 px-6 py-4 rounded-md mb-2">
        <h1 className="text-xl font-semibold text-gray-800">Report</h1>
      </div>

      {/* Main Content */}
      <div className="flex ">
        {/* Left Panel - User List */}
        <div className="w-1/3 bg-black border-r border-gray-600 ">
          <div className="divide-y divide-gray-600">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`p-4 cursor-pointer hover:bg-gray-600 transition-colors ${
                  selectedUser?.id === user.id ? "bg-gray-600" : ""
                }`}
              >
                <div className="text-white font-medium text-sm mb-1">
                  {user.name}
                </div>
                <div className="text-gray-400 text-xs">{user.email}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Message Details */}
        <div className="flex-1 bg-black p-6 overflow-y-auto">
          {selectedUser ? (
            <div>
              {/* User Info */}
              <div className="mb-6">
                <h2 className="text-white text-lg font-medium mb-1">
                  {selectedUser.name}
                </h2>
                <p className="text-gray-400 text-sm">{selectedUser.email}</p>
              </div>

              {/* Message Section */}
              <div>
                <h3 className="text-white text-base mb-4">
                  Here is the Message
                </h3>
                <div className="border-2 border-blue-500 rounded-lg p-4 bg-gray-800">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedUser.message}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">
                Select a user to view their report
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
