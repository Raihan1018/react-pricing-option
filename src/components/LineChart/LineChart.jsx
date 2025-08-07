import React from "react";
import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
  const mathMarks = [
    { student: "Student 1", marks: 78 },
    { student: "Student 2", marks: 85 },
    { student: "Student 3", marks: 92 },
    { student: "Student 4", marks: 69 },
    { student: "Student 5", marks: 74 },
    { student: "Student 6", marks: 88 },
    { student: "Student 7", marks: 90 },
    { student: "Student 8", marks: 81 },
    { student: "Student 9", marks: 76 },
    { student: "Student 10", marks: 95 },
  ];

  return <div>
    <LChart width={400} height={500} data={mathMarks} />
    <Line dataKey={mathMarks} />
  </div>;
};

export default LineChart;
