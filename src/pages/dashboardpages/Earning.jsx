import { useState } from "react";
import { Search, Settings } from "lucide-react";

// Sample earning data
const earningData = [
  {
    id: "#1001",
    userName: "Tanvir Rahman",
    amount: "$120",
    profit: "$6",
    payable: "$114",
    status: "Pay Now",
  },
  {
    id: "#1002",
    userName: "Mehedi Hasan",
    amount: "$150",
    profit: "$7",
    payable: "$143",
    status: "Pay Now",
  },
  {
    id: "#1003",
    userName: "Nusrat Jahan",
    amount: "$180",
    profit: "$9",
    payable: "$171",
    status: "Pay Now",
  },
  {
    id: "#1004",
    userName: "Shamim Ahmed",
    amount: "$130",
    profit: "$6",
    payable: "$124",
    status: "Paid",
  },
  {
    id: "#1005",
    userName: "Fahim Sarker",
    amount: "$200",
    profit: "$10",
    payable: "$190",
    status: "Paid",
  },
  {
    id: "#1006",
    userName: "Sadia Islam",
    amount: "$160",
    profit: "$8",
    payable: "$152",
    status: "Pay Now",
  },
  {
    id: "#1007",
    userName: "Arif Hossain",
    amount: "$190",
    profit: "$9",
    payable: "$181",
    status: "Pay Now",
  },
  {
    id: "#1008",
    userName: "Tasnim Akter",
    amount: "$110",
    profit: "$5",
    payable: "$105",
    status: "Paid",
  },
  {
    id: "#1009",
    userName: "Mamun Chowdhury",
    amount: "$175",
    profit: "$9",
    payable: "$166",
    status: "Pay Now",
  },
  {
    id: "#1010",
    userName: "Jannat Ferdous",
    amount: "$140",
    profit: "$7",
    payable: "$133",
    status: "Paid",
  },
  {
    id: "#1011",
    userName: "Imran Kabir",
    amount: "$125",
    profit: "$6",
    payable: "$119",
    status: "Pay Now",
  },
  {
    id: "#1012",
    userName: "Sultana Begum",
    amount: "$135",
    profit: "$7",
    payable: "$128",
    status: "Paid",
  },
  {
    id: "#1013",
    userName: "Asif Mahmud",
    amount: "$145",
    profit: "$7",
    payable: "$138",
    status: "Pay Now",
  },
  {
    id: "#1014",
    userName: "Rabeya Sultana",
    amount: "$165",
    profit: "$8",
    payable: "$157",
    status: "Pay Now",
  },
  {
    id: "#1015",
    userName: "Tanjim Tuhin",
    amount: "$155",
    profit: "$7",
    payable: "$148",
    status: "Paid",
  },
  {
    id: "#1016",
    userName: "Kazi Nayeem",
    amount: "$170",
    profit: "$9",
    payable: "$161",
    status: "Pay Now",
  },
  {
    id: "#1017",
    userName: "Lamia Hossain",
    amount: "$185",
    profit: "$10",
    payable: "$175",
    status: "Paid",
  },
  {
    id: "#1018",
    userName: "Shuvo Roy",
    amount: "$190",
    profit: "$10",
    payable: "$180",
    status: "Paid",
  },
  {
    id: "#1019",
    userName: "Sumaiya Akter",
    amount: "$195",
    profit: "$10",
    payable: "$185",
    status: "Pay Now",
  },
  {
    id: "#1020",
    userName: "Tariqul Islam",
    amount: "$200",
    profit: "$10",
    payable: "$190",
    status: "Paid",
  },
  {
    id: "#1021",
    userName: "Afia Chowdhury",
    amount: "$115",
    profit: "$5",
    payable: "$110",
    status: "Pay Now",
  },
  {
    id: "#1022",
    userName: "Nadim Alvi",
    amount: "$175",
    profit: "$9",
    payable: "$166",
    status: "Pay Now",
  },
  {
    id: "#1023",
    userName: "Rafiul Islam",
    amount: "$185",
    profit: "$9",
    payable: "$176",
    status: "Paid",
  },
  {
    id: "#1024",
    userName: "Sanjida Tabassum",
    amount: "$195",
    profit: "$10",
    payable: "$185",
    status: "Pay Now",
  },
  {
    id: "#1025",
    userName: "Nahid Parvez",
    amount: "$125",
    profit: "$6",
    payable: "$119",
    status: "Paid",
  },
  {
    id: "#1026",
    userName: "Mahfuz Alam",
    amount: "$160",
    profit: "$8",
    payable: "$152",
    status: "Pay Now",
  },
  {
    id: "#1027",
    userName: "Bushra Noor",
    amount: "$145",
    profit: "$7",
    payable: "$138",
    status: "Paid",
  },
  {
    id: "#1028",
    userName: "Rashed Khan",
    amount: "$135",
    profit: "$6",
    payable: "$129",
    status: "Pay Now",
  },
  {
    id: "#1029",
    userName: "Shamima Nasrin",
    amount: "$155",
    profit: "$8",
    payable: "$147",
    status: "Pay Now",
  },
  {
    id: "#1030",
    userName: "Sayeed Bin Osman",
    amount: "$170",
    profit: "$9",
    payable: "$161",
    status: "Paid",
  },
];

