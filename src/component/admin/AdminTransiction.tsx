"use client";

import React from "react";


const AdminTransiction = ({transactions}) => {
  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
        <div className="border-b border-zinc-800 p-6">
          <h1 className="text-3xl font-bold text-white">Transactions</h1>
          <p className="mt-1 text-zinc-400">
            All payment history
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Session ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Hotel Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.session_id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/50"
                >
                  <td className="px-6 py-4 text-zinc-300">
                    {index + 1}
                  </td>

                  <td className="max-w-xs truncate px-6 py-4 text-zinc-300">
                    {transaction.session_id}
                  </td>

                  <td className="px-6 py-4 font-medium text-white">
                    {transaction.hotelName}
                  </td>

                  <td className="px-6 py-4 font-semibold text-emerald-400">
                    ${transaction.price}
                  </td>

                  <td className="px-6 py-4 text-zinc-300">
                    {transaction.userEmail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {transactions.length === 0 && (
            <div className="py-16 text-center text-zinc-400">
              No transactions found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTransiction;