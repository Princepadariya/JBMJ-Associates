import { useMemo, useState } from 'react'
import { FiPercent, FiHome, FiPieChart, FiKey, FiGift } from 'react-icons/fi'

const inr = (n) =>
  isFinite(n)
    ? '₹ ' + Math.round(n).toLocaleString('en-IN')
    : '₹ 0'

/* ---------------- GST Calculator ---------------- */
function GstCalculator() {
  const [amount, setAmount] = useState(10000)
  const [rate, setRate] = useState(18)
  const [mode, setMode] = useState('exclusive') // add GST / extract GST

  const { gst, total, base } = useMemo(() => {
    const a = Number(amount) || 0
    const r = Number(rate) || 0
    if (mode === 'exclusive') {
      const g = (a * r) / 100
      return { base: a, gst: g, total: a + g }
    }
    const b = a / (1 + r / 100)
    return { base: b, gst: a - b, total: a }
  }, [amount, rate, mode])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Amount (₹)
          <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label className="calc__field">
          GST Rate
          <select value={rate} onChange={(e) => setRate(e.target.value)}>
            {[0, 3, 5, 12, 18, 28].map((r) => (
              <option key={r} value={r}>{r}%</option>
            ))}
          </select>
        </label>
        <label className="calc__field">
          Calculation
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="exclusive">Add GST (exclusive)</option>
            <option value="inclusive">Remove GST (inclusive)</option>
          </select>
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Base amount</span><strong>{inr(base)}</strong></div>
        <div className="calc__result"><span>GST ({rate}%)</span><strong>{inr(gst)}</strong></div>
        <div className="calc__result calc__result--total"><span>Total</span><strong>{inr(total)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- EMI Calculator ---------------- */
function EmiCalculator() {
  const [principal, setPrincipal] = useState(2500000)
  const [rate, setRate] = useState(9)
  const [years, setYears] = useState(20)

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const p = Number(principal) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    if (!p || !n) return { emi: 0, totalInterest: 0, totalPayable: 0 }
    const e = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = e * n
    return { emi: e, totalInterest: total - p, totalPayable: total }
  }, [principal, rate, years])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Loan amount (₹)
          <input type="number" min="0" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
        <label className="calc__field">
          Interest rate (% p.a.)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label className="calc__field">
          Tenure (years)
          <input type="number" min="1" value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result calc__result--total"><span>Monthly EMI</span><strong>{inr(emi)}</strong></div>
        <div className="calc__result"><span>Total interest</span><strong>{inr(totalInterest)}</strong></div>
        <div className="calc__result"><span>Total payable</span><strong>{inr(totalPayable)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Income Tax (New Regime) Estimator ---------------- */
function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000)

  const { tax, cess, total, taxable } = useMemo(() => {
    const gross = Number(income) || 0
    const standardDeduction = 75000
    const t = Math.max(0, gross - standardDeduction)
    // Indicative new-regime slabs
    const slabs = [
      [400000, 0],
      [800000, 0.05],
      [1200000, 0.1],
      [1600000, 0.15],
      [2000000, 0.2],
      [2400000, 0.25],
      [Infinity, 0.3],
    ]
    let remaining = t
    let prev = 0
    let baseTax = 0
    for (const [limit, r] of slabs) {
      if (remaining <= 0) break
      const band = Math.min(remaining, limit - prev)
      baseTax += band * r
      remaining -= band
      prev = limit
    }
    // Section 87A rebate (indicative) for taxable income up to 12,00,000
    if (t <= 1200000) baseTax = 0
    const c = baseTax * 0.04
    return { taxable: t, tax: baseTax, cess: c, total: baseTax + c }
  }, [income])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Annual income (₹)
          <input type="number" min="0" value={income} onChange={(e) => setIncome(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">New regime · ₹75,000 standard deduction · indicative</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Taxable income</span><strong>{inr(taxable)}</strong></div>
        <div className="calc__result"><span>Income tax</span><strong>{inr(tax)}</strong></div>
        <div className="calc__result"><span>Health & edu. cess (4%)</span><strong>{inr(cess)}</strong></div>
        <div className="calc__result calc__result--total"><span>Total tax</span><strong>{inr(total)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- HRA Exemption Calculator ---------------- */
function HraCalculator() {
  const [basic, setBasic] = useState(50000)
  const [hra, setHra] = useState(20000)
  const [rent, setRent] = useState(18000)
  const [metro, setMetro] = useState('yes')

  const { exempt, taxable } = useMemo(() => {
    const b = Number(basic) || 0
    const h = Number(hra) || 0
    const r = Number(rent) || 0
    const a = h // actual HRA received (monthly)
    const c = Math.max(0, r - 0.1 * b) // rent paid - 10% of basic
    const d = (metro === 'yes' ? 0.5 : 0.4) * b // 50%/40% of basic
    const e = Math.max(0, Math.min(a, c, d))
    return { exempt: e, taxable: Math.max(0, h - e) }
  }, [basic, hra, rent, metro])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Basic salary (monthly ₹)
          <input type="number" min="0" value={basic} onChange={(e) => setBasic(e.target.value)} />
        </label>
        <label className="calc__field">
          HRA received (monthly ₹)
          <input type="number" min="0" value={hra} onChange={(e) => setHra(e.target.value)} />
        </label>
        <label className="calc__field">
          Rent paid (monthly ₹)
          <input type="number" min="0" value={rent} onChange={(e) => setRent(e.target.value)} />
        </label>
        <label className="calc__field">
          Metro city?
          <select value={metro} onChange={(e) => setMetro(e.target.value)}>
            <option value="yes">Yes (50%)</option>
            <option value="no">No (40%)</option>
          </select>
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>HRA received</span><strong>{inr(Number(hra) || 0)}</strong></div>
        <div className="calc__result"><span>Taxable HRA</span><strong>{inr(taxable)}</strong></div>
        <div className="calc__result calc__result--total"><span>Exempt HRA</span><strong>{inr(exempt)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Gratuity Calculator ---------------- */
function GratuityCalculator() {
  const [salary, setSalary] = useState(60000)
  const [years, setYears] = useState(10)

  const gratuity = useMemo(() => {
    const s = Number(salary) || 0 // last drawn basic + DA (monthly)
    const y = Number(years) || 0
    // Payment of Gratuity Act formula: (15/26) × salary × years
    return (15 / 26) * s * y
  }, [salary, years])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Last drawn salary (Basic + DA, monthly ₹)
          <input type="number" min="0" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        <label className="calc__field">
          Years of service
          <input type="number" min="0" value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">Payment of Gratuity Act · (15 ÷ 26) × salary × years</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Years of service</span><strong>{Number(years) || 0}</strong></div>
        <div className="calc__result calc__result--total"><span>Gratuity payable</span><strong>{inr(gratuity)}</strong></div>
      </div>
    </div>
  )
}

const CALCS = [
  { id: 'gst', label: 'GST', icon: FiPercent, Comp: GstCalculator },
  { id: 'emi', label: 'EMI', icon: FiHome, Comp: EmiCalculator },
  { id: 'tax', label: 'Income Tax', icon: FiPieChart, Comp: IncomeTaxCalculator },
  { id: 'hra', label: 'HRA', icon: FiKey, Comp: HraCalculator },
  { id: 'gratuity', label: 'Gratuity', icon: FiGift, Comp: GratuityCalculator },
]

export default function Calculators() {
  const [active, setActive] = useState('gst')
  const Active = CALCS.find((c) => c.id === active).Comp

  return (
    <div className="calculators">
      <div className="calculators__switch">
        {CALCS.map((c) => {
          const Icon = c.icon
          return (
            <button
              key={c.id}
              className={`calculators__tab ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <Icon /> {c.label}
            </button>
          )
        })}
      </div>
      <Active />
      <p className="calculators__disclaimer">
        These calculators are provided for general guidance only and use
        indicative rates. Please consult us for advice specific to your situation.
      </p>
    </div>
  )
}
