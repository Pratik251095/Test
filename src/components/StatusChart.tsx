import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './StatusChart.css';

const data = [
  { name: 'Awaiting\ncontact', value: 1050 },
  { name: 'Contacted', value: 3359 },
  { name: 'Pitched', value: 2700 },
  { name: 'Contract sent', value: 1800 },
  { name: 'Undefined', value: 770 },
  { name: 'Upcoming', value: 2250 },
  { name: 'Active', value: 3780 },
  { name: 'In renewal', value: 3000 },
  { name: 'Expired', value: 1260 },
];

const tabs = ['All status', 'Recruit status', 'Retainer status'];

interface TooltipPayload {
  value: number;
  payload: { name: string };
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="status-chart__tooltip">
      <div className="status-chart__tooltip-label">
        {label?.replace('\n', ' ')}
      </div>
      <div className="status-chart__tooltip-value">
        <span className="status-chart__tooltip-dot" />
        {payload[0].value.toLocaleString()}
      </div>
    </div>
  );
}

function CustomXAxisTick({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: string };
}) {
  const lines = payload.value.split('\n');
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={i * 16}
          dy={12}
          textAnchor="middle"
          fill="#5f6368"
          fontSize={12}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export default function StatusChart() {
  const [activeTab, setActiveTab] = useState('All status');

  return (
    <div className="status-chart">
      <div className="status-chart__header">
        <div className="status-chart__title-group">
          <span className="status-chart__title">Status</span>
          <span className="material-symbols-outlined status-chart__help">
            help
          </span>
        </div>
        <div className="status-chart__btn-group">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`status-chart__btn${tab === activeTab ? ' status-chart__btn--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="status-chart__divider" />
      <div className="status-chart__body">
        <ResponsiveContainer width="100%" height={380}>
          <BarChart
            data={data}
            margin={{ top: 8, right: 24, left: 0, bottom: 24 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray=""
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={CustomXAxisTick as never}
              interval={0}
              height={48}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#5f6368', fontSize: 12 }}
              domain={[0, 4000]}
              ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]}
              width={48}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar
              dataKey="value"
              fill="#2979ff"
              radius={[4, 4, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
