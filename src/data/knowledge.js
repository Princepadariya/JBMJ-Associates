/*
  Knowledge Bank reference data.
  - Bulletins are illustrative SAMPLES — replace with the firm's own updates.
  - Links / Acts / Rules / Forms point to official government & regulatory
    portals. Deep links can change; where a precise page may move, we link to
    the relevant portal or the India Code repository.
*/

/* ---------------- Bulletins ---------------- */
export const bulletins = [
  {
    date: '2026-06-15',
    tag: 'Income Tax',
    title: 'ITR filing for AY 2026-27 — key changes & checklist',
    desc: 'A quick summary of the new schedules, reporting requirements and documents to keep ready before you file.',
  },
  {
    date: '2026-05-28',
    tag: 'GST',
    title: 'GST: important reconciliations before year-end returns',
    desc: 'Input tax credit matching, GSTR-2B vs books, and common mismatches that trigger notices.',
  },
  {
    date: '2026-05-10',
    tag: 'Corporate',
    title: 'ROC annual filing calendar for companies & LLPs',
    desc: 'Due dates for AOC-4, MGT-7 and LLP Form 8 / Form 11, with penalties for late filing.',
  },
  {
    date: '2026-04-18',
    tag: 'TDS',
    title: 'TDS rate chart & due dates — FY 2026-27',
    desc: 'Updated section-wise TDS/TCS rates and the monthly/quarterly compliance timeline.',
  },
  {
    date: '2026-04-02',
    tag: 'Income Tax',
    title: 'New financial year: things every business should set up now',
    desc: 'Books, invoicing series, TDS workings and advance-tax planning to begin FY 2026-27 cleanly.',
  },
  {
    date: '2026-03-20',
    tag: 'GST',
    title: 'E-invoicing & e-way bill — staying compliant',
    desc: 'Applicability thresholds, generation timelines and how to avoid mismatch penalties.',
  },
]

/* ---------------- Links (categorised) ---------------- */
export const linkGroups = [
  {
    group: 'Tax & Compliance Portals',
    links: [
      { title: 'Income Tax e-Filing', desc: 'Returns, Form 26AS / AIS, notices', href: 'https://www.incometax.gov.in/' },
      { title: 'GST Portal', desc: 'Registration, returns, payments & refunds', href: 'https://www.gst.gov.in/' },
      { title: 'TRACES', desc: 'TDS reconciliation, Form 16 / 16A', href: 'https://www.tdscpc.gov.in/' },
      { title: 'CBIC', desc: 'Indirect tax & customs board', href: 'https://www.cbic.gov.in/' },
      { title: 'E-Way Bill System', desc: 'Generate & manage e-way bills', href: 'https://ewaybillgst.gov.in/' },
    ],
  },
  {
    group: 'Corporate & Regulatory',
    links: [
      { title: 'MCA', desc: 'Company / LLP filings & master data', href: 'https://www.mca.gov.in/' },
      { title: 'RBI', desc: 'Reserve Bank of India', href: 'https://www.rbi.org.in/' },
      { title: 'SEBI', desc: 'Securities & Exchange Board of India', href: 'https://www.sebi.gov.in/' },
      { title: 'IBBI', desc: 'Insolvency & Bankruptcy Board', href: 'https://www.ibbi.gov.in/' },
      { title: 'ICAI', desc: 'Institute of Chartered Accountants of India', href: 'https://www.icai.org/' },
    ],
  },
  {
    group: 'Verification & Search',
    links: [
      { title: 'Verify PAN', desc: 'Know your PAN / link status', href: 'https://www.incometax.gov.in/iec/foportal/' },
      { title: 'Search GST Taxpayer', desc: 'Verify GSTIN / UIN', href: 'https://services.gst.gov.in/services/searchtp' },
      { title: 'MCA Company Master Data', desc: 'Check company / LLP details', href: 'https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do' },
      { title: 'Udyam (MSME) Registration', desc: 'Register / verify MSME', href: 'https://udyamregistration.gov.in/' },
    ],
  },
  {
    group: 'Other Useful',
    links: [
      { title: 'EPFO', desc: 'Provident fund services', href: 'https://www.epfindia.gov.in/' },
      { title: 'ESIC', desc: 'Employees’ State Insurance', href: 'https://www.esic.gov.in/' },
      { title: 'DGFT', desc: 'Import-export code (IEC) & trade', href: 'https://www.dgft.gov.in/' },
      { title: 'Startup India', desc: 'DPIIT recognition & benefits', href: 'https://www.startupindia.gov.in/' },
      { title: 'India Code', desc: 'Repository of all Central Acts', href: 'https://www.indiacode.nic.in/' },
    ],
  },
]

