// Personal information constants - EXAMPLE FILE
// Copy this to personal.ts and fill with your actual information
// This file is for reference only

export const PERSONAL_INFO = {
  // Basic Info
  fullName: 'Your Full Name',
  email: 'your.email@example.com',
  phone: '+62 XXX XXX XXX XX',
  location: 'Your City, Country',
  
  // Professional Info
  title: 'Your Job Title',
  description: 'Your professional description',
  shortBio: 'Your short bio for footer and about sections',
  
  // Social Links
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/yourprofile/',
    github: 'https://github.com/yourusername',
    email: 'mailto:your.email@example.com'
  },
  
  // SEO Meta
  meta: {
    keywords: 'Your, Keywords, Here',
    author: 'Your Name',
    ogTitle: 'Your Name - Your Title',
    ogDescription: 'Your description for social media',
    twitterTitle: 'Your Name - Your Title',
    twitterDescription: 'Your description for Twitter'
  }
}

// Work Experience Dates (for automatic calculation)
// Format: YYYY-MM-DD
export const EXPERIENCE_DATES = {
  brik: {
    startDate: '2024-04-15', // Your actual start date
    current: true // Set to false if no longer working here
  },
  mrt: {
    startDate: '2022-03-01', // Your actual start date
    endDate: '2024-04-14' // Your actual end date
  },
  datindo: {
    startDate: '2021-09-01', // Your actual start date
    endDate: '2022-02-28' // Your actual end date
  }
}

// Education Info (if needed for privacy)
export const EDUCATION_INFO = {
  university: 'Your University Name',
  degree: 'Your Degree',
  major: 'Your Major',
  graduationYear: 2021 // Your graduation year
}
