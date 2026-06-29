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
    note: 'Resident payees. Rates are indicative; thresholds, payee status and surcharge/cess can change the effective rate.',
    columns: ['Section', 'Nature of payment', 'Rate'],
    rows: [
      ['192', 'Salary', 'Slab rate'],
      ['194A', 'Interest (other than securities)', '10%'],
      ['194C', 'Payment to contractor', '1% (Ind/HUF) · 2% (others)'],
      ['194H', 'Commission / brokerage', '2%'],
      ['194I', 'Rent — plant & machinery', '2%'],
      ['194I', 'Rent — land / building', '10%'],
      ['194J', 'Professional / technical fees', '10% · 2% (technical)'],
      ['194Q', 'Purchase of goods', '0.1%'],
      ['194O', 'E-commerce operator', '0.1%'],
      ['206C(1H)', 'TCS on sale of goods', '0.1%'],
    ],
  },
  {
    id: 'gst',
    label: 'GST Slabs',
    note: 'Indicative slabs. The exact rate depends on the HSN/SAC classification of the specific good or service.',
    columns: ['Rate', 'Typically applies to'],
    rows: [
      ['0% / Exempt', 'Essential food grains, fresh produce, healthcare, education'],
      ['5%', 'Mass-consumption items, transport, small restaurants'],
      ['12%', 'Processed foods, business-class travel, certain goods'],
      ['18%', 'Most goods & services (standard rate)'],
      ['28%', 'Luxury & “sin” goods — cars, tobacco, aerated drinks (often + cess)'],
    ],
  },
  {
    id: 'income-tax',
    label: 'Income Tax Slabs',
    note: 'New regime (default). Indicative — standard deduction of ₹75,000 for salaried; rebate u/s 87A makes tax nil up to the prescribed taxable income. Old regime slabs differ.',
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
