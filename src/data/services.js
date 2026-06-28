import {
  FiCheckSquare,
  FiFileText,
  FiLayers,
} from 'react-icons/fi'

/*
  Services are grouped into the firm's three core categories.
  Each category lists its individual service lines with a short description.
*/
export const serviceCategories = [
  {
    id: 'audit-assurance',
    icon: FiCheckSquare,
    category: 'Audit & Assurance',
    summary:
      'Independent, risk-focused audits that give stakeholders genuine confidence in your numbers.',
    intro:
      'Our audit and assurance practice goes beyond ticking boxes. We assess risk, test controls and verify your financial information so that owners, banks, investors and regulators can rely on it with confidence. Each engagement is led personally by a partner, with clear communication and no last-minute surprises.',
    who: [
      'Companies requiring a statutory audit under the Companies Act, 2013',
      'Businesses and professionals crossing the tax-audit threshold',
      'Organisations seeking stronger internal controls and reporting',
      'Banks and lenders requiring independent assurance',
    ],
    items: [
      {
        title: 'Statutory Audit',
        desc: 'Conducted as required under the Companies Act, 2013.',
      },
      {
        title: 'Tax Audit',
        desc: 'Conducted as required under the Income Tax Act, 1961.',
      },
      {
        title: 'Internal Audit',
        desc: 'Designed for effective financial and internal controls and reporting mechanisms.',
      },
    ],
  },
  {
    id: 'taxation-matters',
    icon: FiFileText,
    category: 'Taxation Matters',
    summary:
      'End-to-end direct and indirect tax compliance, planning and litigation support.',
    intro:
      'Tax should be managed proactively, not scrambled at the deadline. We handle the full lifecycle — accurate return filing, year-round planning to legitimately reduce your liability, and confident representation if a dispute or notice arises. From individuals to companies, we keep you compliant and ahead.',
    who: [
      'Individuals, firms and companies filing income tax returns',
      'Businesses deducting TDS or registered under GST',
      'Taxpayers facing notices, assessments or appeals',
      'Anyone seeking lawful, structured tax planning',
    ],
    items: [
      {
        title: 'Income Tax Return Filing',
        desc: 'Filing of returns for Individuals, Firms, and Companies.',
      },
      {
        title: 'TDS Return Filing',
        desc: 'Filing of TDS returns for all applicable entities.',
      },
      {
        title: 'Tax Litigation',
        desc: 'Handling tax disputes, preparation and filing of appeals, and representing clients before the Tax Authorities.',
      },
      {
        title: 'GST Compliance',
        desc: 'Registration, filing, and consultancy of Goods and Services Tax compliance services.',
      },
    ],
  },
  {
    id: 'accounting-other',
    icon: FiLayers,
    category: 'Accounting & Other Services',
    summary:
      'Reliable accounting, compliance and finance support that keeps your business running and growing.',
    intro:
      'Clean books are the foundation of every good decision. We maintain accurate accounting, reconcile your accounts, manage receivables and payables, handle company incorporation and ROC compliance, and prepare the documentation you need to raise finance — so you can focus on running the business while we keep the numbers right.',
    who: [
      'Startups and businesses needing reliable book-keeping & MIS',
      'Founders incorporating a company or LLP',
      'Businesses seeking bank loans or project finance (CMA data)',
      'Anyone needing professional certificates & attestations',
    ],
    items: [
      {
        title: 'Financial Statements',
        desc: 'Accurate and timely preparation of books of accounts and financial statements.',
      },
      {
        title: 'Reconciliation',
        desc: 'Bank statements, Supplier Accounts, and Debtor Account reconciliation.',
      },
      {
        title: 'Accounts Receivable & Payable',
        desc: 'Efficient management of inflow and outflow of funds.',
      },
      {
        title: 'Company Incorporation & ROC Compliance',
        desc: 'As required under the Companies Act, 2013.',
      },
      {
        title: 'Project Finance & Bank Loan Documentation',
        desc: 'Preparation of Projected Financial Statements, CMA Data, and other documentation required for securing bank loans and financial assistance.',
      },
      {
        title: 'Certificate & Attestation Services',
        desc: 'Issuance of various professional certificates and attestations required for regulatory, banking, legal, and business purposes.',
      },
    ],
  },
]

/* Flat highlight list (used for the footer quick-links). */
export const serviceHighlights = serviceCategories.flatMap((c) =>
  c.items.map((i) => i.title)
)
