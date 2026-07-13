"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  DollarSign,
  Users,
  CalendarCheck,
  Hotel,
  TrendingUp,
  Activity,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 6200 },
  { month: "Mar", revenue: 5400 },
  { month: "Apr", revenue: 8200 },
  { month: "May", revenue: 9800 },
  { month: "Jun", revenue: 12400 },
];

const bookingData = [
  { name: "Completed", value: 68 },
  { name: "Pending", value: 20 },
  { name: "Cancelled", value: 12 },
];

const weeklyData = [
  { day: "Mon", booking: 15 },
  { day: "Tue", booking: 28 },
  { day: "Wed", booking: 20 },
  { day: "Thu", booking: 34 },
  { day: "Fri", booking: 30 },
  { day: "Sat", booking: 44 },
  { day: "Sun", booking: 38 },
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-white">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
          <p className="mt-2 text-zinc-400">
            Monitor your hotel booking performance.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-emerald-400">
          <TrendingUp className="inline mr-2 h-5 w-5" />
          +18.5% This Month
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Revenue"
          value="$124,580"
          icon={<DollarSign />}
          color="emerald"
        />

        <Card
          title="Users"
          value="8,452"
          icon={<Users />}
          color="blue"
        />

        <Card
          title="Bookings"
          value="2,146"
          icon={<CalendarCheck />}
          color="orange"
        />

        <Card
          title="Hotels"
          value="128"
          icon={<Hotel />}
          color="purple"
        />
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Revenue */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
          <h2 className="mb-6 text-xl font-semibold">
            Monthly Revenue
          </h2>

          <ResponsiveContainer width="100%" height={330}>
            <LineChart data={revenueData}>
              <CartesianGrid stroke="#27272a" />
              <XAxis dataKey="month" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Booking Status
          </h2>

          <ResponsiveContainer width="100%" height={330}>
            <PieChart>
              <Pie
                data={bookingData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {bookingData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Bar */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Weekly Bookings
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={weeklyData}>
              <CartesianGrid stroke="#27272a" />
              <XAxis dataKey="day" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip />

              <Bar
                dataKey="booking"
                fill="#10b981"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-2">
            <Activity className="text-emerald-400" />
            <h2 className="text-xl font-semibold">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-5">
            <ActivityItem
              title="New Hotel Added"
              time="10 minutes ago"
            />

            <ActivityItem
              title="Premium Subscription Purchased"
              time="32 minutes ago"
            />

            <ActivityItem
              title="45 New Bookings Received"
              time="2 hours ago"
            />

            <ActivityItem
              title="12 Hotels Updated"
              time="Today"
            />

            <ActivityItem
              title="Server Backup Completed"
              time="Today"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) {
  const bg: Record<string, string> = {
    emerald: "bg-emerald-500/15 text-emerald-400",
    blue: "bg-blue-500/15 text-blue-400",
    orange: "bg-orange-500/15 text-orange-400",
    purple: "bg-purple-500/15 text-purple-400",
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-emerald-500/40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-zinc-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>

          <p className="mt-2 text-sm text-emerald-400">
            ↑ 12.5% from last month
          </p>
        </div>

        <div className={`rounded-2xl p-4 ${bg[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function ActivityItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-zinc-500">{time}</p>
      </div>

      <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
    </div>
  );
}