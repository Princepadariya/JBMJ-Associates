import { useMemo, useState } from 'react'
import {
  FiPercent,
  FiHome,
  FiPieChart,
  FiKey,
  FiGift,
  FiDollarSign,
  FiTrendingUp,
  FiRepeat,
  FiBarChart2,
  FiClock,
  FiBriefcase,
  FiActivity,
  FiAlertCircle,
} from 'react-icons/fi'

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

/* ---------------- FD (Fixed Deposit) Calculator ---------------- */
function FdCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)
  const [freq, setFreq] = useState(4) // compounding per year

  const { maturity, interest } = useMemo(() => {
    const p = Number(principal) || 0
    const r = Number(rate) || 0
    const t = Number(years) || 0
    const n = Number(freq) || 1
    const m = p * Math.pow(1 + r / 100 / n, n * t)
    return { maturity: m, interest: m - p }
  }, [principal, rate, years, freq])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Deposit amount (₹)
          <input type="number" min="0" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
        <label className="calc__field">
          Interest rate (% p.a.)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label className="calc__field">
          Tenure (years)
          <input type="number" min="0" step="0.5" value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
        <label className="calc__field">
          Compounding
          <select value={freq} onChange={(e) => setFreq(e.target.value)}>
            <option value={1}>Yearly</option>
            <option value={2}>Half-yearly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Invested amount</span><strong>{inr(Number(principal) || 0)}</strong></div>
        <div className="calc__result"><span>Interest earned</span><strong>{inr(interest)}</strong></div>
        <div className="calc__result calc__result--total"><span>Maturity value</span><strong>{inr(maturity)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Capital Gains Calculator ---------------- */
function CapitalGainsCalculator() {
  const [sale, setSale] = useState(800000)
  const [cost, setCost] = useState(500000)
  const [expenses, setExpenses] = useState(0)
  const [type, setType] = useState('equity-ltcg')

  const RATES = {
    'equity-ltcg': { label: 'Equity – Long term', rate: 12.5, exempt: 125000 },
    'equity-stcg': { label: 'Equity – Short term', rate: 20, exempt: 0 },
    'other-ltcg': { label: 'Other assets – Long term', rate: 12.5, exempt: 0 },
    'other-stcg': { label: 'Other assets – Short term (slab)', rate: null, exempt: 0 },
  }

  const { gain, taxable, tax, slab } = useMemo(() => {
    const g = (Number(sale) || 0) - (Number(cost) || 0) - (Number(expenses) || 0)
    const cfg = RATES[type]
    if (cfg.rate === null) return { gain: g, taxable: Math.max(0, g), tax: 0, slab: true }
    const t = Math.max(0, g - cfg.exempt)
    return { gain: g, taxable: t, tax: (t * cfg.rate) / 100, slab: false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sale, cost, expenses, type])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Sale value (₹)
          <input type="number" min="0" value={sale} onChange={(e) => setSale(e.target.value)} />
        </label>
        <label className="calc__field">
          Purchase cost (₹)
          <input type="number" min="0" value={cost} onChange={(e) => setCost(e.target.value)} />
        </label>
        <label className="calc__field">
          Transfer expenses (₹)
          <input type="number" min="0" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        </label>
        <label className="calc__field">
          Asset & holding type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {Object.entries(RATES).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Capital gain</span><strong>{inr(gain)}</strong></div>
        <div className="calc__result"><span>Taxable gain</span><strong>{inr(taxable)}</strong></div>
        <div className="calc__result calc__result--total">
          <span>Estimated tax</span>
          <strong>{slab ? 'As per slab' : inr(tax)}</strong>
        </div>
      </div>
    </div>
  )
}

/* ---------------- SIP Calculator ---------------- */
function SipCalculator() {
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const { invested, value, returns } = useMemo(() => {
    const p = Number(monthly) || 0
    const i = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    const fv = i === 0 ? p * n : p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const inv = p * n
    return { invested: inv, value: fv, returns: fv - inv }
  }, [monthly, rate, years])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Monthly investment (₹)
          <input type="number" min="0" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
        </label>
        <label className="calc__field">
          Expected return (% p.a.)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label className="calc__field">
          Investment period (years)
          <input type="number" min="0" value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Invested amount</span><strong>{inr(invested)}</strong></div>
        <div className="calc__result"><span>Estimated returns</span><strong>{inr(returns)}</strong></div>
        <div className="calc__result calc__result--total"><span>Total value</span><strong>{inr(value)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Salary Hike Calculator ---------------- */
function SalaryHikeCalculator() {
  const [current, setCurrent] = useState(50000)
  const [hike, setHike] = useState(15)

  const { newSalary, increment } = useMemo(() => {
    const c = Number(current) || 0
    const h = Number(hike) || 0
    const ns = c * (1 + h / 100)
    return { newSalary: ns, increment: ns - c }
  }, [current, hike])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Current salary (₹)
          <input type="number" min="0" value={current} onChange={(e) => setCurrent(e.target.value)} />
        </label>
        <label className="calc__field">
          Hike (%)
          <input type="number" min="0" step="0.1" value={hike} onChange={(e) => setHike(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">New salary = current × (1 + hike%)</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Current salary</span><strong>{inr(Number(current) || 0)}</strong></div>
        <div className="calc__result"><span>Increment</span><strong>{inr(increment)}</strong></div>
        <div className="calc__result calc__result--total"><span>Revised salary</span><strong>{inr(newSalary)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Late Fee Calculator (GST returns) ---------------- */
function LateFeeCalculator() {
  const [type, setType] = useState('normal')
  const [days, setDays] = useState(10)

  const PER_DAY = { normal: 50, nil: 20 } // ₹/day (CGST + SGST combined)
  const CAP = { normal: 5000, nil: 500 }

  const { fee, perDay, capped } = useMemo(() => {
    const pd = PER_DAY[type]
    const raw = pd * (Number(days) || 0)
    const cap = CAP[type]
    return { fee: Math.min(raw, cap), perDay: pd, capped: raw > cap }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, days])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Return type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="normal">GST return – Normal (₹50/day)</option>
            <option value="nil">GST return – Nil (₹20/day)</option>
          </select>
        </label>
        <label className="calc__field">
          Days delayed
          <input type="number" min="0" value={days} onChange={(e) => setDays(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">₹{perDay}/day (CGST + SGST), subject to statutory cap</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Rate per day</span><strong>₹ {perDay}</strong></div>
        <div className="calc__result"><span>Days delayed</span><strong>{Number(days) || 0}</strong></div>
        <div className="calc__result calc__result--total">
          <span>Late fee {capped ? '(capped)' : ''}</span>
          <strong>{inr(fee)}</strong>
        </div>
      </div>
    </div>
  )
}

/* ---------------- MSME Interest Calculator (delayed payment) ---------------- */
function MsmeInterestCalculator() {
  const [amount, setAmount] = useState(500000)
  const [days, setDays] = useState(90)
  const [rate, setRate] = useState(18) // ~3× RBI bank rate

  const { interest, total } = useMemo(() => {
    const p = Number(amount) || 0
    const i = (Number(rate) || 0) / 12 / 100 // monthly rests per MSMED Act
    const m = (Number(days) || 0) / 30
    const compounded = p * Math.pow(1 + i, m)
    return { interest: compounded - p, total: compounded }
  }, [amount, days, rate])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Overdue amount (₹)
          <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label className="calc__field">
          Days delayed (beyond due date)
          <input type="number" min="0" value={days} onChange={(e) => setDays(e.target.value)} />
        </label>
        <label className="calc__field">
          Interest rate (% p.a.)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">MSMED Act: 3× RBI bank rate, compounded monthly</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Overdue amount</span><strong>{inr(Number(amount) || 0)}</strong></div>
        <div className="calc__result calc__result--total"><span>Interest payable</span><strong>{inr(interest)}</strong></div>
        <div className="calc__result"><span>Total payable</span><strong>{inr(total)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- GST Interest Calculator (late payment) ---------------- */
function GstInterestCalculator() {
  const [tax, setTax] = useState(100000)
  const [days, setDays] = useState(30)
  const [rate, setRate] = useState(18)

  const interest = useMemo(() => {
    const t = Number(tax) || 0
    const r = Number(rate) || 0
    const d = Number(days) || 0
    return (t * r * d) / 100 / 365
  }, [tax, days, rate])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Tax amount (₹)
          <input type="number" min="0" value={tax} onChange={(e) => setTax(e.target.value)} />
        </label>
        <label className="calc__field">
          Days delayed
          <input type="number" min="0" value={days} onChange={(e) => setDays(e.target.value)} />
        </label>
        <label className="calc__field">
          Interest rate (% p.a.)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">Sec 50: 18% p.a. on late tax (24% for excess ITC)</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Tax amount</span><strong>{inr(Number(tax) || 0)}</strong></div>
        <div className="calc__result"><span>Days delayed</span><strong>{Number(days) || 0}</strong></div>
        <div className="calc__result calc__result--total"><span>Interest payable</span><strong>{inr(interest)}</strong></div>
      </div>
    </div>
  )
}

/* ---------------- Tax Interest Calculator (income tax 234A/B/C) ---------------- */
function TaxInterestCalculator() {
  const [tax, setTax] = useState(100000)
  const [months, setMonths] = useState(3)
  const [rate, setRate] = useState(1) // % per month

  const interest = useMemo(() => {
    const t = Number(tax) || 0
    const r = Number(rate) || 0
    const m = Math.ceil(Number(months) || 0) // part of a month counts as full
    return (t * r * m) / 100
  }, [tax, months, rate])

  return (
    <div className="calc">
      <div className="calc__fields">
        <label className="calc__field">
          Tax due (₹)
          <input type="number" min="0" value={tax} onChange={(e) => setTax(e.target.value)} />
        </label>
        <label className="calc__field">
          Months delayed
          <input type="number" min="0" value={months} onChange={(e) => setMonths(e.target.value)} />
        </label>
        <label className="calc__field">
          Interest rate (% per month)
          <input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <div className="calc__field calc__field--note">
          Basis
          <span className="calc__hint">Sec 234A/B/C: 1% per month; part month = full month</span>
        </div>
      </div>
      <div className="calc__results">
        <div className="calc__result"><span>Tax due</span><strong>{inr(Number(tax) || 0)}</strong></div>
        <div className="calc__result"><span>Months delayed</span><strong>{Math.ceil(Number(months) || 0)}</strong></div>
        <div className="calc__result calc__result--total"><span>Interest payable</span><strong>{inr(interest)}</strong></div>
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
  { id: 'fd', label: 'FD', icon: FiDollarSign, Comp: FdCalculator },
  { id: 'sip', label: 'SIP', icon: FiRepeat, Comp: SipCalculator },
  { id: 'capital-gains', label: 'Capital Gains', icon: FiTrendingUp, Comp: CapitalGainsCalculator },
  { id: 'salary-hike', label: 'Salary Hike', icon: FiBarChart2, Comp: SalaryHikeCalculator },
  { id: 'late-fee', label: 'Late Fee', icon: FiClock, Comp: LateFeeCalculator },
  { id: 'msme-interest', label: 'MSME Interest', icon: FiBriefcase, Comp: MsmeInterestCalculator },
  { id: 'gst-interest', label: 'GST Interest', icon: FiActivity, Comp: GstInterestCalculator },
  { id: 'tax-interest', label: 'Tax Interest', icon: FiAlertCircle, Comp: TaxInterestCalculator },
]

export default function Calculators() {
  const [active, setActive] = useState('gst')
  const current = CALCS.find((c) => c.id === active)
  const Active = current.Comp
  const HeadIcon = current.icon

  return (
    <div className="calc-suite">
      {/* Desktop: sidebar list */}
      <aside className="calc-suite__nav" aria-label="Choose a calculator">
        <span className="calc-suite__navlabel">Calculators</span>
        {CALCS.map((c) => {
          const Icon = c.icon
          return (
            <button
              key={c.id}
              className={`calc-suite__navitem ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <Icon /> <span>{c.label}</span>
            </button>
          )
        })}
      </aside>

      {/* Panel */}
      <div className="calc-suite__main">
        {/* Mobile: dropdown selector */}
        <select
          className="calc-suite__select"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          aria-label="Choose a calculator"
        >
          {CALCS.map((c) => (
            <option key={c.id} value={c.id}>{c.label} Calculator</option>
          ))}
        </select>

        <div className="calc-suite__head">
          <span className="calc-suite__headicon"><HeadIcon /></span>
          <h3>{current.label} Calculator</h3>
        </div>

        <Active />

        <p className="calculators__disclaimer">
          These calculators are provided for general guidance only and use
          indicative rates. Please consult us for advice specific to your situation.
        </p>
      </div>
    </div>
  )
}
