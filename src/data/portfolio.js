import profileMain from '../assets/profile/profile-main.jpeg'
import profileSecondary from '../assets/profile/profile-secondary.jpeg'
import cloudCertificate from '../assets/certificates/Cloud Associate engineer(GCP).pdf'
import finlaticsCertificate from '../assets/certificates/finlatics-DataScience.pdf'
import nptelCertificate from '../assets/certificates/nptel_certificate.pdf'
import deloitteCertificate from '../assets/certificates/Deloitte(Data Analytics).pdf'
import wiproCertificate from '../assets/certificates/Wipro_Varshitha J.pdf'
import internshipCertificate from '../assets/Experience/internship.jpeg'
import taskManagerImage from '../assets/projects/Task_manager.png'
import medicareImage from '../assets/projects/medicare.png'
import agroAIImage from '../assets/projects/AgroAI.png'
import bloodManagementImage from '../assets/projects/Blood_management.png'
import krishiSakhiImage from '../assets/projects/KrishiSakhi.png'
import foodDeliveryImage from '../assets/projects/food_delivery.png'

export const profile = {
  name: 'Varshitha J',
  email: 'varshithaj2197@gmail.com',
  github: 'https://github.com/VarshithaJ07',
  linkedin: 'https://www.linkedin.com/in/varshitha-j-07vj2005',
  resume: `${import.meta.env.BASE_URL}Varshitha-J-Resume.pdf`,
  photo: profileSecondary ,
  secondaryPhoto:profileMain,
}

export const navItems = [
  ['about', 'About'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['certifications', 'Certifications'],
]

export const projects = [
  {
    name: 'Task Manager',
    type: 'Productivity web app',
    description: 'A focused task management application for organizing everyday work and keeping progress visible.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: taskManagerImage,
    github: 'https://github.com/VarshithaJ07/Task_Manager',
    demo: '',
    color: 'violet',
    details: {
      problem: 'Everyday tasks become harder to manage when priorities and progress are scattered.',
      solution: 'A simple task-focused interface keeps work organized in one place and makes progress easy to scan.',
      features: ['Task creation and organization', 'Clear productivity-focused interface', 'Responsive web experience'],
    },
  },
  {
    name: 'Medicare Booking App',
    type: 'Full-stack product',
    description: 'A full-stack healthcare appointment platform designed to make connecting with healthcare services simple through a responsive modern interface.',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    image: medicareImage,
    github: 'https://github.com/VarshithaJ07/medicare.git',
    demo: '',
    color: 'coral',
    details: {
      problem: 'Healthcare appointment journeys can feel fragmented and difficult to navigate.',
      solution: 'A responsive booking experience connects the interface, API, and data layer in one focused workflow.',
      features: ['Responsive React interface', 'REST API integration', 'MongoDB data layer', 'Full-stack MERN architecture'],
    },
  },
  {
    name: 'AgroAI Plant Disease Detection',
    type: 'AI / Computer vision',
    description: 'An AI-powered plant disease detection system that identifies plant diseases from leaf images using deep learning and computer vision.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Streamlit'],
    image: agroAIImage,
    github: 'https://github.com/VarshithaJ07/Plant_Disease_Detection_System.git',
    demo: '',
    color: 'mint',
    details: {
      problem: 'Early identification of plant disease can help growers make more informed decisions.',
      solution: 'Leaf image preprocessing and CNN classification turn visual symptoms into an accessible prediction workflow.',
      features: ['Image preprocessing', 'CNN classification', 'Model training and evaluation', 'Interactive Streamlit experience'],
    },
  },
  {
    name: 'Blood Management System',
    type: 'Web application',
    description: 'A web-based blood management system that helps manage donor registration and searchable donor records.',
    tags: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    image: bloodManagementImage,
    github: 'https://github.com/VarshithaJ07/Blood-Management-System.git',
    demo: '',
    color: 'gold',
    details: {
      problem: 'Organizations need a clearer way to register donors and retrieve blood records.',
      solution: 'A Flask application provides structured donor registration and searchable MySQL-backed records.',
      features: ['Donor registration', 'Searchable donor records', 'Database management', 'Flask backend'],
    },
  },
  {
    name: 'Krishi Sakhi',
    type: 'AI / Hackathon build',
    description: 'A multilingual AI-powered assistant designed to support farmers with practical agricultural information and intelligent assistance.',
    tags: ['Python', 'AI / ML', 'Streamlit', 'APIs'],
    image: krishiSakhiImage,
    github: 'https://github.com/VarshithaJ07/Krishi_Sakhi.git',
    demo: '',
    color: 'sky',
    details: {
      problem: 'Farmers benefit from practical, understandable information at the moment they need it.',
      solution: 'A multilingual assistant brings agricultural guidance, weather information, and plant support into one interface.',
      features: ['AI-powered assistance', 'Multilingual interaction', 'Weather information', 'Plant disease assistance'],
    },
  },
  {
    name: 'Food Delivery Analysis',
    type: 'Data analytics',
    description: 'A data analysis project exploring food delivery operations, customer behavior, demand patterns, and business performance.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    image: foodDeliveryImage,
    github: 'https://github.com/VarshithaJ07/Food-Delivery-Analysis.git',
    demo: '',
    color: 'violet',
    details: {
      problem: 'Food delivery businesses need clearer insight into orders, customers, demand patterns, and operational performance.',
      solution: 'The project cleans and analyzes delivery data to identify trends and turn observations into useful business insights.',
      features: ['Data cleaning and preprocessing', 'Exploratory data analysis', 'Customer and demand analysis', 'Data visualizations'],
    },
  },
]

