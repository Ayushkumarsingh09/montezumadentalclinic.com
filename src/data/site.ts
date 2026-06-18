export const site = {
  name: 'Montezuma Dental Clinic',
  tagline: 'Small Town Care. Exceptional Dentistry.',
  phone: '641-623-5100',
  phoneLink: 'tel:+16416235100',
  email: 'info@montedentalclinic.com',
  address: {
    street: '301 S. 4th Street',
    city: 'Montezuma',
    state: 'Iowa',
    zip: '50171',
    full: '301 S. 4th Street, Montezuma, Iowa 50171',
  },
  hours: [
    { day: 'Monday', time: '7:30 AM – 4:00 PM' },
    { day: 'Tuesday', time: '7:30 AM – 4:00 PM' },
    { day: 'Wednesday', time: '7:30 AM – 4:00 PM' },
    { day: 'Thursday', time: '7:30 AM – 4:00 PM' },
  ],
  mapEmbed:
    'https://maps.google.com/maps?q=301+S+4th+Street+Montezuma+Iowa+50171&output=embed',
};

export const navLinks = [
  { label: 'About', href: '#difference' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'New Patients', href: '#new-patient' },
  { label: 'Contact', href: '#contact' },
];

export const heroServices = [
  { label: 'Family Dentistry', icon: 'family' },
  { label: 'Cosmetic Dentistry', icon: 'sparkle' },
  { label: 'Emergency Care', icon: 'emergency' },
  { label: 'Preventive Care', icon: 'shield' },
];

export const trustCards = [
  {
    title: 'Personalized Care',
    description: 'Every smile gets a plan built around you—not a one-size-fits-all approach.',
    icon: 'heart',
  },
  {
    title: 'Friendly Team',
    description: 'Warm greetings, genuine conversations, and people who remember your name.',
    icon: 'users',
  },
  {
    title: 'Modern Dentistry',
    description: 'Digital scans, advanced techniques, and comfortable, efficient visits.',
    icon: 'tech',
  },
  {
    title: 'Community Trusted',
    description: 'Serving Montezuma families for generations as your hometown dental home.',
    icon: 'home',
  },
  {
    title: 'Comfortable Visits',
    description: 'A welcoming environment designed to put you at ease from the moment you walk in.',
    icon: 'comfort',
  },
  {
    title: 'Emergency Availability',
    description: 'When dental pain strikes, your trusted local team is here to help fast.',
    icon: 'clock',
  },
];

export const team = [
  {
    name: 'Heather Eilander',
    role: 'Owner · Registered Dental Hygienist',
    image: '/images/team/heather-eilander.jpg',
    bio: 'Heather leads Montezuma Dental with a passion for personalized patient care and building lasting relationships with every family who walks through our doors.',
  },
  {
    name: 'Dr. Erik Christensen',
    role: 'Dentist',
    image: '/images/team/erik-christensen.jpg',
    bio: 'Dr. Christensen brings skilled, compassionate dentistry to Montezuma—combining modern techniques with the gentle touch patients deserve.',
  },
  {
    name: 'Jennifer Berst Filloon',
    role: 'Dentist',
    image: '/images/team/jennifer-filloon.jpg',
    bio: 'Dr. Filloon is dedicated to helping patients feel confident in their smiles through thoughtful, individualized treatment plans.',
  },
  {
    name: 'Kylee Taylor',
    role: 'Registered Dental Hygienist',
    image: '/images/team/kylee-taylor.jpg',
    bio: 'Kylee helps patients maintain healthy smiles with thorough cleanings and friendly guidance on everyday oral care.',
  },
  {
    name: 'Misti Dawley',
    role: 'Registered Dental Hygienist',
    image: '/images/team/misti-dawley.jpg',
    bio: 'Misti creates a calm, comfortable experience during every hygiene visit—making routine care something to look forward to.',
  },
  {
    name: 'Jessica Little',
    role: 'Certified Dental Assistant',
    image: '/images/team/jessica-little.jpg',
    bio: 'Jessica supports patients with a caring presence chairside, ensuring every visit runs smoothly and comfortably.',
  },
  {
    name: 'Lyndie Mann',
    role: 'Certified Dental Assistant',
    image: '/images/team/lyndie-mann.jpg',
    bio: 'Lyndie brings warmth and efficiency to the operatory, helping patients feel at home throughout their treatment.',
  },
];

