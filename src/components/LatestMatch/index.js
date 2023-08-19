// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, teamBannerUrl} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="match-container">
      <img
        className="team-banner-image"
        src={teamBannerUrl}
        alt="team banner"
      />
      <h1 className="team-matches-heading">Latest Matches</h1>
      <div className="latest-match-details-container">
        <div className="latest-match-container">
          <div className="match-venue-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="break-line" />
        <div className="match-innings-container">
          <h className="match-headings">First Innings</h>
          <p className="match-innings-team-name">{firstInnings}</p>
          <h1 className="match-headings">Second Innings</h1>
          <p className="match-innings-team-name">{secondInnings}</p>
          <h1 className="match-headings">Man Of The Match</h1>
          <p className="match-innings-team-name">{manOfTheMatch}</p>
          <h1 className="match-headings">Umpires</h1>
          <p className="match-innings-team-name">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
