import { useState } from 'react'
import { FiArrowRight, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'

/*
  Simplified ITR-form decision helper. Indicative only — edge cases exist;
  confirm the correct form with us before filing.
*/
const RESULTS = {
  itr1: { form: 'ITR-1 (Sahaj)', reason: 'For a resident individual with salary/pension, one house property and other-source income, where total income is up to ₹50 lakh.' },
  itr2: { form: 'ITR-2', reason: 'For individuals/HUF with capital gains, more than one house property, foreign income/assets, or total income above ₹50 lakh — but no business/professional income.' },
  itr3: { form: 'ITR-3', reason: 'For individuals/HUF carrying on a business or profession under regular (non-presumptive) accounting.' },
  itr4: { form: 'ITR-4 (Sugam)', reason: 'For residents opting for presumptive income under Sec 44AD / 44ADA / 44AE, with total income up to ₹50 lakh.' },
  itr5: { form: 'ITR-5', reason: 'For Firms, LLPs, AOPs and BOIs.' },
  itr6: { form: 'ITR-6', reason: 'For companies (other than those claiming exemption under Sec 11).' },
  itr7: { form: 'ITR-7', reason: 'For trusts, charitable/religious institutions and similar persons filing under Sec 139(4A)–(4F).' },
}

export default function ItrSelector() {
  const [a, setA] = useState({})
  const set = (k, v) => setA((prev) => ({ ...prev, [k]: v }))
  const reset = () => setA({})

  let question = null
  let result = null

  if (!a.who) {
    question = {
      key: 'who',
      title: 'Who is filing the return?',
      options: [
        { label: 'An individual or HUF', value: 'individual' },
        { label: 'A firm or LLP', value: 'firm' },
        { label: 'A company', value: 'company' },
        { label: 'A trust / NGO / institution', value: 'trust' },
      ],
    }
  } else if (a.who === 'firm') result = RESULTS.itr5
  else if (a.who === 'company') result = RESULTS.itr6
  else if (a.who === 'trust') result = RESULTS.itr7
  else if (a.business === undefined) {
    question = {
      key: 'business',
      title: 'Do you have income from business or profession?',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
    }
  } else if (a.business === 'yes') {
    if (a.presumptive === undefined) {
      question = {
        key: 'presumptive',
        title: 'Are you opting for presumptive taxation (Sec 44AD / 44ADA / 44AE)?',
        options: [
          { label: 'Yes, presumptive (income ≤ ₹50L)', value: 'yes' },
          { label: 'No, regular books of account', value: 'no' },
        ],
      }
    } else result = a.presumptive === 'yes' ? RESULTS.itr4 : RESULTS.itr3
  } else {
    // individual, no business
    if (a.complex === undefined) {
      question = {
        key: 'complex',
        title: 'Do any of these apply to you?',
        hint: 'Capital gains · foreign income or assets · more than one house property · total income above ₹50 lakh',
        options: [
          { label: 'Yes, at least one applies', value: 'yes' },
          { label: 'No, none apply', value: 'no' },
        ],
      }
    } else result = a.complex === 'yes' ? RESULTS.itr2 : RESULTS.itr1
  }

  const answered = Object.keys(a).length

  return (
    <div className="itr">
      {result ? (
        <div className="itr__result">
          <FiCheckCircle className="itr__result-icon" />
          <span className="itr__result-label">You likely need</span>
          <h3 className="itr__result-form">{result.form}</h3>
          <p className="itr__result-reason">{result.reason}</p>
          <div className="itr__result-actions">
            <button className="btn btn--outline" onClick={reset}>
              <FiRefreshCw /> Start over
            </button>
            <a href="/contact" className="btn btn--gold">
              Get help filing <FiArrowRight />
            </a>
          </div>
        </div>
      ) : (
        <div className="itr__question">
          {answered > 0 && (
            <button className="itr__restart" onClick={reset}>
              <FiRefreshCw /> Restart
            </button>
          )}
          <span className="itr__step">Question {answered + 1}</span>
          <h3 className="itr__q">{question.title}</h3>
          {question.hint && <p className="itr__hint">{question.hint}</p>}
          <div className="itr__options">
            {question.options.map((o) => (
              <button
                key={o.value}
                className="itr__option"
                onClick={() => set(question.key, o.value)}
              >
                {o.label}
                <FiArrowRight />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