export const lifeStages = [
  {
    stage: 'Children',
    title: 'Gentle First Visits',
    description: 'Positive early experiences that build a lifetime of healthy habits.',
    image: '/images/office/hero-1.jpg',
  },
  {
    stage: 'Teens',
    title: 'Confident Smiles',
    description: 'Preventive care and cosmetic options for growing smiles.',
    image: '/images/office/hero-2.jpg',
  },
  {
    stage: 'Adults',
    title: 'Complete Care',
    description: 'From routine cleanings to restorations—everything under one roof.',
    image: '/images/office/gallery-1.jpg',
  },
  {
    stage: 'Seniors',
    title: 'Lasting Wellness',
    description: 'Gentle, comprehensive care tailored to changing dental needs.',
    image: '/images/office/gallery-2.jpg',
  },
];

export const services = [
  {
    outcome: 'Healthy Smiles',
    title: 'Preventive Care',
    description: 'Routine exams and professional cleanings to keep your smile strong year after year.',
  },
  {
    outcome: 'Confident Smiles',
    title: 'Whitening & Cosmetics',
    description: 'Professional whitening, veneers, and cosmetic solutions that help you love your smile.',
  },
  {
    outcome: 'Restored Function',
    title: 'Fillings & Restorations',
    description: 'Quality fillings, dentures, and restorative treatments to bring back comfort and function.',
  },
  {
    outcome: 'Emergency Relief',
    title: 'Urgent Care',
    description: 'Immediate care when you need it most—because dental emergencies can\'t wait.',
  },
  {
    outcome: 'Long-Term Wellness',
    title: 'Routine Care',
    description: 'Dental hygiene, gum care, and ongoing maintenance for lasting oral health.',
  },
];

export const testimonials = [
  {
    quote:
      'I had a great experience at Montezuma Dental. The staff was friendly and the service was excellent.',
    author: 'Montezuma Patient',
    highlight: 'Friendly & Excellent',
  },
  {
    quote:
      'I highly recommend Montezuma Dental Clinic for their professional and caring approach to dentistry.',
    author: 'Montezuma Patient',
    highlight: 'Professional & Caring',
  },
  {
    quote:
      'I\'m so pleased with the results of my treatment at Montezuma Dental. The team truly exceeded my expectations.',
    author: 'Montezuma Patient',
    highlight: 'Exceeded Expectations',
  },
];

export const newPatientSteps = [
  {
    step: 1,
    title: 'Schedule Appointment',
    description: 'Call us or request an appointment online—we\'ll find a time that works for you.',
  },
  {
    step: 2,
    title: 'Meet The Team',
    description: 'Get to know the friendly faces who will be caring for your smile.',
  },
  {
    step: 3,
    title: 'Comprehensive Evaluation',
    description: 'A thorough exam including digital scans, photos, and radiographs as needed.',
  },
  {
    step: 4,
    title: 'Personalized Treatment Plan',
    description: 'We review findings together and create a plan tailored to your unique needs.',
  },
  {
    step: 5,
    title: 'Healthy Smile',
    description: 'Begin your journey to lasting oral health with a team that truly cares.',
  },
];

export const officeGallery = [
  '/images/office/hero-1.jpg',
  '/images/office/hero-2.jpg',
  '/images/office/gallery-1.jpg',
  '/images/office/gallery-2.jpg',
  '/images/office/gallery-3.jpg',
];
