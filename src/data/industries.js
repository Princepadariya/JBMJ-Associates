import {
  FiShoppingBag,
  FiTruck,
  FiCpu,
  FiHome,
  FiHeart,
  FiCoffee,
  FiTool,
  FiBriefcase,
} from 'react-icons/fi'

export const industries = [
  {
    id: 'retail-trading',
    icon: FiShoppingBag,
    label: 'Retail & Trading',
    desc: 'High-volume transactions, GST on every sale and tight margins — we keep retailers and traders compliant and cash-flow aware.',
    services: ['GST registration & returns', 'Inventory & margin accounting', 'TDS & income tax', 'Working-capital finance'],
  },
  {
    id: 'manufacturing-msme',
    icon: FiTruck,
    label: 'Manufacturing & MSME',
    desc: 'From cost records to bank funding, we support manufacturers and MSMEs across compliance, audit and growth.',
    services: ['Statutory & tax audit', 'CMA data & project reports', 'GST & e-invoicing', 'Udyam (MSME) registration'],
  },
  {
    id: 'it-startups',
    icon: FiCpu,
    label: 'IT & Startups',
    desc: 'Founder-friendly advisory — from incorporation and DPIIT recognition to investor-ready books and funding support.',
    services: ['Company / LLP incorporation', 'Startup DPIIT registration', 'Funding & due diligence', 'Virtual CFO support'],
  },
  {
    id: 'real-estate-infra',
    icon: FiHome,
    label: 'Real Estate & Infra',
    desc: 'Project-based accounting, GST nuances and capital-gains planning for developers, contractors and investors.',
    services: ['Project accounting', 'GST on construction', 'Capital gains planning', 'TDS on property'],
  },
  {
    id: 'healthcare-pharma',
    icon: FiHeart,
    label: 'Healthcare & Pharma',
    desc: 'Doctors, clinics and pharma businesses get hands-off tax and accounting handled by professionals.',
    services: ['Income tax & TDS', 'Clinic / hospital accounting', 'GST compliance', 'Practice structuring'],
  },
  {
    id: 'hospitality-fnb',
    icon: FiCoffee,
    label: 'Hospitality & F&B',
    desc: 'Restaurants, hotels and cafés have unique GST rates and payroll needs — we keep the back office in order.',
    services: ['GST & billing setup', 'Payroll, PF & ESI', 'Book-keeping & MIS', 'Outlet-wise reporting'],
  },
  {
    id: 'engineering-auto',
    icon: FiTool,
    label: 'Engineering & Auto',
    desc: 'Workshops, dealers and engineering firms get audit, tax and finance support tuned to their operations.',
    services: ['Statutory & internal audit', 'GST & TDS compliance', 'Bank loan documentation', 'Inventory controls'],
  },
  {
    id: 'professionals-services',
    icon: FiBriefcase,
    label: 'Professionals & Services',
    desc: 'Consultants, agencies and service firms get clean compliance and proactive tax planning.',
    services: ['Income tax & GST', 'Book-keeping & invoicing', 'Tax planning', 'Certificates & attestation'],
  },
]
