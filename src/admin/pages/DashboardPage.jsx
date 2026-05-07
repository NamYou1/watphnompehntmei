import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchAuthors,
  fetchMonks,
  fetchActivities,
  fetchArticles
} from "../../../components/Data/api";

const statIcons = [
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>,
  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V7m0 6v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" /></svg>,
  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
];

export default function DashboardPage() {
  const [stats, setStats] = useState([
    { title: "Categories", value: 0, color: "bg-blue-100 text-blue-800" },
    { title: "Authors", value: 0, color: "bg-green-100 text-green-800" },
    { title: "Monks", value: 0, color: "bg-purple-100 text-purple-800" },
    { title: "Articles", value: 0, color: "bg-pink-100 text-pink-800" }
  ]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      setLoading(true);
      const [categories, authors, monks, articles] = await Promise.all([
        fetchCategories(),
        fetchAuthors(),
        fetchMonks(),
        fetchArticles()
      ]);
      setStats([
        { title: "Categories", value: categories?.data?.length || 0, color: "bg-blue-100 text-blue-800" },
        { title: "Authors", value: authors?.data?.length || 0, color: "bg-green-100 text-green-800" },
        { title: "Monks", value: monks?.data?.length || 0, color: "bg-purple-100 text-purple-800" },
        { title: "Articles", value: articles?.data?.length || 0, color: "bg-pink-100 text-pink-800" }
      ]);
      setUsers(authors?.data?.slice(0, 5) || []);
      setLoading(false);
    }
    loadStats();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="h-16 bg-white flex items-center justify-between px-8 shadow-sm">
        <div className="text-lg font-semibold">Dashboard</div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Admin</span>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-9 h-9 rounded-full border-2 border-gray-200" />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {stats.map((stat, i) => (
          <div key={i} className={`rounded-xl shadow bg-white p-6 flex items-center space-x-4 ${stat.color}`}>
            <div className="bg-white rounded-full p-2 shadow-md">{statIcons[i]}</div>
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-lg">Recent Authors</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Author</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Bio</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id || idx}>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.bio?.slice(0, 40) || '-'}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