/* ---------------- Acts (categorised) ---------------- */
export const actGroups = [
  {
    group: 'Direct Tax',
    items: [
      { title: 'Income Tax Act, 1961', desc: 'The main law for taxing income of individuals, firms and companies.', href: 'https://www.indiacode.nic.in/handle/123456789/2435' },
      { title: 'Black Money (Undisclosed Foreign Income) Act, 2015', desc: 'Taxes and penalises undisclosed foreign income and assets.', href: 'https://www.indiacode.nic.in/' },
      { title: 'Benami Transactions (Prohibition) Act, 1988', desc: 'Bans holding property in someone else’s name to hide ownership.', href: 'https://www.indiacode.nic.in/' },
    ],
  },
  {
    group: 'Indirect Tax',
    items: [
      { title: 'Central Goods & Services Tax Act, 2017', desc: 'Levies GST on supplies of goods & services within a state.', href: 'https://www.cbic.gov.in/' },
      { title: 'Integrated GST Act, 2017', desc: 'Levies GST on inter-state supplies and imports/exports.', href: 'https://www.cbic.gov.in/' },
      { title: 'Union Territory GST Act, 2017', desc: 'GST levy for supplies within Union Territories.', href: 'https://www.cbic.gov.in/' },
      { title: 'GST (Compensation to States) Act, 2017', desc: 'Provides cess to compensate states for GST revenue loss.', href: 'https://www.cbic.gov.in/' },
      { title: 'Customs Act, 1962', desc: 'Governs duties and procedures on import and export of goods.', href: 'https://www.cbic.gov.in/' },
      { title: 'Central Excise Act, 1944', desc: 'Legacy duty on manufacture of goods (now mostly under GST).', href: 'https://www.cbic.gov.in/' },
    ],
  },
  {
    group: 'Corporate & Securities',
    items: [
      { title: 'Companies Act, 2013', desc: 'Governs incorporation, management and closure of companies.', href: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html' },
      { title: 'Limited Liability Partnership Act, 2008', desc: 'Governs the formation and running of LLPs.', href: 'https://www.mca.gov.in/' },
      { title: 'Indian Partnership Act, 1932', desc: 'Governs partnership firms and partners’ rights and duties.', href: 'https://www.indiacode.nic.in/' },
      { title: 'Insolvency & Bankruptcy Code, 2016', desc: 'Time-bound framework to resolve insolvency and bankruptcy.', href: 'https://www.ibbi.gov.in/' },
      { title: 'Securities & Exchange Board of India Act, 1992', desc: 'Regulates the securities market and protects investors.', href: 'https://www.sebi.gov.in/' },
      { title: 'Securities Contracts (Regulation) Act, 1956', desc: 'Regulates stock exchanges and trading in securities.', href: 'https://www.sebi.gov.in/' },
      { title: 'Competition Act, 2002', desc: 'Prevents anti-competitive practices and abuse of dominance.', href: 'https://www.cci.gov.in/' },
    ],
  },
  {
    group: 'Labour & Employment',
    items: [
      { title: 'Employees’ Provident Funds & Misc. Provisions Act, 1952', desc: 'Provident fund, pension and insurance benefits for employees.', href: 'https://www.epfindia.gov.in/' },
      { title: 'Employees’ State Insurance Act, 1948', desc: 'Medical and cash benefits for insured employees (ESI).', href: 'https://www.esic.gov.in/' },
      { title: 'Payment of Gratuity Act, 1972', desc: 'Gratuity payable to employees on exit after 5 years.', href: 'https://labour.gov.in/' },
      { title: 'Payment of Bonus Act, 1965', desc: 'Statutory annual bonus to eligible employees.', href: 'https://labour.gov.in/' },
      { title: 'Code on Wages, 2019', desc: 'Consolidates laws on wages, bonus and minimum wages.', href: 'https://labour.gov.in/' },
    ],
  },
  {
    group: 'Allied & Other Laws',
    items: [
      { title: 'Foreign Exchange Management Act, 1999', desc: 'Regulates foreign exchange and cross-border transactions.', href: 'https://www.rbi.org.in/' },
      { title: 'Prevention of Money Laundering Act, 2002', desc: 'Prevents and penalises laundering of illegal money.', href: 'https://www.indiacode.nic.in/' },
      { title: 'MSMED Act, 2006', desc: 'Promotes and protects micro, small & medium enterprises.', href: 'https://msme.gov.in/' },
      { title: 'The Indian Contract Act, 1872', desc: 'Governs agreements and when they become enforceable.', href: 'https://www.indiacode.nic.in/' },
      { title: 'The Negotiable Instruments Act, 1881', desc: 'Governs cheques, bills & notes — including cheque bounce.', href: 'https://www.indiacode.nic.in/' },
      { title: 'The Indian Stamp Act, 1899', desc: 'Levies stamp duty on instruments and documents.', href: 'https://www.indiacode.nic.in/' },
      { title: 'The Chartered Accountants Act, 1949', desc: 'Governs the CA profession and regulation by ICAI.', href: 'https://www.icai.org/' },
      { title: 'Finance Act (current year)', desc: 'Annual Budget law that amends tax rates and provisions.', href: 'https://www.indiabudget.gov.in/' },
      { title: 'Right to Information Act, 2005', desc: 'Right to access information from public authorities.', href: 'https://rti.gov.in/' },
    ],
  },
]

/* ---------------- Rules (categorised) ---------------- */
export const ruleGroups = [
  {
    group: 'Direct Tax',
    items: [
      { title: 'Income Tax Rules, 1962', desc: 'Procedures, forms and computation methods under the IT Act.', href: 'https://www.incometax.gov.in/' },
      { title: 'Income Computation & Disclosure Standards (ICDS)', desc: 'Standards for computing taxable business/professional income.', href: 'https://www.incometax.gov.in/' },
    ],
  },
  {
    group: 'Indirect Tax',
    items: [
      { title: 'CGST Rules, 2017', desc: 'Procedures for GST registration, returns, ITC and refunds.', href: 'https://www.cbic.gov.in/' },
      { title: 'IGST Rules, 2017', desc: 'Rules on inter-state supply and place of supply.', href: 'https://www.cbic.gov.in/' },
      { title: 'UTGST Rules, 2017', desc: 'GST procedures applicable to Union Territories.', href: 'https://www.cbic.gov.in/' },
      { title: 'Customs Rules & Regulations', desc: 'Procedures for valuation, duty and clearance of goods.', href: 'https://www.cbic.gov.in/' },
    ],
  },
  {
    group: 'Corporate',
    items: [
      { title: 'Companies (Accounts) Rules, 2014', desc: 'Rules for books of account and financial statements.', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Audit & Auditors) Rules, 2014', desc: 'Auditor appointment, rotation and reporting requirements.', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Incorporation) Rules, 2014', desc: 'Procedures and forms for incorporating a company.', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Share Capital & Debentures) Rules, 2014', desc: 'Rules on issue of shares, debentures and capital.', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Meetings of Board & its Powers) Rules, 2014', desc: 'Rules on board meetings, resolutions and powers.', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Appointment & Qualification of Directors) Rules, 2014', desc: 'Rules on appointing and qualifying directors.', href: 'https://www.mca.gov.in/' },
      { title: 'LLP Rules, 2009', desc: 'Procedures and forms for LLP compliance.', href: 'https://www.mca.gov.in/' },
    ],
  },
  {
    group: 'Labour & Employment',
    items: [
      { title: 'EPF Scheme, 1952', desc: 'Operational rules for provident fund contributions.', href: 'https://www.epfindia.gov.in/' },
      { title: 'ESI (General) Regulations, 1950', desc: 'Procedures for ESI contributions and benefits.', href: 'https://www.esic.gov.in/' },
      { title: 'Payment of Gratuity Rules, 1972', desc: 'Procedures for claiming and paying gratuity.', href: 'https://labour.gov.in/' },
    ],
  },
  {
    group: 'Other',
    items: [
      { title: 'FEMA Rules & Regulations', desc: 'Procedures for foreign exchange transactions.', href: 'https://www.rbi.org.in/' },
      { title: 'PMLA (Maintenance of Records) Rules, 2005', desc: 'Record-keeping and reporting to curb money laundering.', href: 'https://www.indiacode.nic.in/' },
      { title: 'MSMED Rules', desc: 'Procedures for MSME registration and benefits.', href: 'https://msme.gov.in/' },
    ],
  },
]

