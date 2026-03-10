import './CreatorTable.css';

const creators = [
  {
    name: 'Jamie Alvarez',
    email: 'lunar.grow@email.com',
    status: 'Awaiting contact',
    lifecycle: 'Recruit',
    manager: 'Not assigned',
    color: '#e3a87c',
  },
  {
    name: 'Robin Banks',
    email: 'dripfx.info@email.com',
    status: 'Contacted',
    lifecycle: 'Recruit',
    manager: 'Not assigned',
    color: '#8db4e2',
  },
  {
    name: 'Quinn Diaz',
    email: 'hello@modohaus.com',
    status: 'Pitched',
    lifecycle: 'Recruit',
    manager: 'Not assigned',
    color: '#c49cd8',
  },
  {
    name: 'Amari Fox',
    email: 'info@emberco.net',
    status: 'Contract sent',
    lifecycle: 'Recruit',
    manager: 'Not assigned',
    color: '#7ec8a0',
  },
  {
    name: 'Dakota Lane',
    email: 'slate.ivy@email.com',
    status: 'Undefined',
    lifecycle: 'Ambassador',
    manager: 'Rauru Hylia',
    color: '#d4a574',
  },
  {
    name: 'Dakota Lane',
    email: 'slate.ivy@email.com',
    status: 'Active',
    lifecycle: 'Ambassador',
    manager: 'Saria Kokiri',
    color: '#d4a574',
  },
];

export default function CreatorTable() {
  return (
    <div className="creator-table">
      <div className="creator-table__search-bar">
        <div className="creator-table__search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="creator-table__search-input"
            placeholder="Search creator"
          />
        </div>
      </div>
      <div className="creator-table__divider" />
      <table className="creator-table__table">
        <thead>
          <tr>
            <th className="creator-table__col-name">Name</th>
            <th className="creator-table__col-email">Email</th>
            <th className="creator-table__col-status">Current status</th>
            <th className="creator-table__col-lifecycle">Lifecycle type</th>
            <th className="creator-table__col-manager">Creator support manager</th>
          </tr>
        </thead>
        <tbody>
          {creators.map((creator, i) => (
            <tr key={`${creator.name}-${i}`}>
              <td>
                <div className="creator-table__name-cell">
                  <div
                    className="creator-table__avatar"
                    style={{ background: creator.color }}
                  />
                  {creator.name}
                </div>
              </td>
              <td>{creator.email}</td>
              <td>{creator.status}</td>
              <td>{creator.lifecycle}</td>
              <td>{creator.manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
