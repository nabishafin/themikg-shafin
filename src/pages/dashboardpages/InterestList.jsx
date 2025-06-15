import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InterestList = () => {
  const [interests, setInterests] = useState([
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
    "Fishing",
  ]);
  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const handleRemoveInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddInterest();
    }
  };

  return (
    <div className=" bg-black">
      {/* Header */}
      <div className="bg-gray-400 px-6 py-4 rounded-md">
        <h1 className="text-xl font-semibold text-gray-800">Interest list</h1>
      </div>

      {/* Content */}
      <div className="bg-black mt-4 ">
        {/* Add New Interest Section */}
        <div className="mb-8">
          <h2 className="text-white text-lg mb-4">Add New Interest</h2>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Create here"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            />
            <Button
              onClick={handleAddInterest}
              className="bg-[#3D96C9] hover:bg-[#5a8eac] text-white px-6"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* View All Interests Section */}
        <div>
          <h2 className="text-white text-lg mb-4">View all Interest</h2>
          <div className="flex flex-wrap gap-3 ">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-black border border-gray-600 text-white px-3 py-2 rounded-md flex items-center gap-2 text-sm"
              >
                <span>{interest}</span>
                <button
                  onClick={() => handleRemoveInterest(index)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestList;
