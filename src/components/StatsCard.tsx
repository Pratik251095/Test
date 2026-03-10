import './StatsCard.css';

const stats = [
  { label: 'Total active retainers', value: '3,670' },
  { label: 'Total retainer cost', value: '$126,670', bordered: true },
  { label: 'Total TTS GMV', value: '$200,000', bordered: true },
  { label: 'Total Pattern GMV', value: '$100,000' },
  { label: 'Total Brand Retainer Charges', value: '$200,000', bordered: true },
  { label: 'Avg. cost per video', value: '$75', bordered: true },
];

export default function StatsCard() {
  return (
    <div className="stats-card">
      <div className="stats-card__header">General stats</div>
      <div className="stats-card__divider" />
      <div className="stats-card__grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`stats-card__item${stat.bordered ? ' stats-card__item--bordered' : ''}`}
          >
            <div className="stats-card__label">{stat.label}</div>
            <div className="stats-card__value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
