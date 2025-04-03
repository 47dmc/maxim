import React from "react";
import studentsData from "./data/students.json";

const App = () => {
  const months = [
    "MARCH", "APRIL", "MAY", "JUNE", "JULY", 
    "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <h1 className="text-4xl max-sm:text-2xl font-bold text-blue-900 text-center mb-6">
        Welcome to <span className="text-purple-600">The Scholar's Hub</span>
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-blue-600 text-white sticky top-0 z-30">
          Tuition Fees Payment Status
        </h2>

        <div className="relative" style={{ height: 'calc(100vh - 16px)' }}>
          <div className="absolute inset-0 overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="sticky top-0 z-20"> {/* Adjusted to exact pixel value */}
                <tr className="bg-black">
                  <th className="sticky left-0 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black z-30">
                    Student Name
                  </th>
                  {months.map((month) => (
                    <th
                      key={month}
                      className="sticky top-0 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-black z-20"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentsData.map((student) => (
                  <tr key={student.id}>
                    <td className="sticky left-0 px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-white z-10">
                      {student.name}
                    </td>
                    {months.map((month) => (
                      <td
                        key={`${student.id}-${month}`}
                        className={`px-3 py-4 whitespace-nowrap text-center text-sm ${
                          student.fees[month] === "paid"
                            ? "text-green-600 bg-green-50"
                            : "text-red-600 bg-red-50"
                        }`}
                      >
                        {student.fees[month]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;