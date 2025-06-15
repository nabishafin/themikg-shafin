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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon, Search, UserIcon, X } from "lucide-react";
// import Image from "next/image"

// Enhanced user data with detailed information
const userData = [
  {
    id: "#4567",
    name: "Rakibul Hasan Khan",
    email: "rakibul.khan@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Rakibul Hasan Khan",
    dateOfBirth: "19 Nov, 2002",
    height: "156 CM",
    weight: "50 Kg",
    location: "Miami, USA",
    phoneNumber: "+880 1827347685",
    ethnicity: "American",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2001",
    name: "Tanvir Rahman",
    email: "tanvir.r@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Tanvir Rahman",
    dateOfBirth: "15 Mar, 1995",
    height: "175 CM",
    weight: "70 Kg",
    location: "Dhaka, Bangladesh",
    phoneNumber: "+880 1712345678",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2002",
    name: "Mehedi Hasan",
    email: "mehedi.h@gmail.com",
    joiningDate: "03-03-2025",
    fullName: "Mehedi Hasan",
    dateOfBirth: "22 Jul, 1998",
    height: "168 CM",
    weight: "65 Kg",
    location: "Chittagong, Bangladesh",
    phoneNumber: "+880 1823456789",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2003",
    name: "Sadia Jahan",
    email: "sadia.j@gmail.com",
    joiningDate: "03-04-2025",
    fullName: "Sadia Jahan",
    dateOfBirth: "10 Dec, 1996",
    height: "160 CM",
    weight: "55 Kg",
    location: "Sylhet, Bangladesh",
    phoneNumber: "+880 1934567890",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2004",
    name: "Nafis Ahmed",
    email: "nafis.a@gmail.com",
    joiningDate: "03-06-2025",
    fullName: "Nafis Ahmed",
    dateOfBirth: "05 Sep, 1997",
    height: "172 CM",
    weight: "68 Kg",
    location: "Rajshahi, Bangladesh",
    phoneNumber: "+880 1645678901",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2005",
    name: "Arifa Sultana",
    email: "arifa.s@gmail.com",
    joiningDate: "03-08-2025",
    fullName: "Arifa Sultana",
    dateOfBirth: "18 Jan, 1999",
    height: "158 CM",
    weight: "52 Kg",
    location: "Khulna, Bangladesh",
    phoneNumber: "+880 1756789012",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#4567",
    name: "Rakibul Hasan Khan",
    email: "rakibul.khan@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Rakibul Hasan Khan",
    dateOfBirth: "19 Nov, 2002",
    height: "156 CM",
    weight: "50 Kg",
    location: "Miami, USA",
    phoneNumber: "+880 1827347685",
    ethnicity: "American",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2001",
    name: "Tanvir Rahman",
    email: "tanvir.r@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Tanvir Rahman",
    dateOfBirth: "15 Mar, 1995",
    height: "175 CM",
    weight: "70 Kg",
    location: "Dhaka, Bangladesh",
    phoneNumber: "+880 1712345678",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2002",
    name: "Mehedi Hasan",
    email: "mehedi.h@gmail.com",
    joiningDate: "03-03-2025",
    fullName: "Mehedi Hasan",
    dateOfBirth: "22 Jul, 1998",
    height: "168 CM",
    weight: "65 Kg",
    location: "Chittagong, Bangladesh",
    phoneNumber: "+880 1823456789",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2003",
    name: "Sadia Jahan",
    email: "sadia.j@gmail.com",
    joiningDate: "03-04-2025",
    fullName: "Sadia Jahan",
    dateOfBirth: "10 Dec, 1996",
    height: "160 CM",
    weight: "55 Kg",
    location: "Sylhet, Bangladesh",
    phoneNumber: "+880 1934567890",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2004",
    name: "Nafis Ahmed",
    email: "nafis.a@gmail.com",
    joiningDate: "03-06-2025",
    fullName: "Nafis Ahmed",
    dateOfBirth: "05 Sep, 1997",
    height: "172 CM",
    weight: "68 Kg",
    location: "Rajshahi, Bangladesh",
    phoneNumber: "+880 1645678901",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2005",
    name: "Arifa Sultana",
    email: "arifa.s@gmail.com",
    joiningDate: "03-08-2025",
    fullName: "Arifa Sultana",
    dateOfBirth: "18 Jan, 1999",
    height: "158 CM",
    weight: "52 Kg",
    location: "Khulna, Bangladesh",
    phoneNumber: "+880 1756789012",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#4567",
    name: "Rakibul Hasan Khan",
    email: "rakibul.khan@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Rakibul Hasan Khan",
    dateOfBirth: "19 Nov, 2002",
    height: "156 CM",
    weight: "50 Kg",
    location: "Miami, USA",
    phoneNumber: "+880 1827347685",
    ethnicity: "American",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2001",
    name: "Tanvir Rahman",
    email: "tanvir.r@gmail.com",
    joiningDate: "03-01-2025",
    fullName: "Tanvir Rahman",
    dateOfBirth: "15 Mar, 1995",
    height: "175 CM",
    weight: "70 Kg",
    location: "Dhaka, Bangladesh",
    phoneNumber: "+880 1712345678",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2002",
    name: "Mehedi Hasan",
    email: "mehedi.h@gmail.com",
    joiningDate: "03-03-2025",
    fullName: "Mehedi Hasan",
    dateOfBirth: "22 Jul, 1998",
    height: "168 CM",
    weight: "65 Kg",
    location: "Chittagong, Bangladesh",
    phoneNumber: "+880 1823456789",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2003",
    name: "Sadia Jahan",
    email: "sadia.j@gmail.com",
    joiningDate: "03-04-2025",
    fullName: "Sadia Jahan",
    dateOfBirth: "10 Dec, 1996",
    height: "160 CM",
    weight: "55 Kg",
    location: "Sylhet, Bangladesh",
    phoneNumber: "+880 1934567890",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2004",
    name: "Nafis Ahmed",
    email: "nafis.a@gmail.com",
    joiningDate: "03-06-2025",
    fullName: "Nafis Ahmed",
    dateOfBirth: "05 Sep, 1997",
    height: "172 CM",
    weight: "68 Kg",
    location: "Rajshahi, Bangladesh",
    phoneNumber: "+880 1645678901",
    ethnicity: "Bangladeshi",
    situation: "Married",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "#2005",
    name: "Arifa Sultana",
    email: "arifa.s@gmail.com",
    joiningDate: "03-08-2025",
    fullName: "Arifa Sultana",
    dateOfBirth: "18 Jan, 1999",
    height: "158 CM",
    weight: "52 Kg",
    location: "Khulna, Bangladesh",
    phoneNumber: "+880 1756789012",
    ethnicity: "Bangladeshi",
    situation: "Single",
    role: "Active",
    avatar: "/placeholder.svg?height=120&width=120",
  },
];

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [joiningDate, setJoiningDate] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const endPage = Math.min(totalFilteredPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black">
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
                        onClick={() => handleViewDetails(user)}
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

      {/* User Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-black border-slate-600 text-white max-w-md mx-auto">
          <DialogHeader className="relative">
            <DialogTitle className="text-center text-xl font-bold text-white mb-6">
              User Details
            </DialogTitle>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-4">
              {/* User Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={
                      selectedUser.id === "#4567"
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q10EaP7LYr5Q0ECQGqB1pWexGaCksP.png"
                        : selectedUser.avatar
                    }
                    alt={selectedUser.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-slate-600 object-cover w-[120px] h-[120px]"
                  />
                </div>
              </div>

              {/* User Information */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">User ID</span>
                  <span className="text-white font-semibold">
                    {selectedUser.id}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Full Name</span>
                  <span className="text-white font-semibold">
                    {selectedUser.fullName}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">
                    Date of Birth
                  </span>
                  <span className="text-white font-semibold">
                    {selectedUser.dateOfBirth}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Height</span>
                  <span className="text-white font-semibold">
                    {selectedUser.height}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Weight</span>
                  <span className="text-white font-semibold">
                    {selectedUser.weight}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Location</span>
                  <span className="text-white font-semibold">
                    {selectedUser.location}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">
                    Phone number
                  </span>
                  <span className="text-white font-semibold">
                    {selectedUser.phoneNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Ethnicity</span>
                  <span className="text-white font-semibold">
                    {selectedUser.ethnicity}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Situation</span>
                  <span className="text-white font-semibold">
                    {selectedUser.situation}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">Role</span>
                  <span className="text-white font-semibold">
                    {selectedUser.role}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
