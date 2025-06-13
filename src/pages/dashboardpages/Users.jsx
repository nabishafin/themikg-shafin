import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Search, UserIcon } from "lucide-react";

// Sample user data with 10 unique users
const userData = [
  {
    id: "#2001",
    name: "Tanvir Rahman",
    email: "tanvir.r@gmail.com",
    joiningDate: "03-01-2025",
  },
  {
    id: "#2002",
    name: "Mehedi Hasan",
    email: "mehedi.h@gmail.com",
    joiningDate: "03-03-2025",
  },
  {
    id: "#2003",
    name: "Sadia Jahan",
    email: "sadia.j@gmail.com",
    joiningDate: "03-04-2025",
  },
  {
    id: "#2004",
    name: "Nafis Ahmed",
    email: "nafis.a@gmail.com",
    joiningDate: "03-06-2025",
  },
  {
    id: "#2005",
    name: "Arifa Sultana",
    email: "arifa.s@gmail.com",
    joiningDate: "03-08-2025",
  },
  {
    id: "#2006",
    name: "Shuvo Roy",
    email: "shuvo.r@gmail.com",
    joiningDate: "03-09-2025",
  },
  {
    id: "#2007",
    name: "Tanjim Tuhin",
    email: "tanjim.t@gmail.com",
    joiningDate: "03-11-2025",
  },
  {
    id: "#2008",
    name: "Bushra Noor",
    email: "bushra.n@gmail.com",
    joiningDate: "03-13-2025",
  },
  {
    id: "#2009",
    name: "Asif Mahmud",
    email: "asif.m@gmail.com",
    joiningDate: "03-15-2025",
  },
  {
    id: "#2010",
    name: "Sumaiya Akter",
    email: "sumaiya.a@gmail.com",
    joiningDate: "03-17-2025",
  },
  {
    id: "#2011",
    name: "Farhan Kabir",
    email: "farhan.k@gmail.com",
    joiningDate: "03-18-2025",
  },
  {
    id: "#2012",
    name: "Sultana Begum",
    email: "sultana.b@gmail.com",
    joiningDate: "03-19-2025",
  },
  {
    id: "#2013",
    name: "Raihan Hossain",
    email: "raihan.h@gmail.com",
    joiningDate: "03-20-2025",
  },
  {
    id: "#2014",
    name: "Lamia Hossain",
    email: "lamia.h@gmail.com",
    joiningDate: "03-22-2025",
  },
  {
    id: "#2015",
    name: "Kazi Nayeem",
    email: "kazi.n@gmail.com",
    joiningDate: "03-23-2025",
  },
  {
    id: "#2016",
    name: "Imran Kabir",
    email: "imran.k@gmail.com",
    joiningDate: "03-24-2025",
  },
  {
    id: "#2017",
    name: "Afia Chowdhury",
    email: "afia.c@gmail.com",
    joiningDate: "03-25-2025",
  },
  {
    id: "#2018",
    name: "Nadim Alvi",
    email: "nadim.a@gmail.com",
    joiningDate: "03-26-2025",
  },
  {
    id: "#2019",
    name: "Shamima Nasrin",
    email: "shamima.n@gmail.com",
    joiningDate: "03-27-2025",
  },
  {
    id: "#2020",
    name: "Sayeed Bin Osman",
    email: "sayeed.o@gmail.com",
    joiningDate: "03-28-2025",
  },
];

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [joiningDate, setJoiningDate] = useState("");
  const [userName, setUserName] = useState("");
  const itemsPerPage = 12;

  // Filtered users
  const filteredUsers = userData.filter((user) => {
    const matchesDate = joiningDate
      ? user.joiningDate.includes(joiningDate)
      : true;
    const matchesName = userName
      ? user.name.toLowerCase().includes(userName.toLowerCase())
      : true;
    return matchesDate && matchesName;
  });

  const totalFilteredPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers with limits to prevent too many buttons
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalFilteredPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" bg-black ">
      <Card className="bg-gradient-to-b from-[#282828] to-black border-slate-700">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-white text-xl font-semibold">
              User List
            </CardTitle>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="MM-DD-YYYY"
                  value={joiningDate}
                  onChange={(e) => {
                    setJoiningDate(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 w-full sm:w-40"
                />
              </div>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 w-full sm:w-40"
                />
              </div>
              <Button size="icon" className="bg-slate-600 hover:bg-slate-500">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-600 hover:bg-slate-600/50">
                <TableHead className="text-cyan-400 font-semibold w-[100px]">
                  ID
                </TableHead>
                <TableHead className="text-cyan-400 font-semibold">
                  Name
                </TableHead>
                <TableHead className="text-cyan-400 font-semibold">
                  Email
                </TableHead>
                <TableHead className="text-cyan-400 font-semibold">
                  Joining Date
                </TableHead>
                <TableHead className="text-cyan-400 font-semibold w-[150px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className="border-slate-600 hover:bg-slate-600/30"
                  >
                    <TableCell className="text-white font-medium">
                      {user.id}
                    </TableCell>
                    <TableCell className="text-white">{user.name}</TableCell>
                    <TableCell className="text-white">{user.email}</TableCell>
                    <TableCell className="text-white">
                      {user.joiningDate}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 text-xs"
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-white text-center py-8"
                  >
                    No users found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          {filteredUsers.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                First
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>

              {startPage > 1 && (
                <span className="text-white px-2 py-1">...</span>
              )}

              {pageNumbers.map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={
                    currentPage === page
                      ? "bg-slate-500 text-white"
                      : "bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}

              {endPage < totalFilteredPages && (
                <span className="text-white px-2 py-1">...</span>
              )}

              <Button
                variant="outline"
                size="sm"
                className="bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                disabled={currentPage === totalFilteredPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                disabled={currentPage === totalFilteredPages}
                onClick={() => setCurrentPage(totalFilteredPages)}
              >
                Last
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
