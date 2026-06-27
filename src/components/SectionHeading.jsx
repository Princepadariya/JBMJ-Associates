export default function SectionHeading({ eyebrow, title, lead, center, light }) {
  return (
    <div className={`sec-head ${center ? 'sec-head--center' : ''} ${light ? 'sec-head--light' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{eyebrow}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
