import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Plus,
  Search,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import Card from "../components/ui/Card";
import Tab from "../components/ui/Tab";

const Learning = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const tabs = [
    { id: "courses", label: "Courses", icon: <BookOpen size={16} /> },
    { id: "assignments", label: "Assignments", icon: <Calendar size={16} /> },
    { id: "groups", label: "Learner Groups", icon: <Users size={16} /> },
    { id: "mentors", label: "Mentors", icon: <User size={16} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Learning Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Assign courses, create groups, and manage learners
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center">
            <Search size={16} className="mr-2" />
            <span>Search</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
            <Plus size={16} className="mr-2" />
            <span>Create New</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "courses" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Available Courses</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  Add Course
                </button>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    title: "Customer Service Excellence",
                    participants: 43,
                    modules: 8,
                    duration: "4 hours",
                  },
                  {
                    id: 2,
                    title: "Leadership Fundamentals",
                    participants: 28,
                    modules: 12,
                    duration: "6 hours",
                  },
                  {
                    id: 3,
                    title: "Technical Onboarding",
                    participants: 16,
                    modules: 6,
                    duration: "3 hours",
                  },
                  {
                    id: 4,
                    title: "Compliance Training",
                    participants: 97,
                    modules: 4,
                    duration: "2 hours",
                  },
                  {
                    id: 5,
                    title: "Product Knowledge",
                    participants: 35,
                    modules: 10,
                    duration: "5 hours",
                  },
                  {
                    id: 6,
                    title: "Sales Techniques",
                    participants: 22,
                    modules: 7,
                    duration: "3.5 hours",
                  },
                ].map((course) => (
                  <Card
                    key={course.id}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-2 w-full bg-blue-500 absolute top-0 left-0 right-0 rounded-t-lg"></div>
                    <div className="pt-4">
                      <h3 className="font-medium text-gray-900">
                        {course.title}
                      </h3>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-1" />
                        <span>{course.participants} participants</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <BookOpen size={16} className="mr-1" />
                        <span>{course.modules} modules</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                          Assign
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          View
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "groups" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Learner Groups</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <UserPlus size={16} className="mr-1" />
                  Create Group
                </button>
              </div>
              <div className="bg-white overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Group Name
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Members
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assigned Courses
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mentor
                      </th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        name: "Sales Team",
                        members: 24,
                        courses: 5,
                        mentor: "James Wilson",
                      },
                      {
                        id: 2,
                        name: "Customer Support",
                        members: 36,
                        courses: 7,
                        mentor: "Emma Thompson",
                      },
                      {
                        id: 3,
                        name: "Engineering",
                        members: 18,
                        courses: 4,
                        mentor: "David Chen",
                      },
                      {
                        id: 4,
                        name: "Marketing",
                        members: 12,
                        courses: 3,
                        mentor: "Sarah Johnson",
                      },
                      {
                        id: 5,
                        name: "Product Management",
                        members: 8,
                        courses: 6,
                        mentor: "Michael Lee",
                      },
                    ].map((group) => (
                      <tr key={group.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium">
                                {group.name.substring(0, 2)}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {group.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {group.members} members
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {group.courses} courses
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {group.mentor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            Edit
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Course Assignments</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  New Assignment
                </button>
              </div>
              <div className="bg-white overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assigned To
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Date
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        End Date
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                      </th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        course: "Customer Service Excellence",
                        assignedTo: "Customer Support",
                        type: "Group",
                        startDate: "12 Jun 2025",
                        endDate: "26 Jun 2025",
                        points: 100,
                      },
                      {
                        id: 2,
                        course: "Leadership Fundamentals",
                        assignedTo: "Emma Thompson",
                        type: "Individual",
                        startDate: "15 Jun 2025",
                        endDate: "29 Jun 2025",
                        points: 150,
                      },
                      {
                        id: 3,
                        course: "Technical Onboarding",
                        assignedTo: "Engineering",
                        type: "Group",
                        startDate: "18 Jun 2025",
                        endDate: "02 Jul 2025",
                        points: 120,
                      },
                      {
                        id: 4,
                        course: "Compliance Training",
                        assignedTo: "All Staff",
                        type: "Role",
                        startDate: "20 Jun 2025",
                        endDate: "27 Jun 2025",
                        points: 80,
                      },
                      {
                        id: 5,
                        course: "Product Knowledge",
                        assignedTo: "Sales Team",
                        type: "Group",
                        startDate: "01 Jul 2025",
                        endDate: "15 Jul 2025",
                        points: 100,
                      },
                    ].map((assignment) => (
                      <tr key={assignment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {assignment.course}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <span>{assignment.assignedTo}</span>
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              {assignment.type}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {assignment.startDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {assignment.endDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Award size={16} className="text-amber-500 mr-1" />
                            <span>{assignment.points}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "mentors" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Mentors</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <UserPlus size={16} className="mr-1" />
                  Add Mentor
                </button>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    name: "James Wilson",
                    role: "Sales Director",
                    groups: 2,
                    image: "JW",
                  },
                  {
                    id: 2,
                    name: "Emma Thompson",
                    role: "Customer Support Lead",
                    groups: 3,
                    image: "ET",
                  },
                  {
                    id: 3,
                    name: "David Chen",
                    role: "Engineering Manager",
                    groups: 1,
                    image: "DC",
                  },
                  {
                    id: 4,
                    name: "Sarah Johnson",
                    role: "Marketing Director",
                    groups: 2,
                    image: "SJ",
                  },
                  {
                    id: 5,
                    name: "Michael Lee",
                    role: "Product Director",
                    groups: 2,
                    image: "ML",
                  },
                  {
                    id: 6,
                    name: "Jessica Kim",
                    role: "HR Manager",
                    groups: 3,
                    image: "JK",
                  },
                ].map((mentor) => (
                  <Card
                    key={mentor.id}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl text-blue-600 font-medium">
                        {mentor.image}
                      </div>
                      <h3 className="mt-3 font-medium text-gray-900">
                        {mentor.name}
                      </h3>
                      <p className="text-sm text-gray-500">{mentor.role}</p>
                      <div className="mt-3 text-xs text-gray-500">
                        Mentoring {mentor.groups} groups
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                          View Groups
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Edit
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learning;
