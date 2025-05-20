import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { BrainCircuit, FileText, Image, Film, MessageSquare, ListChecks, Table, FileQuestion, Sparkles, RefreshCw, Copy, Download } from 'lucide-react';
import Tab from '../components/ui/Tab';

const AITools = () => {
  const [activeTab, setActiveTab] = useState('knowledge-base');
  const [formatStyle, setFormatStyle] = useState('formal');

  const tabs = [
    { id: 'knowledge-base', label: 'AI Knowledge Base', icon: <BrainCircuit size={16} /> },
    { id: 'designer', label: 'Instructional Designer', icon: <Sparkles size={16} /> },
    { id: 'formatter', label: 'Content Formatter', icon: <FileText size={16} /> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Tools</h1>
          <p className="mt-1 text-sm text-gray-500">Smart assistants to enhance your learning content</p>
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
          {activeTab === 'knowledge-base' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-lg font-medium mb-4">Smart Knowledge Search</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask any question about your training materials..."
                      className="w-full p-3 pr-12 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 -mt-2 text-blue-600">
                      <MessageSquare size={20} />
                    </button>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <BrainCircuit size={20} className="text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">AI Assistant</h3>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>Based on your training materials, the key steps for handling customer complaints are:</p>
                          <ol className="mt-2 ml-4 list-decimal space-y-1">
                            <li>Listen actively and empathize with the customer's concern</li>
                            <li>Apologize sincerely for the inconvenience</li>
                            <li>Ask clarifying questions to fully understand the problem</li>
                            <li>Propose a solution or set clear expectations for resolution</li>
                            <li>Follow up to ensure customer satisfaction</li>
                          </ol>
                          <p className="mt-2">This information comes from the "Customer Service Excellence" course, Module 3: "Managing Difficult Situations."</p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                            <Copy size={12} className="mr-1" /> Copy
                          </button>
                          <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                            <RefreshCw size={12} className="mr-1" /> Regenerate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Questions</h3>
                    <div className="space-y-2">
                      {[
                        "What are the key features of our new product?",
                        "How do I reset a user's password?",
                        "What's the refund policy for premium courses?",
                        "Who should I contact for technical issues?",
                        "When is the next compliance training deadline?"
                      ].map((question, index) => (
                        <div key={index} className="p-2 bg-gray-50 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          {question}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card>
                  <h2 className="text-lg font-medium mb-4">Knowledge Sources</h2>
                  <div className="space-y-4">
                    <div className="p-3 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded mr-3">
                          <FileText size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Training Documentation</h3>
                          <p className="text-xs text-gray-500">42 documents</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded mr-3">
                          <FileQuestion size={18} className="text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">FAQ Database</h3>
                          <p className="text-xs text-gray-500">126 answers</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="p-2 bg-teal-100 rounded mr-3">
                          <BookOpen size={18} className="text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Course Content</h3>
                          <p className="text-xs text-gray-500">18 courses</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="p-2 bg-amber-100 rounded mr-3">
                          <ListChecks size={18} className="text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Procedures</h3>
                          <p className="text-xs text-gray-500">35 documents</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                      Add New Knowledge Source
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'designer' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-lg font-medium mb-4">AI Instructional Designer</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="content-source" className="block text-sm font-medium text-gray-700 mb-1">
                      Content Source
                    </label>
                    <select
                      id="content-source"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option>Upload Document</option>
                      <option>From Knowledge Base</option>
                      <option>Create From Scratch</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                      Topic or Learning Objective
                    </label>
                    <input
                      type="text"
                      id="topic"
                      placeholder="e.g., Customer Service Best Practices"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content Style
                    </label>
                    <div className="flex space-x-2">
                      <button 
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          formatStyle === 'formal' 
                            ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                        onClick={() => setFormatStyle('formal')}
                      >
                        Formal
                      </button>
                      <button 
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          formatStyle === 'conversational' 
                            ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                        onClick={() => setFormatStyle('conversational')}
                      >
                        Conversational
                      </button>
                      <button 
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          formatStyle === 'youth' 
                            ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                        onClick={() => setFormatStyle('youth')}
                      >
                        Youth-Friendly
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <h3 className="text-md font-medium mb-3">Generated Content Preview</h3>
                    <div className="bg-gray-50 p-4 rounded-md min-h-[200px] mb-4">
                      <h2 className="text-lg font-medium text-gray-900 mb-2">Customer Service Best Practices</h2>
                      <p className="text-sm text-gray-700 mb-3">
                        Effective customer service is essential for maintaining customer satisfaction and loyalty. This module covers the fundamental principles and best practices for delivering exceptional customer service.
                      </p>
                      <h3 className="text-md font-medium text-gray-800 mb-2">Learning Objectives:</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-3">
                        <li>Understand the importance of customer service in business success</li>
                        <li>Master key communication skills for customer interactions</li>
                        <li>Learn effective techniques for handling customer complaints</li>
                        <li>Develop strategies for exceeding customer expectations</li>
                      </ul>
                      <p className="text-sm text-gray-700">
                        By the end of this module, participants will be equipped with the knowledge and skills necessary to provide outstanding customer service in various situations.
                      </p>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <RefreshCw size={16} className="mr-2" />
                        Regenerate
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <Download size={16} className="mr-2" />
                        Use This Content
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card>
                  <h2 className="text-lg font-medium mb-4">Design Options</h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content Type
                    </label>
                    <div className="space-y-2">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="module"
                            name="content-type"
                            type="radio"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="module" className="font-medium text-gray-700">Course Module</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="lesson"
                            name="content-type"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="lesson" className="font-medium text-gray-700">Single Lesson</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="assessment"
                            name="content-type"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="assessment" className="font-medium text-gray-700">Assessment</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Difficulty Level
                    </label>
                    <div className="relative mt-1">
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Include Elements
                    </label>
                    <div className="space-y-2">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="learning-objectives"
                            name="elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="learning-objectives" className="font-medium text-gray-700">Learning Objectives</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="examples"
                            name="elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="examples" className="font-medium text-gray-700">Examples & Case Studies</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="quiz-questions"
                            name="elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="quiz-questions" className="font-medium text-gray-700">Quiz Questions</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="summary"
                            name="elements"
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="summary" className="font-medium text-gray-700">Summary & Key Takeaways</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Length
                    </label>
                    <div className="relative mt-1">
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option>Brief (5-10 min)</option>
                        <option>Standard (10-20 min)</option>
                        <option>Comprehensive (20-30 min)</option>
                        <option>In-depth (30+ min)</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'formatter' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-lg font-medium mb-4">AI Content Formatter</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="content-input" className="block text-sm font-medium text-gray-700 mb-1">
                      Input Content
                    </label>
                    <textarea
                      id="content-input"
                      rows={6}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Paste or type your content here..."
                      defaultValue="Customer service is critical for business success. Good customer service means listening to customers, solving their problems quickly, and being friendly. Poor customer service can lead to customer loss. To improve customer service, businesses should train staff, gather feedback, and use technology effectively."
                    />
                  </div>
                  
                  <div className="mb-6 flex flex-wrap gap-3">
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100">
                      <FileText size={16} className="mr-2" />
                      Text
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100">
                      <Image size={16} className="mr-2" />
                      Infographic
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100">
                      <ListChecks size={16} className="mr-2" />
                      Quiz
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100">
                      <Table size={16} className="mr-2" />
                      Table
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100">
                      <Film size={16} className="mr-2" />
                      Video Script
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-md font-medium mb-3">Formatted Output</h3>
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">The Importance of Customer Service</h3>
                      
                      <p className="text-sm text-gray-700 mb-3">
                        Customer service plays a vital role in determining business success. When implemented effectively, it creates customer loyalty and drives business growth.
                      </p>
                      
                      <h4 className="text-md font-semibold text-gray-800 mb-2">Key Elements of Excellent Customer Service:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                        <li><strong>Active Listening:</strong> Truly understanding customer needs and concerns</li>
                        <li><strong>Prompt Resolution:</strong> Solving customer problems efficiently and effectively</li>
                        <li><strong>Professional Demeanor:</strong> Maintaining a friendly and helpful attitude</li>
                      </ul>
                      
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4">
                        <p className="text-sm text-red-700 font-medium">Warning: Poor customer service can lead to customer churn and significantly impact revenue.</p>
                      </div>
                      
                      <h4 className="text-md font-semibold text-gray-800 mb-2">Improvement Strategies:</h4>
                      <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                        <li>Implement comprehensive staff training programs</li>
                        <li>Establish systems for collecting and analyzing customer feedback</li>
                        <li>Leverage technology to streamline service processes</li>
                      </ol>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <RefreshCw size={16} className="mr-2" />
                        Regenerate
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <Copy size={16} className="mr-2" />
                        Copy
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        <Download size={16} className="mr-2" />
                        Save Format
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card>
                  <h2 className="text-lg font-medium mb-4">Format Options</h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content Purpose
                    </label>
                    <div className="relative mt-1">
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option>Educational</option>
                        <option>Training</option>
                        <option>Assessment</option>
                        <option>Reference</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Format Style
                    </label>
                    <div className="relative flex items-center">
                      <span className="mr-2 text-sm text-gray-500">Simple</span>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        defaultValue="3"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-2 text-sm text-gray-500">Enhanced</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Include Elements
                    </label>
                    <div className="space-y-2">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="headings"
                            name="format-elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="headings" className="font-medium text-gray-700">Headings & Subheadings</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="bullet-points"
                            name="format-elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="bullet-points" className="font-medium text-gray-700">Bullet Points & Lists</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="callouts"
                            name="format-elements"
                            type="checkbox"
                            defaultChecked
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="callouts" className="font-medium text-gray-700">Callouts & Highlights</label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="visual-cues"
                            name="format-elements"
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="visual-cues" className="font-medium text-gray-700">Visual Cues & Icons</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target Audience
                    </label>
                    <div className="relative mt-1">
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option>New Employees</option>
                        <option>Frontline Staff</option>
                        <option>Managers</option>
                        <option>Technical Staff</option>
                        <option>All Employees</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                      Apply Format Settings
                    </button>
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

export default AITools;