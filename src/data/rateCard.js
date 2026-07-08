/*
  Consolidated rate card. All figures are INDICATIVE and simplified — rates
  change with every Budget/notification and can vary by state, turnover, payee
  status and other conditions. Always confirm the current applicable rate.
  Review and update every April.
*/
export const rateCardTables = [
  {
    id: 'tds',
    label: 'TDS Rates',
    note: 'Income Tax Act 2025, FY 2026-27 onwards. Resident payees. Rates are indicative; thresholds, payee status and surcharge/cess can change the effective rate.',
    columns: ['Section', 'Nature of payment', 'Rate', 'Threshold (₹)'],
    rows: [
      ['392', 'Salary', 'Slab rate', 'Basic exemption'],
      ['392(7)', 'EPF premature withdrawal', '10%', '50,000'],
      ['393(1)', 'Interest on securities', '10%', '10,000'],
      ['393(1)', 'Dividends', '10%', '10,000'],
      ['393(1)', 'Interest (Bank / Post Office)', '10%', '50,000 / 1,00,000 (Sr.)'],
      ['393(1)', 'Contractor (Individual / HUF)', '1%', '30,000 / 1,00,000'],
      ['393(1)', 'Contractor (Others)', '2%', '30,000 / 1,00,000'],
      ['393(1)', 'Commission / brokerage', '2%', '20,000'],
      ['393(1)', 'Rent — plant & machinery', '2%', '50,000/month'],
      ['393(1)', 'Rent — land / building', '10%', '50,000/month'],
      ['393(1)', 'Professional fees', '10%', '50,000'],
      ['393(1)', 'Technical services', '2%', '50,000'],
      ['393(1)', 'Purchase of goods', '0.1%', '50,00,000'],
      ['393(1)', 'E-commerce operator', '0.1%', '5,00,000'],
      ['393(1)', 'Payments to partners', '10%', '20,000'],
      ['393(1)', 'Lottery / gaming winnings', '30%', '10,000'],
    ],
  },
  {
    id: 'gst',
    label: 'GST Slabs',
    note: 'GST 2.0 (effective 22 Sep 2025): the 12% and 28% slabs were merged into 5% and 18%, with a new 40% rate for sin & luxury goods. Special rates (e.g. 3% on gold, 0.25% on rough diamonds) still apply. Exact rate depends on HSN/SAC classification.',
    columns: ['Rate', 'Typically applies to'],
    rows: [
      ['0% / Exempt', 'Essential food grains, fresh produce, healthcare, education'],
      ['3%', 'Gold, silver and jewellery'],
      ['5%', 'Most daily-use goods, packaged food, transport, small restaurants'],
      ['18%', 'Standard rate — most goods & services, electronics, small cars'],
      ['40%', 'Sin & luxury goods — tobacco, pan masala, aerated drinks, luxury cars'],
    ],
  },
  {
    id: 'income-tax',
    label: 'Income Tax Slabs',
    note: 'New regime (default), FY 2026-27. Indicative — standard deduction of ₹75,000 for salaried; rebate makes tax nil for taxable income up to ₹12,00,000. Old regime slabs differ.',
    columns: ['Taxable income', 'Rate'],
    rows: [
      ['Up to ₹4,00,000', 'Nil'],
      ['₹4,00,001 – ₹8,00,000', '5%'],
      ['₹8,00,001 – ₹12,00,000', '10%'],
      ['₹12,00,001 – ₹16,00,000', '15%'],
      ['₹16,00,001 – ₹20,00,000', '20%'],
      ['₹20,00,001 – ₹24,00,000', '25%'],
      ['Above ₹24,00,000', '30%'],
    ],
  },
  {
    id: 'roc',
    label: 'ROC / MCA Fees',
    note: 'Indicative government fees. Actual fees depend on authorised capital; additional (late) fees apply on delayed filing.',
    columns: ['Form / service', 'Purpose', 'Indicative fee'],
    rows: [
      ['SPICe+', 'Company incorporation', 'Nil govt fee up to ₹15L capital (+ stamp duty)'],
      ['RUN', 'Name reservation', '₹1,000'],
      ['AOC-4', 'Financial statements filing', '₹300 – ₹600 (by capital)'],
      ['MGT-7', 'Annual return filing', '₹300 – ₹600 (by capital)'],
      ['DIR-3 KYC', 'Director KYC', 'Nil on time · ₹5,000 if late'],
      ['Late filing', 'Most forms', '₹100 per day of delay'],
    ],
  },
  {
    id: 'pt',
    label: 'Professional Tax',
    note: 'Gujarat slabs (the firm’s base state). Professional tax is a state levy — rates and slabs differ in every state.',
    columns: ['Monthly salary / wage', 'PT per month'],
    rows: [
      ['Up to ₹12,000', 'Nil'],
      ['Above ₹12,000', '₹200'],
    ],
  },
  {
    id: 'stamp',
    label: 'Stamp Duty',
    note: 'Gujarat, indicative only. Stamp duty is a state subject and varies widely; rebates (e.g. for female buyers) and registration fees apply separately.',
    columns: ['Instrument', 'Indicative duty (Gujarat)'],
    rows: [
      ['Sale / conveyance of immovable property', '~4.9% of value (+ 1% registration)'],
      ['Gift deed (non-family)', 'Same as conveyance'],
      ['Lease / rent agreement', 'Based on rent & term'],
      ['Partnership deed', 'Fixed nominal duty'],
      ['LLP agreement', 'Based on capital contribution'],
    ],
  },
]
