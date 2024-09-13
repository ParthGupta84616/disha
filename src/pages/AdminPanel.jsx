import React, { useState, useEffect, useMemo } from "react";

// Utility functions
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomEmail(name) {
  const domains = ["example.com", "test.com", "sample.com"];
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${name
    .replace(/\s+/g, "")
    .toLowerCase()}${randomNumber}@${getRandomElement(domains)}`;
}

function generateRandomUser(id) {
  const names = [
    "Aarav Patel",
    "Vivaan Sharma",
    "Aditya Verma",
    "Vihaan Gupta",
    "Arjun Rao",
    "Reyansh Singh",
    "Ayaan Kapoor",
    "Ishaan Mehta",
    "Kartik Agarwal",
    "Nishant Desai",
    "Ravi Kumar",
    "Amit Shah",
    "Siddharth Joshi",
    "Manav Reddy",
    "Rohan Nair",
    "Kabir Bhatia",
    "Suryansh Yadav",
    "Pranav Kumar",
    "Tanmay Singh",
    "Aryan Patel",
  ];
  const universities = [
    "IIT Bombay",
    "IIT Delhi",
    "IIT Kanpur",
    "NIT Trichy",
    "BITS Pilani",
  ];
  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ];
  const roles = ["Student", "Alumni", "Faculty"];

  return {
    name: getRandomElement(names),
    email: generateRandomEmail("User" + id),
    university: getRandomElement(universities),
    department: getRandomElement(departments),
    status: "Pending",
    role: getRandomElement(roles),
    imgSrc: `https://source.unsplash.com/random/50x50?sig=${id}`,
  };
}

const generateUsers = () =>
  Array.from({ length: 20 }, (_, index) => generateRandomUser(index + 1));

function AdminPanel() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : generateUsers();
  });
  const [acceptedUsers, setAcceptedUsers] = useState(() => {
    const savedAcceptedUsers = localStorage.getItem("acceptedUsers");
    return savedAcceptedUsers ? JSON.parse(savedAcceptedUsers) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("acceptedUsers", JSON.stringify(acceptedUsers));
  }, [users, acceptedUsers]);

  const handleAcceptUser = (userEmail) => {
    setUsers((prevUsers) => {
      const userIndex = prevUsers.findIndex((user) => user.email === userEmail);
      if (userIndex === -1) return prevUsers;

      const updatedUsers = [...prevUsers];
      const [acceptedUser] = updatedUsers.splice(userIndex, 1);
      acceptedUser.status = "Verified";

      setAcceptedUsers((prevAcceptedUsers) => [
        ...prevAcceptedUsers,
        acceptedUser,
      ]);
      return updatedUsers;
    });
  };

  const handleRejectUser = (userEmail) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== userEmail)
    );
  };

  const filteredUsers = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        user.role.toLowerCase().includes(lowerCaseSearchTerm) ||
        user.university.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [users, searchTerm]);

  const usersByRole = useMemo(
    () => ({
      Faculty: filteredUsers.filter((user) => user.role === "Faculty"),
      Alumni: filteredUsers.filter((user) => user.role === "Alumni"),
      Student: filteredUsers.filter((user) => user.role === "Student"),
    }),
    [filteredUsers]
  );

  const acceptedUsersByRole = useMemo(
    () => ({
      Faculty: acceptedUsers.filter((user) => user.role === "Faculty"),
      Alumni: acceptedUsers.filter((user) => user.role === "Alumni"),
      Student: acceptedUsers.filter((user) => user.role === "Student"),
    }),
    [acceptedUsers]
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const Sidebar = ({ usersByRole = {} }) => {
    const [openSection, setOpenSection] = useState(null);

    const handleToggle = (section) => {
      setOpenSection(openSection === section ? null : section);
    };

    const roles = ["Student", "Alumni", "Faculty"];

    return (
      <div
        className={`bg-gray-900 text-white h-full flex-shrink-0 ${
          isSidebarOpen ? "w-64" : "w-24"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 bg-gray-900">
            <span
              className={`text-white font-bold uppercase transition-opacity duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Admin Panel
            </span>
            <button
              className="text-gray-400 hover:text-gray-300"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4">
              {roles.map((role) => (
                <div key={role} className="mb-2">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-2 text-gray-100 bg-gray-900 hover:bg-gray-700 ${
                      !isSidebarOpen && "hidden"
                    }`}
                    onClick={() => handleToggle(role)}
                  >
                    <span
                      className={`font-bold transition-transform duration-300 ${
                        isSidebarOpen ? "scale-100" : "scale-0"
                      }`}
                    >
                      {role} Users
                    </span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        openSection === role ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openSection === role && isSidebarOpen && (
                    <div className="mt-2 bg-gray-800 rounded-md">
                      {usersByRole[role] && usersByRole[role].length > 0 ? (
                        usersByRole[role].map((user, index) => (
                          <a
                            key={index}
                            href="/"
                            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-600"
                          >
                            <img
                              className="h-6 w-6 mr-2 rounded-full"
                              src={user.imgSrc}
                              alt={user.name}
                            />
                            {user.name}
                          </a>
                        ))
                      ) : (
                        <p className="px-4 py-2 text-gray-400">
                          No {role.toLowerCase()} users
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar usersByRole={acceptedUsersByRole} />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-gray-800 border-b border-gray-700 px-4 py-6">
          <input
            className="w-full border rounded-md px-4 py-2 bg-gray-700 text-gray-200"
            type="text"
            placeholder="Search by name, role, or university"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  University
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.email}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imgSrc}
                          alt={user.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-100">
                      {user.university}
                    </div>
                    <div className="text-sm text-gray-400">
                      {user.department}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Verified"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleAcceptUser(user.email)}
                      className="text-green-400 hover:text-green-300"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectUser(user.email)}
                      className="text-red-400 hover:text-red-300 ml-4"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
