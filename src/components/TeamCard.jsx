/*
  Team member card. Shows the member photo when `member.photo` is set,
  otherwise renders an elegant monogram placeholder.
*/
function initials(name) {
  return name
    .replace(/^(CA|CS)\s+/i, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TeamCard({ member, detailed = false }) {
  return (
    <article className={`team-card ${detailed ? 'team-card--detailed' : ''}`}>
      <div className="team-card__photo">
        {member.photo ? (
          <img src={member.photo} alt={member.name} loading="lazy" />
        ) : (
          <div className="team-card__placeholder" aria-label={`${member.name} photo placeholder`}>
            <span className="team-card__monogram">{initials(member.name)}</span>
            <span className="team-card__ph-note">Photo coming soon</span>
          </div>
        )}
        <span className="team-card__badge">{member.name.startsWith('CS') ? 'CS' : 'CA'}</span>
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__cred">{member.credential}</p>
        <p className="team-card__bio">{member.bio}</p>

        {detailed && member.extended && (
          <p className="team-card__bio team-card__bio--ext">{member.extended}</p>
        )}

        {member.expertise && (
          <ul className="team-card__tags">
            {member.expertise.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
