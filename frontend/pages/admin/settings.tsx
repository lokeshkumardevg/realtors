import { Settings, User, Shield, CreditCard, Bell } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

export default function AdminSettings() {
  return (
    <AdminLayout title="Settings">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-1 text-gray-900 dark:text-white">Platform Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your account, team, and subscription preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 space-y-1">
          {[
            { icon: User, label: 'Profile', active: true },
            { icon: Shield, label: 'Security' },
            { icon: CreditCard, label: 'Billing & Plan' },
            { icon: Bell, label: 'Notifications' },
          ].map((item, idx) => (
            <button key={idx} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${item.active ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}`}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h2>
          
          <div className="flex items-center gap-6 mb-8">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-24 h-24 rounded-full border-4 border-gray-100 dark:border-gray-800" />
            <div>
              <button className="px-4 py-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg font-medium text-sm transition-colors mb-2">
                Change Avatar
              </button>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
              <input type="text" defaultValue="Lokesh" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
              <input type="text" defaultValue="Kumar" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" defaultValue="admin@pgirealtors.com" className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 dark:border-white/5">
            <button className="px-5 py-2.5 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-medium text-sm transition-colors">
              Cancel
            </button>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/30 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
