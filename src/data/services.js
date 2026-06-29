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
        keyDeliverables: [
          'Independent Audit Report & Opinion',
          'CARO (Companies Auditor\'s Report Order) Reporting',
          'Testing of Internal Financial Controls (IFC)',
          'Management Letter highlighting control weaknesses'
        ]
      },
      {
        title: 'Tax Audit',
        desc: 'Conducted as required under the Income Tax Act, 1961.',
        keyDeliverables: [
          'Form 3CA/3CB and 3CD Preparation',
          'Reconciliation with GST returns',
          'Verification of TDS compliance',
          'Identification of inadmissible deductions'
        ]
      },
      {
        title: 'Internal Audit',
        desc: 'Designed for effective financial and internal controls and reporting mechanisms.',
        keyDeliverables: [
          'Detailed Risk Assessment',
          'Standard Operating Procedure (SOP) reviews',
          'Revenue & expenditure leak analysis',
          'Actionable management reporting'
        ]
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
        keyDeliverables: [
          'Computation of Total Income & Tax',
          'Strategic tax planning and deduction claiming',
          'Review of AIS/TIS and Form 26AS',
          'Filing and verification of relevant ITR forms'
        ]
      },
      {
        title: 'TDS Return Filing',
        desc: 'Filing of TDS returns for all applicable entities.',
        keyDeliverables: [
          'Quarterly filing of Form 24Q, 26Q, 27Q',
          'Generation of Form 16/16A certificates',
          'Correction of past TDS defaults',
          'Guidance on lower deduction certificates'
        ]
      },
      {
        title: 'Tax Litigation',
        desc: 'Handling tax disputes, preparation and filing of appeals, and representing clients before the Tax Authorities.',
        keyDeliverables: [
          'Drafting replies to scrutiny notices',
          'Preparation of appeal memorandums (CIT-A, ITAT)',
          'Representation before assessing officers',
          'Advising on settlement options'
        ]
      },
      {
        title: 'GST Compliance',
        desc: 'Registration, filing, and consultancy of Goods and Services Tax compliance services.',
        keyDeliverables: [
          'Monthly/Quarterly GSTR-1 & GSTR-3B filing',
          'Annual Return (GSTR-9) and Reconciliation (GSTR-9C)',
          'Input Tax Credit (ITC) reconciliation (GSTR-2B)',
          'Handling GST notices and refund applications'
        ]
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
        keyDeliverables: [
          'Profit & Loss Statement and Balance Sheet',
          'Cash Flow Statements',
          'Fixed Asset Register maintenance',
          'Monthly MIS reporting for founders'
        ]
      },
      {
        title: 'Reconciliation',
        desc: 'Bank statements, Supplier Accounts, and Debtor Account reconciliation.',
        keyDeliverables: [
          'Bank Reconciliation Statements (BRS)',
          'Vendor ledger scrubbing and confirmation',
          'Debtor ageing analysis',
          'Inter-company reconciliation'
        ]
      },
      {
        title: 'Accounts Receivable & Payable',
        desc: 'Efficient management of inflow and outflow of funds.',
        keyDeliverables: [
          'Invoicing and collections tracking',
          'Vendor payment scheduling',
          'Working capital optimization advice',
          'Integration with accounting software'
        ]
      },
      {
        title: 'Company Incorporation & ROC Compliance',
        desc: 'As required under the Companies Act, 2013.',
        keyDeliverables: [
          'Company/LLP Name approval and SPICe+ filing',
          'Drafting MoA and AoA',
          'Annual ROC filings (AOC-4, MGT-7)',
          'Director KYC (DIR-3) and charge creation'
        ]
      },
      {
        title: 'Project Finance & Bank Loan Documentation',
        desc: 'Preparation of Projected Financial Statements, CMA Data, and other documentation required for securing bank loans and financial assistance.',
        keyDeliverables: [
          'Credit Monitoring Arrangement (CMA) Data',
          '3 to 5-year Financial Projections',
          'Detailed Project Reports (DPR)',
          'Liaising with banking institutions'
        ]
      },
      {
        title: 'Certificate & Attestation Services',
        desc: 'Issuance of various professional certificates and attestations required for regulatory, banking, legal, and business purposes.',
        keyDeliverables: [
          'Net Worth Certificates',
          'Turnover Certificates for tenders',
          'Foreign remittance (Form 15CB) certificates',
          'Utilization Certificates for subsidies'
        ]
      },
    ],
  },
]

/* Flat highlight list (used for the footer quick-links). */
export const serviceHighlights = serviceCategories.flatMap((c) =>
  c.items.map((i) => i.title)
)

