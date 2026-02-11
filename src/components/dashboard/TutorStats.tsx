"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface TutorData {
  tutor_id: string;
  price: number;
  avgRating: number;
  reviewCount: number;
  user: {
    name: string;
  };
  category: {
    category_name: string;
  };
}

interface TutorChartsProps {
  tutors: TutorData[];
}

export default function TutorCharts({ tutors }: TutorChartsProps) {
  // Category distribution
  const categoryData = tutors.reduce((acc: any[], tutor) => {
    const existing = acc.find(
      (item) => item.name === tutor.category.category_name,
    );
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: tutor.category.category_name, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#ffedd5"];

  // Summary stats
  const totalTutors = tutors.length;
  const avgPrice = Math.round(
    tutors.reduce((sum, t) => sum + t.price, 0) / totalTutors,
  );
  const avgRating = (
    tutors.reduce((sum, t) => sum + t.avgRating, 0) / totalTutors
  ).toFixed(1);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Tutor Statistics
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            {totalTutors}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Total Tutors
          </div>
        </div>
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            ${avgPrice}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Avg Price/hr
          </div>
        </div>
        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
            {avgRating}★
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Avg Rating
          </div>
        </div>
      </div>

      {/* Category Distribution */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Tutors by Category
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: any) =>
                `${name} (${((percent || 0) * 100).toFixed(0)}%)`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
