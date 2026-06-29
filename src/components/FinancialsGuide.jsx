import { FiTrendingUp, FiLayers, FiRefreshCw } from 'react-icons/fi'

/*
  Plain-English guide to the three core financial statements, written for
  business owners (not accountants).
*/
export default function FinancialsGuide() {
  return (
    <div className="finguide">
      <p className="finguide__lead">
        Your financial statements tell the story of your business in three parts:
        how much you earned, what you own and owe, and where the cash actually
        went. Here’s what each one means — in plain language.
      </p>

      {/* P&L */}
      <article className="finguide__block">
        <header className="finguide__head">
          <span className="finguide__icon"><FiTrendingUp /></span>
          <div>
            <h2>1. Profit &amp; Loss (P&amp;L)</h2>
            <p className="finguide__sub">“Did the business make money over the year?”</p>
          </div>
        </header>
        <p>
          The P&amp;L (also called the Income Statement) shows your <strong>revenue</strong>,
          subtracts your <strong>expenses</strong>, and leaves you with <strong>profit</strong>
          {' '}(or loss) for a period. Read it top to bottom — sales at the top,
          costs in the middle, profit at the bottom (the “bottom line”).
        </p>
        <div className="finguide__sample">
          <div className="finguide__row"><span>Revenue (sales)</span><strong>₹ 50,00,000</strong></div>
          <div className="finguide__row finguide__row--sub"><span>Less: Cost of goods / services</span><span>₹ 30,00,000</span></div>
          <div className="finguide__row finguide__row--mid"><span>Gross profit</span><strong>₹ 20,00,000</strong></div>
          <div className="finguide__row finguide__row--sub"><span>Less: Operating expenses (rent, salaries…)</span><span>₹ 12,00,000</span></div>
          <div className="finguide__row finguide__row--total"><span>Net profit</span><strong>₹ 8,00,000</strong></div>
        </div>
        <p className="finguide__tip">
          <strong>What to watch:</strong> Is gross profit healthy after direct costs?
          Is net profit growing year on year, or are expenses eating your margins?
        </p>
      </article>

      {/* Balance sheet */}
      <article className="finguide__block">
        <header className="finguide__head">
          <span className="finguide__icon"><FiLayers /></span>
          <div>
            <h2>2. Balance Sheet</h2>
            <p className="finguide__sub">“What does the business own and owe, right now?”</p>
          </div>
        </header>
        <p>
          A snapshot on a single date. It always balances:
          {' '}<strong>Assets = Liabilities + Equity</strong>. Assets are what you own
          (cash, stock, machinery, receivables); liabilities are what you owe
          (loans, creditors); equity is the owners’ stake.
        </p>
        <div className="finguide__sample finguide__sample--two">
          <div>
            <span className="finguide__col">Assets</span>
            <div className="finguide__row"><span>Cash &amp; bank</span><span>₹ 5,00,000</span></div>
            <div className="finguide__row"><span>Receivables &amp; stock</span><span>₹ 15,00,000</span></div>
            <div className="finguide__row"><span>Plant &amp; equipment</span><span>₹ 20,00,000</span></div>
            <div className="finguide__row finguide__row--total"><span>Total</span><strong>₹ 40,00,000</strong></div>
          </div>
          <div>
            <span className="finguide__col">Liabilities + Equity</span>
            <div className="finguide__row"><span>Loans</span><span>₹ 12,00,000</span></div>
            <div className="finguide__row"><span>Creditors</span><span>₹ 8,00,000</span></div>
            <div className="finguide__row"><span>Owner’s equity</span><span>₹ 20,00,000</span></div>
            <div className="finguide__row finguide__row--total"><span>Total</span><strong>₹ 40,00,000</strong></div>
          </div>
        </div>
        <p className="finguide__tip">
          <strong>What to watch:</strong> Can your current assets cover your
          short-term dues? Are loans growing faster than equity?
        </p>
      </article>

      {/* Cash flow */}
      <article className="finguide__block">
        <header className="finguide__head">
          <span className="finguide__icon"><FiRefreshCw /></span>
          <div>
            <h2>3. Cash Flow Statement</h2>
            <p className="finguide__sub">“Profit is on paper — but where did the cash go?”</p>
          </div>
        </header>
        <p>
          A business can be profitable yet run out of cash. This statement tracks
          actual cash movement across three buckets:
          {' '}<strong>operating</strong> (day-to-day trading),
          {' '}<strong>investing</strong> (buying/selling assets), and
          {' '}<strong>financing</strong> (loans, capital, dividends).
        </p>
        <div className="finguide__sample">
          <div className="finguide__row"><span>Cash from operations</span><strong>₹ 7,00,000</strong></div>
          <div className="finguide__row finguide__row--sub"><span>Cash used in investing (e.g. machinery)</span><span>(₹ 4,00,000)</span></div>
          <div className="finguide__row finguide__row--sub"><span>Cash from financing (loan taken)</span><span>₹ 2,00,000</span></div>
          <div className="finguide__row finguide__row--total"><span>Net increase in cash</span><strong>₹ 5,00,000</strong></div>
        </div>
        <p className="finguide__tip">
          <strong>What to watch:</strong> Healthy businesses generate positive cash
          from operations — not just from new loans.
        </p>
      </article>

      <p className="finguide__close">
        Put together, the three tell you whether your business is
        <strong> profitable</strong>, <strong>solvent</strong>, and
        <strong> liquid</strong>. If yours raise questions, that’s exactly what we
        help our clients understand and act on.
      </p>
    </div>
  )
}
