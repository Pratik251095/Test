import { useState } from 'react';
import { useParams } from 'react-router-dom';
import IconSidebar from '../components/IconSidebar';
import './AmbassadorAnalytics.css';

function slugToName(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const tabs = ['Personal info', 'Analytics', 'Payments', 'Sales', 'Campaigns'];
const subNavTabs = ['General data', 'Retainer data'];

const perfStats = [
  { label: 'TTS GMV', value: '$100,000' },
  { label: 'Pattern GMV', value: '$126,670', bordered: true },
  { label: 'GMV goal', value: '$200,000', bordered: true },
  { label: 'Progress towards GMV goal', value: '85%', bordered: true },
];

const costStats = [
  { label: 'Monthly retainer fee', value: '$1,500' },
  { label: 'Contracted videos per month', value: '50', bordered: true },
  { label: 'Cost per video', value: '$30' },
  { label: 'Total brand charges', value: '$3,000', bordered: true },
];

const brands = [
  { name: 'Current', charge: '$1,000', color: '#c4c4c4' },
  { name: 'DripFX', charge: '$1,200', color: '#b8b8b8' },
  { name: 'Modo Haus', charge: '$1,000', color: '#d0d0d0' },
  { name: 'Just Ingredients', charge: '$1,500', color: '#c0c0c0' },
  { name: 'Ember Co.', charge: '$1,100', color: '#bfbfbf' },
];

export default function AmbassadorAnalytics() {
  const { id } = useParams<{ id: string }>();
  const name = slugToName(id ?? 'unknown');
  const [activeTab] = useState('Analytics');
  const [activeSubNav, setActiveSubNav] = useState('Retainer data');

  return (
    <div className="ambassador-layout">
      <div className="icon-sidebar-area">
        <IconSidebar />
      </div>

      <div className="ambassador-content">
        {/* Profile Header */}
        <div className="amb-profile">
          <nav className="amb-breadcrumb">
            <span className="material-symbols-outlined amb-breadcrumb__icon">
              person_check
            </span>
            <span className="material-symbols-outlined amb-breadcrumb__arrow">
              chevron_right
            </span>
            <span className="amb-breadcrumb__link">Login ambassadors</span>
            <span className="material-symbols-outlined amb-breadcrumb__arrow">
              chevron_right
            </span>
            <span className="amb-breadcrumb__current">{name}</span>
          </nav>

          <div className="amb-profile__row">
            <div className="amb-profile__name-group">
              <h1 className="amb-profile__name">{name}</h1>
              <span className="amb-profile__badge">
                <span className="material-symbols-outlined amb-profile__badge-icon">
                  check_circle
                </span>
                Active
              </span>
            </div>
            <button className="amb-profile__update-btn">UPDATE STATS</button>
          </div>

          {/* Tabs */}
          <div className="amb-tabs">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`amb-tabs__item${tab === activeTab ? ' amb-tabs__item--active' : ''}`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Sub-navigation */}
        <div className="amb-subnav">
          <div className="amb-subnav__btn-group">
            {subNavTabs.map((tab) => (
              <button
                key={tab}
                className={`amb-subnav__btn${tab === activeSubNav ? ' amb-subnav__btn--active' : ''}`}
                onClick={() => setActiveSubNav(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="amb-subnav__date-picker">
            <span className="material-symbols-outlined">calendar_today</span>
            <span>July 01, 2025 - July 31, 2025</span>
          </div>
        </div>

        {/* Cards */}
        <div className="amb-cards">
          {/* Retainer Performance */}
          <div className="amb-perf-card">
            <div className="amb-perf-card__header">Retainer performance</div>
            <div className="amb-perf-card__divider" />
            <div className="amb-perf-card__grid">
              {perfStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`amb-perf-card__item${stat.bordered ? ' amb-perf-card__item--bordered' : ''}`}
                >
                  <div className="amb-perf-card__label">{stat.label}</div>
                  <div className="amb-perf-card__value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="amb-bottom-row">
            {/* Cost & Charges */}
            <div className="amb-cost-card">
              <div className="amb-cost-card__header">Cost &amp; charges</div>
              <div className="amb-cost-card__divider" />
              <div className="amb-cost-card__grid">
                {costStats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`amb-cost-card__item${stat.bordered ? ' amb-cost-card__item--bordered' : ''}`}
                  >
                    <div className="amb-cost-card__label">{stat.label}</div>
                    <div className="amb-cost-card__value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Usage */}
            <div className="amb-brand-card">
              <div className="amb-brand-card__header">Brand usage</div>
              <div className="amb-brand-card__divider" />
              <table className="amb-brand-card__table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Retainer charges</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand.name}>
                      <td>
                        <div className="amb-brand-card__brand-cell">
                          <div
                            className="amb-brand-card__avatar"
                            style={{ background: brand.color }}
                          />
                          {brand.name}
                        </div>
                      </td>
                      <td>{brand.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
