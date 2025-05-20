import {
  Bell,
  Calendar,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Send,
  Users,
} from "lucide-react";
import { useState } from "react";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Tab from "../components/ui/Tab";

const Messaging = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedChat, setSelectedChat] = useState(1);

  const tabs = [
    { id: "messages", label: "Messages", icon: <MessageSquare size={16} /> },
    { id: "announcements", label: "Announcements", icon: <Bell size={16} /> },
    { id: "scheduled", label: "Scheduled", icon: <Calendar size={16} /> },
  ];

  const conversations = [
    {
      id: 1,
      name: "Customer Support Team",
      preview: "Has everyone completed the required training?",
      time: "10:24 AM",
      unread: 3,
      avatar: "CS",
    },
    {
      id: 2,
      name: "Emma Thompson",
      preview: "I have a question about the quiz in module 2",
      time: "9:15 AM",
      unread: 0,
      avatar: "ET",
    },
    {
      id: 3,
      name: "Sales Department",
      preview: "New product training will be available next week",
      time: "Yesterday",
      unread: 0,
      avatar: "SD",
    },
    {
      id: 4,
      name: "James Wilson",
      preview: "Could you review my last assignment?",
      time: "Yesterday",
      unread: 2,
      avatar: "JW",
    },
    {
      id: 5,
      name: "Product Team",
      preview: "The latest course has been published",
      time: "Monday",
      unread: 0,
      avatar: "PT",
    },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: "You",
      content:
        "Hello team! Has everyone completed the required compliance training?",
      time: "10:15 AM",
      isAdmin: true,
    },
    {
      id: 2,
      sender: "Sarah Miller",
      content: "Yes, I finished it yesterday. The quiz was quite challenging!",
      time: "10:18 AM",
      isAdmin: false,
    },
    {
      id: 3,
      sender: "David Chen",
      content:
        "Not yet, I'm planning to complete it today. Is there a deadline?",
      time: "10:20 AM",
      isAdmin: false,
    },
    {
      id: 4,
      sender: "You",
      content:
        "The deadline is this Friday. Please make sure to complete it by then.",
      time: "10:22 AM",
      isAdmin: true,
    },
    {
      id: 5,
      sender: "Jessica Kim",
      content:
        "I had some technical issues with the final assessment. Who should I contact for support?",
      time: "10:24 AM",
      isAdmin: false,
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Compliance Training",
      body: "All employees must complete the updated compliance training by June 30th.",
      date: "Jun 15, 2025",
      groups: ["All Staff"],
    },
    {
      id: 2,
      title: "Product Knowledge Course Update",
      body: "The Product Knowledge course has been updated with new features and improvements.",
      date: "Jun 12, 2025",
      groups: ["Sales", "Marketing", "Customer Support"],
    },
    {
      id: 3,
      title: "Leadership Workshop",
      body: `We're hosting a virtual leadership workshop next week. Sign up now to reserve your spot.`,
      date: "Jun 10, 2025",
      groups: ["Management", "Team Leads"],
    },
    {
      id: 4,
      title: "System Maintenance",
      body: "The learning platform will be unavailable for maintenance on Sunday, June 22nd from 2-4 AM.",
      date: "Jun 8, 2025",
      groups: ["All Staff"],
    },
    {
      id: 5,
      title: "New Mobile Learning App",
      body: "Our new mobile learning app is now available for download on iOS and Android.",
      date: "Jun 5, 2025",
      groups: ["All Staff"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messaging</h1>
          <p className="mt-1 text-sm text-gray-500">
            Communicate with learners and groups
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search messages..."
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
            <Plus size={16} className="mr-2" />
            <span>New Message</span>
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

        <div className="p-0">
          {activeTab === "messages" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-230px)]">
              <div className="border-r border-gray-200 overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${
                        selectedChat === conversation.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full ${
                            selectedChat === conversation.id
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-200 text-gray-600"
                          } flex items-center justify-center font-medium`}
                        >
                          {conversation.avatar}
                        </div>
                        <div className="ml-3 flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {conversation.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {conversation.time}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-gray-500 truncate">
                              {conversation.preview}
                            </p>
                            {conversation.unread > 0 && (
                              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                                {conversation.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 flex flex-col h-full">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                      CS
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Customer Support Team
                      </p>
                      <p className="text-xs text-gray-500">24 members</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                      <Users size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isAdmin ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                          message.isAdmin
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {!message.isAdmin && (
                          <p className="text-xs font-medium mb-1">
                            {message.sender}
                          </p>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 text-right ${
                            message.isAdmin ? "text-blue-100" : "text-gray-500"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full mr-2">
                      <Paperclip size={18} />
                    </button>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full ml-2">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "announcements" && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Announcements</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  Create Announcement
                </button>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg text-gray-900">
                          {announcement.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {announcement.body}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {announcement.groups.map((group, index) => (
                            <Badge key={index} color="blue">
                              {group}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {announcement.date}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                        Send Again
                      </button>
                      <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                        Delete
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "scheduled" && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Scheduled Messages</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  Schedule New
                </button>
              </div>

              <div className="bg-white overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recipients
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Scheduled For
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        message: "Reminder: Complete your compliance training",
                        recipients: "All Staff",
                        scheduledFor: "Jun 25, 2025 - 9:00 AM",
                        status: "Scheduled",
                      },
                      {
                        id: 2,
                        message: "New product training is now available",
                        recipients: "Sales Team",
                        scheduledFor: "Jun 28, 2025 - 10:00 AM",
                        status: "Scheduled",
                      },
                      {
                        id: 3,
                        message: "Course feedback survey",
                        recipients: "Leadership Program Participants",
                        scheduledFor: "Jul 2, 2025 - 2:00 PM",
                        status: "Scheduled",
                      },
                      {
                        id: 4,
                        message: "Quarterly training requirements",
                        recipients: "All Staff",
                        scheduledFor: "Jul 5, 2025 - 9:00 AM",
                        status: "Scheduled",
                      },
                      {
                        id: 5,
                        message: "Technical skills assessment reminder",
                        recipients: "Engineering Team",
                        scheduledFor: "Jul 10, 2025 - 11:00 AM",
                        status: "Scheduled",
                      },
                    ].map((message) => (
                      <tr key={message.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {message.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message.recipients}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message.scheduledFor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge color="purple">{message.status}</Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messaging;
