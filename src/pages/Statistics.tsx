import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { BarChart, DownloadCloud, Filter, ChevronDown, Users, Award, BookOpen, Clock, LineChart, PieChart, BarChart2 } from 'lucide-react';
import Tab from '../components/ui/Tab';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart size={16} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={16} /> },
    { id: 'users', label: 'Users', icon: <Users size={16} /> },
    { id: 'tests', label: 'Tests', icon: <Award size={16} /> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Statistics</h1>
          <p className="mt-1 text-sm text-gray-500">Learning analytics and reports</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <div className="relative">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center">
              <Filter size={16} className="mr-2" />
              <span>Filters</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
            <DownloadCloud size={16} className="mr-2" />
            <span>Export</span>
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-30 rounded-md">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-white text-opacity-90">Total Courses</p>
                      <p className="mt-1 text-3xl font-semibold">42</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white text-opacity-90">Completion Rate</span>
                      <span className="font-medium">76%</span>
                    </div>
                    <div className="mt-1 w-full bg-white bg-opacity-30 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-white" style={{ width: '76%' }} />
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-30 rounded-md">
                      <Users size={24} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-white text-opacity-90">Active Users</p>
                      <p className="mt-1 text-3xl font-semibold">1,248</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white text-opacity-90">Engagement Rate</span>
                      <span className="font-medium">83%</span>
                    </div>
                    <div className="mt-1 w-full bg-white bg-opacity-30 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-white" style={{ width: '83%' }} />
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <div className="flex items-center">
                    <div className="p-3 bg-white bg-opacity-30 rounded-md">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-white text-opacity-90">Quizzes Completed</p>
                      <p className="mt-1 text-3xl font-semibold">3,582</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white text-opacity-90">Average Score</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="mt-1 w-full bg-white bg-opacity-30 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-white" style={{ width: '85%' }} />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-gray-900">Course Completion Trends</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Last 6 Months</span>
                      <ChevronDown size={16} className="ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <LineChart size={32} className="text-gray-300" />
                    <p className="ml-4 text-sm text-gray-500">Chart placeholder - would show course completion trends over time</p>
                  </div>
                </Card>

                <Card>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-gray-900">Learning Time Distribution</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>By Department</span>
                      <ChevronDown size={16} className="ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <PieChart size={32} className="text-gray-300" />
                    <p className="ml-4 text-sm text-gray-500">Chart placeholder - would show learning time across departments</p>
                  </div>
                </Card>
              </div>

              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-gray-900">Top Performing Courses</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Rate</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, name: 'Leadership Fundamentals', participants: 28, avgScore: 92, completion: 94, avgTime: '4.2h' },
                        { id: 2, name: 'Product Knowledge', participants: 35, avgScore: 88, completion: 97, avgTime: '3.7h' },
                        { id: 3, name: 'Customer Service Excellence', participants: 43, avgScore: 85, completion: 89, avgTime: '3.1h' },
                        { id: 4, name: 'Sales Techniques', participants: 22, avgScore: 83, completion: 86, avgTime: '2.8h' },
                        { id: 5, name: 'Technical Onboarding', participants: 16, avgScore: 81, completion: 94, avgTime: '5.2h' }
                      ].map((course) => (
                        <tr key={course.id}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.participants}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.avgScore}%</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{course.completion}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    course.completion >= 90 ? 'bg-green-500' : 
                                    course.completion >= 75 ? 'bg-blue-500' : 
                                    'bg-amber-500'
                                  }`}
                                  style={{ width: `${course.completion}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.avgTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Course Statistics</h2>
                <div className="flex space-x-2">
                  <div className="relative">
                    <select className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                      <option>Last 6 months</option>
                      <option>Last year</option>
                      <option>All time</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -mt-1 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-md">
                      <BookOpen size={24} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Course Engagement</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">87%</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-teal-100 rounded-md">
                      <Clock size={24} className="text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Avg. Completion Time</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">3.5 days</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-md">
                      <Award size={24} className="text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Certification Rate</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">74%</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="flex items-center justify-center h-64 bg-white p-6 rounded-lg shadow mb-6">
                <BarChart2 size={32} className="text-gray-300" />
                <p className="ml-4 text-sm text-gray-500">Chart placeholder - would show detailed course statistics</p>
              </div>
              
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Course Performance</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">Download Report</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollments</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, name: 'Customer Service Excellence', enrollments: 86, completion: 78, avgScore: 85, rating: 4.5, trend: 'up' },
                        { id: 2, name: 'Leadership Fundamentals', enrollments: 54, completion: 92, avgScore: 91, rating: 4.8, trend: 'up' },
                        { id: 3, name: 'Technical Onboarding', enrollments: 32, completion: 84, avgScore: 88, rating: 4.3, trend: 'stable' },
                        { id: 4, name: 'Compliance Training', enrollments: 127, completion: 96, avgScore: 82, rating: 3.9, trend: 'down' },
                        { id: 5, name: 'Product Knowledge', enrollments: 72, completion: 88, avgScore: 87, rating: 4.6, trend: 'up' },
                        { id: 6, name: 'Sales Techniques', enrollments: 44, completion: 72, avgScore: 79, rating: 4.2, trend: 'stable' },
                        { id: 7, name: 'Communication Skills', enrollments: 68, completion: 81, avgScore: 84, rating: 4.4, trend: 'up' },
                        { id: 8, name: 'Project Management', enrollments: 38, completion: 74, avgScore: 86, rating: 4.5, trend: 'stable' }
                      ].map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.enrollments}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{course.completion}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    course.completion >= 90 ? 'bg-green-500' : 
                                    course.completion >= 75 ? 'bg-blue-500' : 
                                    'bg-amber-500'
                                  }`}
                                  style={{ width: `${course.completion}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.avgScore}%</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-1">{course.rating}</span>
                              <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={i < Math.floor(course.rating) ? "text-amber-400" : "text-gray-300"}>★</span>
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm">
                            {course.trend === 'up' && <span className="text-green-600">↑</span>}
                            {course.trend === 'down' && <span className="text-red-600">↓</span>}
                            {course.trend === 'stable' && <span className="text-gray-500">→</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-md">
                      <Users size={24} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Active Users</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">1,248</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-md">
                      <Award size={24} className="text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Avg. Courses Completed</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">3.2</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-md">
                      <Clock size={24} className="text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Avg. Learning Time</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">14.5h</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">User Engagement by Department</h3>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <select className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                        <option>All time</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2 top-1/2 -mt-1 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Completion</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Learning Time</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Test Score</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, name: 'Sales', users: 142, completion: 87, time: '16.3h', score: 86 },
                        { id: 2, name: 'Customer Support', users: 238, completion: 92, time: '18.1h', score: 84 },
                        { id: 3, name: 'Product', users: 76, completion: 81, time: '13.7h', score: 88 },
                        { id: 4, name: 'Engineering', users: 163, completion: 78, time: '12.4h', score: 91 },
                        { id: 5, name: 'Marketing', users: 94, completion: 84, time: '14.8h', score: 83 },
                        { id: 6, name: 'HR', users: 37, completion: 95, time: '15.6h', score: 89 },
                        { id: 7, name: 'Finance', users: 52, completion: 89, time: '13.2h', score: 85 }
                      ].map((dept) => (
                        <tr key={dept.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dept.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{dept.users}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{dept.completion}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    dept.completion >= 90 ? 'bg-green-500' : 
                                    dept.completion >= 80 ? 'bg-blue-500' : 
                                    'bg-amber-500'
                                  }`}
                                  style={{ width: `${dept.completion}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{dept.time}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{dept.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Top Performing Users</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 1, name: 'Emma Thompson', department: 'Customer Support', points: 2450, courses: 8, rating: 4.9 },
                    { id: 2, name: 'James Wilson', department: 'Sales', points: 2100, courses: 7, rating: 4.7 },
                    { id: 3, name: 'Sophie Chen', department: 'Engineering', points: 1950, courses: 6, rating: 4.8 },
                    { id: 4, name: 'Alex Rodriguez', department: 'Marketing', points: 1850, courses: 6, rating: 4.6 }
                  ].map((user) => (
                    <div key={user.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{user.name}</h4>
                        <p className="text-xs text-gray-500">{user.department}</p>
                        <div className="mt-2 flex items-center">
                          <Award size={14} className="text-amber-500 mr-1" />
                          <span className="text-xs font-medium text-gray-900">{user.points} points</span>
                          <span className="mx-2 text-gray-300">|</span>
                          <BookOpen size={14} className="text-blue-500 mr-1" />
                          <span className="text-xs font-medium text-gray-900">{user.courses} courses</span>
                          <span className="mx-2 text-gray-300">|</span>
                          <span className="text-xs text-amber-500">★</span>
                          <span className="text-xs font-medium text-gray-900 ml-1">{user.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-teal-100 rounded-md">
                      <Award size={24} className="text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total Tests</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">74</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-md">
                      <BarChart size={24} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Avg. Score</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">84%</p>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-md">
                      <Clock size={24} className="text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Avg. Completion Time</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">18m 32s</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Test Performance</h3>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <select className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>All Test Types</option>
                        <option>Multiple Choice</option>
                        <option>Single Choice</option>
                        <option>True/False</option>
                        <option>Open-ended</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2 top-1/2 -mt-1 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Rate</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, name: 'Final Assessment', course: 'Leadership Fundamentals', type: 'Multiple Choice', completion: 87, score: 92, passRate: 95 },
                        { id: 2, name: 'Module 1 Quiz', course: 'Customer Service Excellence', type: 'Mixed', completion: 94, score: 88, passRate: 92 },
                        { id: 3, name: 'Knowledge Check', course: 'Technical Onboarding', type: 'True/False', completion: 98, score: 91, passRate: 97 },
                        { id: 4, name: 'Skills Assessment', course: 'Sales Techniques', type: 'Open-ended', completion: 76, score: 85, passRate: 89 },
                        { id: 5, name: 'Compliance Test', course: 'Compliance Training', type: 'Multiple Choice', completion: 99, score: 87, passRate: 96 },
                        { id: 6, name: 'Product Quiz', course: 'Product Knowledge', type: 'Single Choice', completion: 92, score: 89, passRate: 94 }
                      ].map((test) => (
                        <tr key={test.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{test.course}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {test.type}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{test.completion}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    test.completion >= 90 ? 'bg-green-500' : 
                                    test.completion >= 80 ? 'bg-blue-500' : 
                                    'bg-amber-500'
                                  }`}
                                  style={{ width: `${test.completion}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{test.score}%</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{test.passRate}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    test.passRate >= 95 ? 'bg-green-500' : 
                                    test.passRate >= 85 ? 'bg-blue-500' : 
                                    'bg-amber-500'
                                  }`}
                                  style={{ width: `${test.passRate}%` }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">Question Analysis</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Select Test</span>
                      <ChevronDown size={16} className="ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-48">
                    <BarChart2 size={32} className="text-gray-300" />
                    <p className="ml-4 text-sm text-gray-500">Chart placeholder - would show test question performance</p>
                  </div>
                </Card>
                
                <Card>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">Difficult Questions</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { id: 1, text: 'What is the correct procedure for handling customer complaints?', course: 'Customer Service Excellence', correctRate: 62 },
                      { id: 2, text: 'Explain the key differences between synchronous and asynchronous communication.', course: 'Technical Onboarding', correctRate: 58 },
                      { id: 3, text: 'Which of the following is not a principle of effective leadership?', course: 'Leadership Fundamentals', correctRate: 65 }
                    ].map((question) => (
                      <div key={question.id} className="p-3 border border-gray-200 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">{question.text}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">{question.course}</span>
                          <div className="flex items-center">
                            <span className="text-xs text-gray-900 mr-2">Correct: {question.correctRate}%</span>
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full bg-amber-500"
                                style={{ width: `${question.correctRate}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;