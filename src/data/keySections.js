/*
  Key statutory sections explained in plain English.
  These are simplified summaries for general understanding — NOT a substitute
  for the bare Act. Always read the actual section and seek advice for your
  specific case. Review annually for amendments.
*/
export const keySectionGroups = [
  {
    group: 'Income Tax Act, 1961',
    items: [
      {
        section: 'Sec 44AD',
        title: 'Presumptive taxation for small business',
        plain: 'Lets eligible small businesses (turnover within the prescribed limit) declare profit at a flat 8% of turnover — or 6% for receipts through banking/digital channels — instead of maintaining detailed books.',
      },
      {
        section: 'Sec 44ADA',
        title: 'Presumptive taxation for professionals',
        plain: 'Eligible professionals (doctors, lawyers, CAs, architects, etc.) within the turnover limit can declare 50% of gross receipts as profit, simplifying compliance.',
      },
      {
        section: 'Sec 80C',
        title: 'Deductions for savings & investments',
        plain: 'Lets individuals/HUFs reduce taxable income by up to ₹1,50,000 for specified investments and payments — LIC, PPF, ELSS, principal on home loan, children’s tuition, etc. (old regime).',
      },
      {
        section: 'Sec 80D',
        title: 'Health insurance premium deduction',
        plain: 'Deduction for medical insurance premiums paid for self, family and parents — with a higher limit when senior citizens are covered (old regime).',
      },
      {
        section: 'Sec 194C',
        title: 'TDS on payments to contractors',
        plain: 'Tax must be deducted when paying a contractor — generally 1% if the payee is an individual/HUF and 2% otherwise — once the payment crosses the threshold.',
      },
      {
        section: 'Sec 194J',
        title: 'TDS on professional & technical fees',
        plain: 'Tax is deducted on fees for professional or technical services — generally 10% (2% for certain technical services / call-centres) above the threshold.',
      },
      {
        section: 'Sec 234A/B/C',
        title: 'Interest for late filing / short tax',
        plain: 'Charges interest at 1% per month for filing late (234A), not paying enough advance tax (234B), or deferring advance-tax instalments (234C).',
      },
      {
        section: 'Sec 87A',
        title: 'Rebate for small taxpayers',
        plain: 'Resident individuals with taxable income up to the prescribed limit get a rebate that effectively reduces their tax to nil — limits differ between the old and new regimes.',
      },
    ],
  },
  {
    group: 'CGST Act, 2017',
    items: [
      {
        section: 'Sec 16',
        title: 'Conditions for Input Tax Credit (ITC)',
        plain: 'You can claim credit for GST paid on purchases only if you have a valid tax invoice, have received the goods/services, the supplier has paid the tax, and you file your returns — and the credit appears in your GSTR-2B.',
      },
      {
        section: 'Sec 17(5)',
        title: 'Blocked credits',
        plain: 'Lists purchases on which ITC cannot be claimed — e.g. motor vehicles (with exceptions), food & beverages, club memberships, and goods used for personal purposes.',
      },
      {
        section: 'Sec 22',
        title: 'Who must register for GST',
        plain: 'A business must register once its aggregate turnover crosses the threshold (which differs for goods vs services and by state category), plus certain compulsory cases under Sec 24.',
      },
      {
        section: 'Sec 31',
        title: 'Tax invoice',
        plain: 'Requires a registered person to issue a proper tax invoice with prescribed particulars within set timelines for supplies of goods or services.',
      },
      {
        section: 'Sec 50',
        title: 'Interest on delayed payment',
        plain: 'Interest (generally 18% per annum) applies on GST paid late; a higher rate can apply to wrongly availed and utilised input tax credit.',
      },
    ],
  },
  {
    group: 'Companies Act, 2013',
    items: [
      {
        section: 'Sec 138',
        title: 'Internal audit',
        plain: 'Requires prescribed classes of companies (based on turnover, borrowings or deposits) to appoint an internal auditor to review controls and processes.',
      },
      {
        section: 'Sec 139',
        title: 'Appointment of auditors',
        plain: 'Governs how a company appoints its statutory auditor — typically for a five-year term at the AGM — along with rotation requirements for certain companies.',
      },
      {
        section: 'Sec 134',
        title: 'Financial statement & Board’s report',
        plain: 'Requires the board to approve and sign the financial statements and attach a Board’s Report covering prescribed disclosures before circulation to members.',
      },
      {
        section: 'Sec 185 / 186',
        title: 'Loans to directors & investments',
        plain: 'Restricts loans, guarantees and securities given to directors/related parties (185) and caps inter-corporate loans and investments unless conditions are met (186).',
      },
      {
        section: 'Sec 96',
        title: 'Annual General Meeting (AGM)',
        plain: 'Requires companies (other than One Person Companies) to hold an AGM each year within the prescribed time to adopt accounts, appoint auditors and transact key business.',
      },
      {
        section: 'Sec 92',
        title: 'Annual return (MGT-7)',
        plain: 'Requires every company to file an annual return capturing its shareholding, directors and key particulars within the prescribed time after the AGM.',
      },
    ],
  },
]