/* ---------------- Forms (categorised) ---------------- */
export const formGroups = [
  {
    group: 'Income Tax',
    items: [
      { title: 'ITR-1 to ITR-7', desc: 'Income tax return forms', href: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-returns' },
      { title: 'Form 3CA / 3CB / 3CD', desc: 'Tax audit report', href: 'https://www.incometax.gov.in/' },
      { title: 'Form 15CA / 15CB', desc: 'Foreign remittance', href: 'https://www.incometax.gov.in/' },
      { title: 'Form 15G / 15H', desc: 'Declaration for nil TDS', href: 'https://www.incometax.gov.in/' },
      { title: 'Form 16 / 16A', desc: 'TDS certificates', href: 'https://www.tdscpc.gov.in/' },
      { title: 'Form 26AS / AIS', desc: 'Tax credit & info statement', href: 'https://www.incometax.gov.in/' },
    ],
  },
  {
    group: 'GST',
    items: [
      { title: 'GSTR-1', desc: 'Outward supplies', href: 'https://www.gst.gov.in/' },
      { title: 'GSTR-3B', desc: 'Summary return', href: 'https://www.gst.gov.in/' },
      { title: 'GSTR-9 / 9C', desc: 'Annual return & reconciliation', href: 'https://www.gst.gov.in/' },
      { title: 'REG-01', desc: 'GST registration application', href: 'https://www.gst.gov.in/' },
    ],
  },
  {
    group: 'Company / ROC',
    items: [
      { title: 'AOC-4', desc: 'Filing of financial statements', href: 'https://www.mca.gov.in/' },
      { title: 'MGT-7 / 7A', desc: 'Annual return', href: 'https://www.mca.gov.in/' },
      { title: 'DIR-3 KYC', desc: 'Director KYC', href: 'https://www.mca.gov.in/' },
      { title: 'SPICe+ (INC-32)', desc: 'Company incorporation', href: 'https://www.mca.gov.in/' },
    ],
  },
  {
    group: 'LLP',
    items: [
      { title: 'Form 8', desc: 'Statement of account & solvency', href: 'https://www.mca.gov.in/' },
      { title: 'Form 11', desc: 'Annual return of LLP', href: 'https://www.mca.gov.in/' },
      { title: 'FiLLiP', desc: 'LLP incorporation', href: 'https://www.mca.gov.in/' },
    ],
  },
  {
    group: 'Payroll · PF & ESI',
    items: [
      { title: 'PF – ECR', desc: 'Electronic Challan cum Return', href: 'https://www.epfindia.gov.in/' },
      { title: 'EPF Form 11', desc: 'New employee declaration', href: 'https://www.epfindia.gov.in/' },
      { title: 'UAN / KYC', desc: 'Universal Account Number & KYC', href: 'https://unifiedportal-mem.epfindia.gov.in/' },
      { title: 'ESI Return of Contribution', desc: 'Half-yearly ESI return', href: 'https://www.esic.gov.in/' },
      { title: 'ESI Registration (Form 1)', desc: 'Employee insurance registration', href: 'https://www.esic.gov.in/' },
    ],
  },
  {
    group: 'Other Registrations',
    items: [
      { title: 'Udyam Registration', desc: 'MSME registration', href: 'https://udyamregistration.gov.in/' },
      { title: 'IEC', desc: 'Import-Export Code', href: 'https://www.dgft.gov.in/' },
      { title: 'PAN / TAN (Form 49A / 49B)', desc: 'PAN & TAN application', href: 'https://www.incometax.gov.in/' },
    ],
  },
]

/* ---------------- Compliance / Due Dates ---------------- */
// Indicative recurring statutory deadlines. Dates can change by notification —
// always confirm the applicable date for the relevant year.
export const dueDateGroups = [
  {
    group: 'Monthly',
    items: [
      { date: '7th', tag: 'Income Tax', title: 'TDS / TCS Payment', desc: 'Deposit of TDS/TCS deducted in the previous month.' },
      { date: '11th', tag: 'GST', title: 'GSTR-1', desc: 'Outward supplies return for monthly filers.' },
      { date: '13th', tag: 'GST', title: 'GSTR-1 (IFF) / GSTR-6', desc: 'QRMP invoice furnishing; input service distributor return.' },
      { date: '15th', tag: 'Payroll', title: 'PF & ESI Payment', desc: 'Provident fund and ESI contributions for the previous month.' },
      { date: '20th', tag: 'GST', title: 'GSTR-3B', desc: 'Summary return & tax payment for monthly filers.' },
      { date: '25th', tag: 'GST', title: 'PMT-06', desc: 'Monthly tax payment for QRMP taxpayers.' },
    ],
  },
  {
    group: 'Quarterly',
    items: [
      { date: '15 Jun / Sep / Dec / Mar', tag: 'Income Tax', title: 'Advance Tax', desc: 'Instalments — 15% / 45% / 75% / 100% of estimated liability.' },
      { date: '18th', tag: 'GST', title: 'CMP-08', desc: 'Statement-cum-challan for composition taxpayers.' },
      { date: '31 Jul / Oct / Jan / May', tag: 'TDS', title: 'TDS Return (24Q / 26Q)', desc: 'Quarterly TDS statements.' },
      { date: '13th', tag: 'GST', title: 'GSTR-1 (QRMP)', desc: 'Quarterly outward supplies for QRMP taxpayers.' },
    ],
  },
  {
    group: 'Annual',
    items: [
      { date: '31 May', tag: 'TDS', title: 'TDS Return Q4 / Form 16', desc: 'Q4 TDS statement; Form 16 to employees by 15 June.' },
      { date: '30 May', tag: 'Corporate', title: 'LLP Form 11', desc: 'Annual return of LLP.' },
      { date: '31 Jul', tag: 'Income Tax', title: 'ITR (Non-Audit)', desc: 'Income tax return for individuals & non-audit cases.' },
      { date: '30 Sep', tag: 'Audit', title: 'Tax Audit Report', desc: 'Filing of tax audit report (3CA/3CB-3CD).' },
      { date: '30 Oct', tag: 'Corporate', title: 'LLP Form 8', desc: 'Statement of account & solvency for LLPs.' },
      { date: '31 Oct', tag: 'Income Tax', title: 'ITR (Audit) / TP', desc: 'Return for audit cases, companies & transfer-pricing.' },
      { date: '29 Nov', tag: 'Corporate', title: 'ROC AOC-4 / MGT-7', desc: 'Company financial statements & annual return (post-AGM).' },
      { date: '31 Dec', tag: 'GST', title: 'GSTR-9 / 9C', desc: 'Annual return & reconciliation statement.' },
      { date: '31 Dec', tag: 'Income Tax', title: 'Belated / Revised ITR', desc: 'Last date for belated or revised income tax return.' },
    ],
  },
]

/* ---------------- Calculators directory ---------------- */
// Calculators marked `live: true` are interactive on the site (see
// components/Calculators.jsx). Others are listed as available on request.
export const calculatorList = [
  { id: 'gst', title: 'GST Calculator', desc: 'Add or remove GST at any slab', live: true },
  { id: 'emi', title: 'EMI Calculator', desc: 'Loan EMI, interest & total payable', live: true },
  { id: 'tax', title: 'Income Tax Calculator', desc: 'New-regime tax estimate', live: true },
  { id: 'hra', title: 'HRA Exemption', desc: 'House rent allowance exemption', live: true },
  { id: 'gratuity', title: 'Gratuity Calculator', desc: 'Gratuity payable on exit', live: true },
  { id: 'fd', title: 'FD Calculator', desc: 'Fixed-deposit maturity & interest', live: true },
  { id: 'sip', title: 'SIP Calculator', desc: 'Mutual-fund SIP future value', live: true },
  { id: 'capital-gains', title: 'Capital Gains Calculator', desc: 'Short / long-term capital gains tax', live: true },
  { id: 'salary-hike', title: 'Salary Hike Calculator', desc: 'Revised salary after a hike', live: true },
  { id: 'late-fee', title: 'Late Fee Calculator', desc: 'GST return late fee', live: true },
  { id: 'msme-interest', title: 'MSME Interest Calculator', desc: 'Delayed-payment interest (MSMED Act)', live: true },
  { id: 'gst-interest', title: 'GST Interest Calculator', desc: 'Interest on late GST payment', live: true },
  { id: 'tax-interest', title: 'Tax Interest Calculator', desc: 'Income-tax interest (234A/B/C)', live: true },
  { id: 'advance-tax', title: 'Advance Tax', desc: 'Quarterly advance-tax instalments', live: true },
  { id: 'tds', title: 'TDS Calculator', desc: 'Section-wise TDS on payments', live: true },
]
