import { useState } from "react";
import { Search, Settings, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Enhanced earning data with additional details for modal
const earningData = [
  {
    id: "#4567",
    userName: "Rakibul Hasan Khan",
    amount: "$120",
    profit: "$6",
    payable: "$114",
    status: "Pay Now",
    fullName: "Rakibul Hasan Khan",
    accountNumber: "**** **** **** 3545",
    accountHolderName: "mehad",
    requestDate: "10-22-2024",
  },
  {
    id: "#1001",
    userName: "Tanvir Rahman",
    amount: "$120",
    profit: "$6",
    payable: "$114",
    status: "Pay Now",
    fullName: "Tanvir Rahman",
    accountNumber: "**** **** **** 1234",
    accountHolderName: "tanvir",
    requestDate: "10-20-2024",
  },
  {
    id: "#1002",
    userName: "Mehedi Hasan",
    amount: "$150",
    profit: "$7",
    payable: "$143",
    status: "Pay Now",
    fullName: "Mehedi Hasan",
    accountNumber: "**** **** **** 5678",
    accountHolderName: "mehedi",
    requestDate: "10-21-2024",
  },
  {
    id: "#1003",
    userName: "Nusrat Jahan",
    amount: "$180",
    profit: "$9",
    payable: "$171",
    status: "Pay Now",
    fullName: "Nusrat Jahan",
    accountNumber: "**** **** **** 9012",
    accountHolderName: "nusrat",
    requestDate: "10-19-2024",
  },
  {
    id: "#1004",
    userName: "Shamim Ahmed",
    amount: "$130",
    profit: "$6",
    payable: "$124",
    status: "Paid",
    fullName: "Shamim Ahmed",
    accountNumber: "**** **** **** 3456",
    accountHolderName: "shamim",
    requestDate: "10-18-2024",
  },
  {
    id: "#1005",
    userName: "Fahim Sarker",
    amount: "$200",
    profit: "$10",
    payable: "$190",
    status: "Paid",
    fullName: "Fahim Sarker",
    accountNumber: "**** **** **** 7890",
    accountHolderName: "fahim",
    requestDate: "10-17-2024",
  },
  {
    id: "#1006",
    userName: "Sadia Islam",
    amount: "$160",
    profit: "$8",
    payable: "$152",
    status: "Pay Now",
    fullName: "Sadia Islam",
    accountNumber: "**** **** **** 2345",
    accountHolderName: "sadia",
    requestDate: "10-16-2024",
  },
  {
    id: "#1007",
    userName: "Arif Hossain",
    amount: "$190",
    profit: "$9",
    payable: "$181",
    status: "Pay Now",
    fullName: "Arif Hossain",
    accountNumber: "**** **** **** 6789",
    accountHolderName: "arif",
    requestDate: "10-15-2024",
  },
  {
    id: "#1008",
    userName: "Tasnim Akter",
    amount: "$110",
    profit: "$5",
    payable: "$105",
    status: "Paid",
    fullName: "Tasnim Akter",
    accountNumber: "**** **** **** 0123",
    accountHolderName: "tasnim",
    requestDate: "10-14-2024",
  },
  {
    id: "#1009",
    userName: "Mamun Chowdhury",
    amount: "$175",
    profit: "$9",
    payable: "$166",
    status: "Pay Now",
    fullName: "Mamun Chowdhury",
    accountNumber: "**** **** **** 4567",
    accountHolderName: "mamun",
    requestDate: "10-13-2024",
  },
];

const Earning = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 9;

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
    setSelectedRequest(item);
    setIsModalOpen(true);
  };

  const handleProcessPayment = () => {
    if (selectedRequest) {
      alert(
        `Payment processed for ${selectedRequest.userName}: ${selectedRequest.payable}`
      );
      setIsModalOpen(false);
      setSelectedRequest(null);
    }
  };

  // Calculate total payable for current page
  const totalPayableValue = currentPageData.reduce((acc, item) => {
    const value = Number.parseFloat(item.payable.replace("$", ""));
    return acc + value;
  }, 0);

  // Reset to first page when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-black">
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

      {/* Withdraw Request Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-slate-600 text-white max-w-sm mx-auto">
          <DialogHeader className="relative">
            <DialogTitle className="text-center text-lg font-bold text-white mb-6">
              Withdraw Request Details
            </DialogTitle>
            {/* <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 h-8 w-8 bg-red-600 hover:bg-red-700 text-white rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button> */}
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-4">
              {/* Request Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">User ID</span>
                  <span className="text-white font-semibold">
                    {selectedRequest.id}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">Full Name</span>
                  <span className="text-white font-semibold">
                    {selectedRequest.fullName}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">
                    Account Number
                  </span>
                  <span className="text-white font-semibold">
                    {selectedRequest.accountNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">
                    Account Holder Name
                  </span>
                  <span className="text-white font-semibold">
                    {selectedRequest.accountHolderName}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">
                    Payable amount
                  </span>
                  <span className="text-white font-semibold">
                    {selectedRequest.payable}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">
                    Request date
                  </span>
                  <span className="text-white font-semibold">
                    {selectedRequest.requestDate}
                  </span>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="pt-4">
                <Button
                  onClick={handleProcessPayment}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Earning;
