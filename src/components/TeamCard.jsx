import { useState } from 'react'

/*
  Team member card. Shows the member photo when `member.photo` is set and
  loads successfully; otherwise falls back to an elegant monogram placeholder.
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
  const [imgFailed, setImgFailed] = useState(false)
  const showPhoto = member.photo && !imgFailed

  return (
    <article className={`team-card ${detailed ? 'team-card--detailed' : ''}`}>
      <div className="team-card__photo">
        {showPhoto ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="team-card__placeholder" aria-label={`${member.name} photo placeholder`}>
            <span className="team-card__monogram">{initials(member.name)}</span>
            <span className="team-card__ph-note">Photo coming soon</span>
          </div>
        )}
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
