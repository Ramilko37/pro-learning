import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Users, BookOpen, Award, Clock, TrendingUp, BarChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Overview of your learning management platform</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">1,248</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-md">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp size={16} className="text-green-500 mr-1" />
            <span className="text-sm text-green-500">12% increase</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Courses</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">42</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-md">
              <BookOpen size={24} className="text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp size={16} className="text-green-500 mr-1" />
            <span className="text-sm text-green-500">5 new</span>
            <span className="text-sm text-gray-500 ml-1">this week</span>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completion Rate</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">76%</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-md">
              <Award size={24} className="text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp size={16} className="text-green-500 mr-1" />
            <span className="text-sm text-green-500">4% increase</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Learning Time</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">3.2h</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-md">
              <Clock size={24} className="text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp size={16} className="text-green-500 mr-1" />
            <span className="text-sm text-green-500">0.5h increase</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-lg font-medium text-gray-900">Recent Course Activity</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { id: 1, name: 'Customer Service Excellence', participants: 43, status: 'Active', completion: 65 },
                    { id: 2, name: 'Leadership Fundamentals', participants: 28, status: 'Active', completion: 82 },
                    { id: 3, name: 'Technical Onboarding', participants: 16, status: 'Pending', completion: 0 },
                    { id: 4, name: 'Compliance Training', participants: 97, status: 'Active', completion: 46 },
                    { id: 5, name: 'Product Knowledge', participants: 35, status: 'Completed', completion: 100 }
                  ].map((course) => (
                    <tr key={course.id}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{course.participants}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Badge 
                          color={
                            course.status === 'Active' ? 'blue' : 
                            course.status === 'Pending' ? 'amber' : 
                            'green'
                          }
                        >
                          {course.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              course.completion >= 80 ? 'bg-green-500' : 
                              course.completion >= 40 ? 'bg-blue-500' : 
                              'bg-amber-500'
                            }`}
                            style={{ width: `${course.completion}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-500 mt-1 inline-block">{course.completion}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Top Learners</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { id: 1, name: 'Emma Thompson', role: 'Customer Support', points: 2450, avatar: 'ET' },
              { id: 2, name: 'James Wilson', role: 'Sales Manager', points: 2100, avatar: 'JW' },
              { id: 3, name: 'Sophie Chen', role: 'Technical Lead', points: 1950, avatar: 'SC' },
              { id: 4, name: 'Alex Rodriguez', role: 'Marketing Specialist', points: 1850, avatar: 'AR' },
              { id: 5, name: 'Grace Kim', role: 'Product Manager', points: 1720, avatar: 'GK' }
            ].map((learner, index) => (
              <div key={learner.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-medium text-sm">
                  {index + 1}
                </div>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {learner.avatar}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{learner.name}</p>
                  <p className="text-xs text-gray-500 truncate">{learner.role}</p>
                </div>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {learner.points} pts
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;