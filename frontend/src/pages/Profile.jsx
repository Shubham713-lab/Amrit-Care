import React, { useState } from 'react';
import { User, ClipboardList, Settings, LogOut } from 'lucide-react';

// Mock user data - replace with actual data from your backend
const userData = {
  name: 'Amrit Kumar',
  email: 'amrit.kumar@example.com',
  joinDate: 'August 20, 2025',
  address: {
    house: '123 Health St.',
    city: 'Wellness City',
    state: 'Gujarat',
    pin: '45678',
  },
};

// Mock order data
const orderHistory = [
  { id: 'ORD-123', date: '2025-08-15', total: '₹550.00', status: 'Delivered' },
  { id: 'ORD-124', date: '2025-08-18', total: '₹1200.00', status: 'Shipped' },
  { id: 'ORD-125', date: '2025-08-20', total: '₹300.00', status: 'Processing' },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Profile</h2>
            <div className="space-y-3 text-gray-600">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Joined On:</strong> {userData.joinDate}</p>
              <p><strong>Address:</strong> {`${userData.address.house}, ${userData.address.city}, ${userData.address.state} - ${userData.address.pin}`}</p>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 text-left">Order ID</th>
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Total</th>
                    <th className="py-2 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="py-2 px-4">{order.id}</td>
                      <td className="py-2 px-4">{order.date}</td>
                      <td className="py-2 px-4">{order.total}</td>
                      <td className="py-2 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                          order.status === 'Shipped' ? 'bg-blue-200 text-blue-800' :
                          'bg-yellow-200 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
            <p>Account settings will be available here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton = ({ id, icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
        activeTab === id
          ? 'bg-orange-500 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white border-r border-gray-200">
          <div className="p-4 border-b">
            <h3 className="text-xl font-bold">{userData.name}</h3>
            <p className="text-sm text-gray-500">{userData.email}</p>
          </div>
          <nav className="flex flex-col">
            <TabButton id="profile" icon={<User size={20} />} label="My Profile" />
            <TabButton id="orders" icon={<ClipboardList size={20} />} label="My Orders" />
            <TabButton id="settings" icon={<Settings size={20} />} label="Settings" />
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-500 hover:bg-red-50">
                <LogOut size={20} />
                <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-6 sm:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