export const skillGroups = [
  ['Programming', ['Python', 'Java', 'JavaScript', 'SQL']],
  ['Frontend', ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Vite']],
  ['Backend', ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT']],
  ['Databases', ['MongoDB', 'MySQL']],
  ['AI / Machine Learning', ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'Keras', 'OpenCV', 'Model Training', 'Data Preprocessing', 'EDA']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'MongoDB Compass', 'Google Colab', 'Docker']],
]

// Keep this editable until exact internship details are available.
export const experience = [
  {
    category: 'AI / ML internship',
    role: 'Artificial Intelligence and Machine Learning Intern',
    organization: 'Elevate Labs',
    duration: '1 January 2026 - 30 April 2026 · 4 months',
    description: 'Completed an AI and machine learning internship, contributing to data preprocessing, model development, training, and evaluation to build predictive solutions.',
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Data preprocessing', 'Model development', 'Training and evaluation', 'Predictive solutions'],
    certificate: internshipCertificate,
  },
  {
    category: 'Project development',
    role: 'Full-stack applications',
    organization: 'Independent projects',
    duration: 'Ongoing',
    description: 'Developing applications with React.js, Node.js, Express.js, MongoDB, Flask, and MySQL, from interface to database.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Flask'],
  },
  {
    category: 'Hackathon / buildathon',
    role: 'Krishi Sakhi',
    organization: 'Independent build',
    duration: 'Project-based',
    description: 'Built an AI-powered multilingual farmer assistance project with weather and plant disease support.',
    technologies: ['Python', 'AI / ML', 'Streamlit'],
  },
  {
    category: 'Data science program',
    role: 'Finlatics Data Science with Python',
    organization: 'Finlatics',
    duration: '10 Jan 2025 - 02 May 2025',
    description: 'Completed a practical data science program focused on Python and applied analysis.',
    technologies: ['Python', 'Data Science'],
  },
]

export const certifications = [
  { name: 'Google Cloud Career Launchpad', organization: 'Google Cloud', year: '6 Nov 2025 · Never expires', meta: 'Cloud Engineer Track · Credential ID: dPuz9X1M', file: cloudCertificate, link: '' },
  { name: 'Data Science with Python', organization: 'Finlatics', year: '10 Jan 2025 - 02 May 2025', meta: 'Credential ID: DS-8575235e7cf8774a', file: finlaticsCertificate, link: 'https://finlatics.com/credentialscheck' },
  { name: 'Affective Computing', organization: 'NPTEL Online Certification', year: 'Jan - Apr 2026 · 12 weeks · 4 Credits', meta: 'Elite · Score: 90% · Roll No: NPTEL26CS61S161500304', file: nptelCertificate, link: '' },
  { name: 'Deloitte Data Analytics Job Simulation', organization: 'Deloitte · Forage', year: 'Completed 23 Aug 2026', meta: 'Certificate of Completion · Enrolment Verification Code: 6a80a19d6dfcb5ce71f5d8fa · User Verification Code: 6964ac3e966e9086136fbe64', file: deloitteCertificate, link: '' },
  { name: 'Data Science with Python', organization: 'Wipro Limited · TalentNext', year: 'July - October 2026', meta: 'TalentNext course completion · Certificate ID: TNext-SE-2026-DS_262880122', file: wiproCertificate, link: '' },
]

export const education = [
  { level: 'Bachelor\'s degree', title: 'Information Science and Engineering', institution: 'Vidyavardhaka College of Engineering', location: 'Mysuru, Karnataka', status: 'Ongoing' },
  { level: '12th standard', title: 'Sarvodaya PU College', institution: 'State Board · 94.66%', location: 'Completed in 2023', status: 'Higher secondary education' },
  { level: '10th standard', title: 'Karnataka Public School', institution: 'State Board · 97.76%', location: 'Completed in 2021', status: 'Secondary education' },
]
