export default function SectionHeading({ eyebrow, title, lead, center, light, index }) {
  return (
    <div className={`sec-head ${center ? 'sec-head--center' : ''} ${light ? 'sec-head--light' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>
          {index && <span className="eyebrow__index">{index}</span>}
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
