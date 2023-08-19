// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails

  const statusClassName = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <img
        className="match-card-competing-team-logo"
        src={`${competingTeamLogo}`}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-competing-team-name">{competingTeam}</p>
      <p className="match-card-competing-team-result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
