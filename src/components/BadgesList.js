import React from 'react';
<<<<<<< HEAD

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
=======
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

const BadgesList = props => {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(props.badges)

    React.useMemo(() => {
        const result = props.badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setFilteredBadges(result)
    }, [ props.badges, query ]);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={e => {setQuery(e.target.value)}}
                    />
                </div>
                
                <h3>There is no badge to display</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>                
            </div>
        );
    }
    
    return (
        <React.Fragment>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={e => {setQuery(e.target.value)}}
                />
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none" key={badge.id}>
                            <li className="Badge_item">
                                <div className="row badge-container">
                                    <div className="avatar">
                                        <Gravatar email={badge.email} />
                                    </div>

                                    <div className="info">
                                        <div className="name">{badge.firstName} {badge.lastName}</div>
                                        <div className="twitter">@{badge.twitter}</div>
                                        <div className="jobTitle">{badge.jobTitle}</div>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </React.Fragment>
    );    
}

export default BadgesList;
>>>>>>> 1.ReactDOM.render
