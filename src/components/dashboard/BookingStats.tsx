"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BookingData {
  booking_id: string;
  start_time: string;
  end_time: string;
  student: {
    name: string;
  };
  tutor: {
    user: {
      name: string;
    };
  };
}

interface BookingChartsProps {
  bookings: BookingData[];
}

export default function BookingCharts({ bookings }: BookingChartsProps) {
  // Bookings by date
  const bookingsByDate = bookings.reduce((acc: any[], booking) => {
    const date = new Date(booking.start_time).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const existing = acc.find((item) => item.date === date);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ date, count: 1 });
    }
    return acc;
  }, []);

  // Bookings by tutor
  const bookingsByTutor = bookings.reduce((acc: any[], booking) => {
    const tutorName = booking.tutor.user.name;
    const existing = acc.find((item) => item.name === tutorName);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ name: tutorName, count: 1 });
    }
    return acc;
  }, []);

  // Unique students
  const uniqueStudents = new Set(bookings.map((b) => b.student.name)).size;
  const uniqueTutors = new Set(bookings.map((b) => b.tutor.user.name)).size;
  const totalBookings = bookings.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Booking Statistics
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {totalBookings}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Total Bookings
          </div>
        </div>
        <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
            {uniqueStudents}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Active Students
          </div>
        </div>
        <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            {uniqueTutors}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Active Tutors
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bookings by Date */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Bookings by Date
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bookingsByDate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bookings by Tutor */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Bookings by Tutor
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bookingsByTutor}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#fb923c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
