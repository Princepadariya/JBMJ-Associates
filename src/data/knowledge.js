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
      { title: 'Income Tax Act, 1961', href: 'https://www.indiacode.nic.in/handle/123456789/2435' },
      { title: 'Black Money (Undisclosed Foreign Income) Act, 2015', href: 'https://www.indiacode.nic.in/' },
      { title: 'Benami Transactions (Prohibition) Act, 1988', href: 'https://www.indiacode.nic.in/' },
    ],
  },
  {
    group: 'Indirect Tax',
    items: [
      { title: 'Central Goods & Services Tax Act, 2017', href: 'https://www.cbic.gov.in/' },
      { title: 'Integrated GST Act, 2017', href: 'https://www.cbic.gov.in/' },
      { title: 'GST (Compensation to States) Act, 2017', href: 'https://www.cbic.gov.in/' },
      { title: 'Customs Act, 1962', href: 'https://www.cbic.gov.in/' },
    ],
  },
  {
    group: 'Corporate',
    items: [
      { title: 'Companies Act, 2013', href: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html' },
      { title: 'Limited Liability Partnership Act, 2008', href: 'https://www.mca.gov.in/' },
      { title: 'Indian Partnership Act, 1932', href: 'https://www.indiacode.nic.in/' },
      { title: 'Insolvency & Bankruptcy Code, 2016', href: 'https://www.ibbi.gov.in/' },
    ],
  },
  {
    group: 'Other Laws',
    items: [
      { title: 'Foreign Exchange Management Act, 1999', href: 'https://www.rbi.org.in/' },
      { title: 'The Indian Stamp Act, 1899', href: 'https://www.indiacode.nic.in/' },
      { title: 'Finance Act (current year)', href: 'https://www.indiabudget.gov.in/' },
      { title: 'Right to Information Act, 2005', href: 'https://rti.gov.in/' },
    ],
  },
]

/* ---------------- Rules (categorised) ---------------- */
export const ruleGroups = [
  {
    group: 'Direct Tax',
    items: [
      { title: 'Income Tax Rules, 1962', href: 'https://www.incometax.gov.in/' },
      { title: 'Income Computation & Disclosure Standards (ICDS)', href: 'https://www.incometax.gov.in/' },
    ],
  },
  {
    group: 'Indirect Tax',
    items: [
      { title: 'CGST Rules, 2017', href: 'https://www.cbic.gov.in/' },
      { title: 'IGST Rules, 2017', href: 'https://www.cbic.gov.in/' },
      { title: 'Customs Rules & Regulations', href: 'https://www.cbic.gov.in/' },
    ],
  },
  {
    group: 'Corporate',
    items: [
      { title: 'Companies (Accounts) Rules, 2014', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Audit & Auditors) Rules, 2014', href: 'https://www.mca.gov.in/' },
      { title: 'Companies (Incorporation) Rules, 2014', href: 'https://www.mca.gov.in/' },
      { title: 'LLP Rules, 2009', href: 'https://www.mca.gov.in/' },
    ],
  },
  {
    group: 'Other',
    items: [
      { title: 'FEMA Rules & Regulations', href: 'https://www.rbi.org.in/' },
      { title: 'EPF Scheme Rules', href: 'https://www.epfindia.gov.in/' },
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
  { id: 'advance-tax', title: 'Advance Tax', desc: 'Quarterly advance-tax instalments', live: false },
  { id: 'capital-gains', title: 'Capital Gains', desc: 'Short / long-term capital gains', live: false },
  { id: 'tds', title: 'TDS Calculator', desc: 'Section-wise TDS on payments', live: false },
]
