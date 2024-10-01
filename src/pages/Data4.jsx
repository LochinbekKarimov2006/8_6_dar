import React from 'react';
import { Folder, File, MoreVertical, Plus, Upload } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Data4 = () => {
  const storageData = [
    { name: 'Used', value: 85 },
    { name: 'Available', value: 15 },
  ];

  const fileTypeData = [
    { name: 'Media', size: 66 },
    { name: 'Documents', size: 26 },
    { name: 'Music', size: 10 },
    { name: 'Other File', size: 18 },
  ];

  const activityData = [
    { name: 'Jan', Media: 30, Photos: 40, Docs: 50 },
    { name: 'Feb', Media: 50, Photos: 35, Docs: 60 },
    { name: 'Mar', Media: 40, Photos: 45, Docs: 55 },
    { name: 'Apr', Media: 60, Photos: 50, Docs: 45 },
    { name: 'May', Media: 45, Photos: 55, Docs: 40 },
    { name: 'Jun', Media: 55, Photos: 40, Docs: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="  p-6 font-sans bg-base-100">
      <div className=" rounded-lg ">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Files</h1>
          <div className="flex space-x-2">
            <button className="purple-600 text-white px-4 py-2 rounded-full flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New Folder
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-full flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </button>
          </div>
        </header>

        <div className='flex w-full mb-7 gap-7'>
        <div className="grid bg-base-200  rounded-[15px] w-[65%] grid-cols-3 gap-4 p-5 drop-shadow-lg">
          {['Documents', 'Music', 'Work Project', 'Personal Media', 'Reddingo Backup', 'Root'].map((folder, index) => (
            <div key={index} className="gray-50 p-4 rounded-lg flex items-center">
              <Folder className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="font-medium">{folder}</p>
                <p className="text-sm text-gray-500">{Math.floor(Math.random() * 1000)} files</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-base-200 rounded-[15px] w-[35%] drop-shadow-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Available Storage</h3>
            <div className="flex items-center">
              <ResponsiveContainer width="50%" height={100}>
                <PieChart>
                  <Pie
                    data={storageData}
                    innerRadius={30}
                    outerRadius={40}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {storageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-gray-500">130GB / 512GB</p>
              </div>
            </div>
            <div className="mt-2">
              {fileTypeData.map((item, index) => (
                <div key={index} className="flex justify-between items-center mt-1">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-semibold">{item.size} GB</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex  gap-7 w-full">
          <div className='bg-base-200 w-[65%] rounded-[15px] drop-shadow-lg p-5'>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent File</h2>
          <a href="#" className="text-blue-500">View All</a>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-2">Name</th>
              <th className="pb-2">Size</th>
              <th className="pb-2">Last Modified</th>
              <th className="pb-2">Members</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Proposal.docx', size: '2.9 MB', date: 'Feb 25,2022', members: 5 },
              { name: 'Background.jpg', size: '3.5 MB', date: 'Feb 24,2022', members: 3 },
              { name: 'Apex website.fig', size: '23.5 MB', date: 'Feb 22,2022', members: 5 },
              { name: 'Illustration.ai', size: '7.2 MB', date: 'Feb 20,2022', members: 3 },
            ].map((file, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 flex items-center">
                  <File className="w-5 h-5 text-gray-400 mr-2" />
                  {file.name}
                </td>
                <td className="py-2">{file.size}</td>
                <td className="py-2">{file.date}</td>
                <td className="py-2">
                  <div className="flex -space-x-2">
                    {[...Array(file.members)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full gray-300 border-2 border-white"></div>
                    ))}
                  </div>
                </td>
                <td className="py-2">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>

          <div className="gray-50 bg-base-200 w-[35%] drop-shadow-lg rounded-[15px] p-5">
            <h3 className="text-lg font-semibold mb-2">Activity Chart</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={activityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Media" fill="#8884d8" />
                <Bar dataKey="Photos" fill="#82ca9d" />
                <Bar dataKey="Docs" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data4;