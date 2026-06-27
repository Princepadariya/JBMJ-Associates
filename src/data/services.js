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
