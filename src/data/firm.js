/*
  Central place for firm contact details.
*/
export const firm = {
  name: 'JBMJ & Associates LLP',
  tagline: 'Chartered Accountants',
  city: 'Rajkot, Gujarat',
  phone: '+91 90167 48980',
  phoneHref: 'tel:+919016748980',
  whatsapp: '919016748980', // digits only, with country code
  email: 'jbmj.llp@outlook.com',
  emailHref: 'mailto:jbmj.llp@outlook.com',
  // Primary office line (kept for any single-address usage)
  address: 'A-1016, RK Iconic, Near Sheetal Park, 150ft Ring Road, Rajkot – 360 006',
  // All office locations
  offices: [
    {
      city: 'Rajkot',
      lines: 'A-1016, RK Iconic, Near Sheetal Park, 150ft Ring Road, Rajkot',
      state: 'Gujarat',
      pincode: '360 006',
    },
    {
      city: 'Surat',
      lines: '3059, Silver Business Point, Nr. VIP Circle, Utran, Surat',
      state: 'Gujarat',
      pincode: '394 101',
    },
    {
      city: 'Mumbai',
      lines: 'A-302, Navroz Building 5, Shanti Nagar, SV Road, Dahisar (E), Mumbai',
      state: 'Maharashtra',
      pincode: '400 068',
    },
  ],
  hours: 'Mon – Sat · 10:00 AM – 7:00 PM',
  social: {
    linkedin: '#',
    instagram: '#',
    facebook: '#',
  },
}