const Earning = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 9; // Changed from 8 to 10

  const filteredData = earningData.filter((item) =>
    item.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const totalAmount = "$2,300";
  const withdrawableAmount = "$2,300";
  const totalProfit = "$2,300";
  const percentage = "15%";

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 8; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 4) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 7; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(2);
        pages.push(3);
        pages.push(4);
        pages.push(5);
        pages.push(6);
        pages.push(7);
        pages.push(8);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePayNow = (item) => {
    alert(`Processing payment for ${item.userName}: ${item.payable}`);
  };

  // Calculate total payable for current page
  const totalPayableValue = currentPageData.reduce((acc, item) => {
    const value = parseFloat(item.payable.replace("$", ""));
    return acc + value;
  }, 0);

  // Reset to first page when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className=" bg-black ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-b from-[#282828] to-black rounded-lg p-4 border border-gray-500">
          <div className="text-gray-300 text-sm font-medium mb-1">
            Total Amount
          </div>
          <div className="text-cyan-400 text-2xl font-bold">{totalAmount}</div>
        </div>

        <div className="bg-gradient-to-b from-[#282828] to-black rounded-lg p-4 border border-gray-500">
          <div className="text-gray-300 text-sm font-medium mb-1">
            Withdrawable
          </div>
          <div className="text-cyan-400 text-2xl font-bold">
            {withdrawableAmount}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#282828] to-black rounded-lg p-4 border border-gray-500">
          <div className="text-gray-300 text-sm font-medium mb-1">
            Total Profit
          </div>
          <div className="text-cyan-400 text-2xl font-bold">{totalProfit}</div>
        </div>

        <div className="bg-gradient-to-b from-[#282828] to-black rounded-lg p-4 flex items-center justify-between border border-gray-500">
          <div>
            <div className="text-gray-300 text-sm font-medium mb-1">
              Percentage
            </div>
            <div className="text-cyan-400 text-2xl font-bold">{percentage}</div>
          </div>
          <Settings className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-gradient-to-b from-[#282828] to-black border border-gray-600 rounded-lg">
        <div className="p-4 pb-4 border-b border-gray-600">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-lg font-medium">Withdraw request</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="User Name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-4 pr-10 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder:text-gray-400 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    SI NO.
                  </th>
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    User Name
                  </th>
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    Amount
                  </th>
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    Profit
                  </th>
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    Payable
                  </th>
                  <th className="text-left text-cyan-400 font-medium py-3 px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-600 hover:bg-gray-600/30 transition-colors"
                  >
                    <td className="text-white font-medium py-3 px-4">
                      {item.id}
                    </td>
                    <td className="text-white py-3 px-4">{item.userName}</td>
                    <td className="text-white py-3 px-4">{item.amount}</td>
                    <td className="text-white py-3 px-4">{item.profit}</td>
                    <td className="text-white py-3 px-4">{item.payable}</td>
                    <td className="py-3 px-4">
                      {item.status === "Pay Now" ? (
                        <button
                          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 text-xs rounded transition-colors"
                          onClick={() => handlePayNow(item)}
                        >
                          Pay Now
                        </button>
                      ) : (
                        <button
                          className="bg-gray-600 text-white px-4 py-1 text-xs rounded opacity-50 cursor-not-allowed"
                          disabled
                        >
                          Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {/* Total Payable Row */}
                <tr className="border-t border-gray-600">
                  <td
                    colSpan={4}
                    className="text-right text-cyan-400 font-semibold py-3 px-4"
                  >
                    Total Payable (Current Page):
                  </td>
                  <td className="text-cyan-400 font-bold py-3 px-4">
                    ${totalPayableValue.toFixed(0)}
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              className="px-3 py-1 text-sm bg-gray-600 border border-gray-500 text-white hover:bg-gray-500 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            {generatePageNumbers().map((page, index) => (
              <button
                key={index}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  currentPage === page
                    ? "bg-cyan-600 text-white hover:bg-cyan-700"
                    : "bg-gray-600 border border-gray-500 text-white hover:bg-gray-500"
                } ${page === "..." ? "cursor-default" : ""}`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}

            <button
              className="px-3 py-1 text-sm bg-cyan-600 border border-cyan-500 text-white hover:bg-cyan-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
