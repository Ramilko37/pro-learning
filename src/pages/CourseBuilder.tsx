import {
  AlignLeft,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  Edit3,
  FileText,
  Film,
  Image,
  ListChecks,
  Plus,
} from "lucide-react";
import { useState } from "react";
import Card from "../components/ui/Card";
import Tab from "../components/ui/Tab";

const CourseBuilder = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Course Design", icon: <Edit3 size={16} /> },
    { id: "tests", label: "Tests & Quizzes", icon: <ListChecks size={16} /> },
    { id: "templates", label: "Templates", icon: <Copy size={16} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Course Builder</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and edit training content
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center">
            <Clock size={16} className="mr-2" />
            <span>Drafts</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
            <Plus size={16} className="mr-2" />
            <span>New Course</span>
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
          {activeTab === "design" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Card>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Course Structure
                  </h3>
                  <div className="space-y-2">
                    <div className="p-2 bg-blue-50 border-l-4 border-blue-500 rounded flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <ChevronDown
                            size={16}
                            className="mr-2 text-blue-600"
                          />
                          <span className="font-medium">Introduction</span>
                        </div>
                      </div>
                    </div>

                    <div className="pl-6">
                      <div className="p-2 bg-gray-50 border-l-4 border-gray-300 rounded flex items-center">
                        <div className="flex-1 text-sm">Welcome</div>
                      </div>
                    </div>

                    <div className="pl-6">
                      <div className="p-2 bg-gray-50 border-l-4 border-gray-300 rounded flex items-center">
                        <div className="flex-1 text-sm">Course Objectives</div>
                      </div>
                    </div>

                    <div className="p-2 border-l-4 border-gray-200 rounded flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <ChevronRight
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span className="font-medium">
                            Module 1: Fundamentals
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 border-l-4 border-gray-200 rounded flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <ChevronRight
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span className="font-medium">
                            Module 2: Advanced Concepts
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 border-l-4 border-gray-200 rounded flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <ChevronRight
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span className="font-medium">
                            Module 3: Practical Applications
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 border-l-4 border-gray-200 rounded flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <ChevronRight
                            size={16}
                            className="mr-2 text-gray-400"
                          />
                          <span className="font-medium">Final Assessment</span>
                        </div>
                      </div>
                    </div>

                    <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <Plus size={16} className="mr-2" />
                      <span>Add Module</span>
                    </button>
                  </div>
                </Card>
              </div>

              <div className="md:col-span-2">
                <Card>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">
                      Content Editor
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                        Preview
                      </button>
                      <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 mb-4">
                    <input
                      type="text"
                      className="w-full p-2 border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue-500 text-xl font-medium"
                      placeholder="Module Title"
                      defaultValue="Introduction"
                    />
                  </div>

                  <div className="flex space-x-1 border-b border-gray-200 mb-4">
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent">
                      <AlignLeft size={16} className="inline mr-1" /> Text
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent">
                      <Image size={16} className="inline mr-1" /> Image
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent">
                      <Film size={16} className="inline mr-1" /> Video
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent">
                      <FileText size={16} className="inline mr-1" /> Attachment
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent">
                      <ListChecks size={16} className="inline mr-1" /> Quiz
                    </button>
                  </div>

                  <div className="mb-4">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md min-h-[250px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter content here..."
                      defaultValue="Welcome to this course! In this introduction, we'll cover the basic concepts and set expectations for what you'll learn throughout the program."
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <BrainCircuit size={20} className="text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">
                          AI Content Assistant
                        </h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>Try these options to enhance your content:</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <button className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                              Expand content
                            </button>
                            <button className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                              Simplify language
                            </button>
                            <button className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                              Add examples
                            </button>
                            <button className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                              Create summary
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Back
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Continue
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "tests" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Tests & Quizzes</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  Create New Test
                </button>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    title: "Final Assessment",
                    questions: 15,
                    type: "Multiple Choice",
                    time: "30 min",
                  },
                  {
                    id: 2,
                    title: "Module 1 Quiz",
                    questions: 8,
                    type: "Multiple Choice",
                    time: "15 min",
                  },
                  {
                    id: 3,
                    title: "Knowledge Check",
                    questions: 5,
                    type: "True/False",
                    time: "10 min",
                  },
                  {
                    id: 4,
                    title: "Skills Assessment",
                    questions: 12,
                    type: "Mixed",
                    time: "25 min",
                  },
                  {
                    id: 5,
                    title: "Feedback Survey",
                    questions: 10,
                    type: "Open-ended",
                    time: "20 min",
                  },
                  {
                    id: 6,
                    title: "Quick Check",
                    questions: 3,
                    type: "Single Choice",
                    time: "5 min",
                  },
                ].map((test) => (
                  <Card
                    key={test.id}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-2 w-full bg-purple-500 absolute top-0 left-0 right-0 rounded-t-lg"></div>
                    <div className="pt-4">
                      <h3 className="font-medium text-gray-900">
                        {test.title}
                      </h3>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <ListChecks size={16} className="mr-1" />
                        <span>{test.questions} questions</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <AlignLeft size={16} className="mr-1" />
                        <span>{test.type}</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>{test.time}</span>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Duplicate
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Preview
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "templates" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Course Templates</h2>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus size={16} className="mr-1" />
                  Create Template
                </button>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    title: "Onboarding Template",
                    modules: 4,
                    lastUsed: "2 days ago",
                  },
                  {
                    id: 2,
                    title: "Product Training",
                    modules: 6,
                    lastUsed: "1 week ago",
                  },
                  {
                    id: 3,
                    title: "Compliance Course",
                    modules: 3,
                    lastUsed: "3 days ago",
                  },
                  {
                    id: 4,
                    title: "Leadership Development",
                    modules: 8,
                    lastUsed: "2 weeks ago",
                  },
                  {
                    id: 5,
                    title: "Customer Service",
                    modules: 5,
                    lastUsed: "Never used",
                  },
                  {
                    id: 6,
                    title: "Basic Skills",
                    modules: 4,
                    lastUsed: "1 month ago",
                  },
                ].map((template) => (
                  <Card
                    key={template.id}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-2 w-full bg-teal-500 absolute top-0 left-0 right-0 rounded-t-lg"></div>
                    <div className="pt-4">
                      <h3 className="font-medium text-gray-900">
                        {template.title}
                      </h3>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <BookOpen size={16} className="mr-1" />
                        <span>{template.modules} modules</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>Last used: {template.lastUsed}</span>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-md hover:bg-teal-200">
                          Use Template
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                          Preview
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

export default CourseBuilder;
