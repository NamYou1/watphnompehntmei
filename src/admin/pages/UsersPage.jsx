import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../../../components/Data/api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      const authors = await fetchAuthors(search ? `?search=${encodeURIComponent(search)}` : "");
      setUsers(authors?.data || []);
      setLoading(false);
    }
    loadUsers();
  }, [search]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-lg">Users</div>
        <input
          className="border px-2 py-1 rounded"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</button>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div>Loading...</div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
