import {
  FiCheckSquare,
  FiTrendingUp,
  FiFileText,
  FiBriefcase,
  FiShield,
  FiPieChart,
  FiDollarSign,
  FiLayers,
} from 'react-icons/fi'

export const services = [
  {
    id: 'audit-assurance',
    icon: FiCheckSquare,
    title: 'Audit & Assurance',
    summary:
      'Independent, risk-focused audits that give stakeholders genuine confidence in your numbers.',
    points: [
      'Statutory & Tax Audit',
      'Internal & Management Audit',
      'Bank & Stock Audit',
      'Due Diligence Reviews',
    ],
  },
  {
    id: 'direct-tax',
    icon: FiFileText,
    title: 'Direct Taxation',
    summary:
      'Proactive income-tax planning, compliance and litigation support for individuals and businesses.',
    points: [
      'Income Tax Return Filing',
      'Tax Planning & Advisory',
      'Tax Litigation & Assessments',
      'TDS Compliance',
    ],
  },
  {
    id: 'gst-indirect-tax',
    icon: FiLayers,
    title: 'GST & Indirect Tax',
    summary:
      'End-to-end GST management — from registration to returns, reconciliations and audits.',
    points: [
      'GST Registration & Returns',
      'GST Audit & Reconciliation',
      'Input Credit Optimisation',
      'Notices & Departmental Liaison',
    ],
  },
  {
    id: 'cma-banking',
    icon: FiPieChart,
    title: 'CMA & Banking Reports',
    summary:
      'Bankable project reports and CMA data that strengthen your funding and credit proposals.',
    points: [
      'CMA Data Preparation',
      'Project Reports',
      'Working Capital Assessment',
      'Credit & Risk Analysis',
    ],
  },
  {
    id: 'accounting',
    icon: FiDollarSign,
    title: 'Accounting & Book-keeping',
    summary:
      'Accurate, compliant accounting that turns day-to-day records into decision-ready insight.',
    points: [
      'Book-keeping & MIS',
      'Financial Statements',
      'Payroll Processing',
      'Virtual CFO Support',
    ],
  },
  {
    id: 'corporate-law',
    icon: FiShield,
    title: 'Corporate & Secretarial',
    summary:
      'Company Secretary-led corporate law, ROC compliance and capital-market advisory.',
    points: [
      'Company & LLP Incorporation',
      'ROC & Annual Compliance',
      'SME / Main Board IPO Advisory',
      'Corporate Governance',
    ],
  },
  {
    id: 'startup-funding',
    icon: FiTrendingUp,
    title: 'Startup & Funding',
    summary:
      'From incorporation to investor-readiness — advisory built for founders who want to scale.',
    points: [
      'Startup Registration & DPIIT',
      'Funding & Pitch Support',
      'Business Structuring',
      'Compliance Roadmaps',
    ],
  },
  {
    id: 'business-advisory',
    icon: FiBriefcase,
    title: 'Business Advisory',
    summary:
      'Strategic, numbers-backed guidance to help your business grow profitably and sustainably.',
    points: [
      'Business & Tax Structuring',
      'Risk Advisory',
      'Financial Modelling',
      'Growth Strategy',
    ],
  },
]
