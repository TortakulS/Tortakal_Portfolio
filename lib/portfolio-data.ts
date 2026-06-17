export type Project = {
  title: string
  description: string
  tags: string[]
  images: string[]
  github: string
  live?: string
  privateNote?: string
}

export const SCG_NOTE =
  'โปรเจกต์นี้เป็นส่วนหนึ่งของงานที่ทำร่วมกับบริษัท SCG จึงไม่สามารถเปิดเผยโค้ดทั้งหมดได้'

export const profile = {
  name: 'Tortakul Saelao',
  role: 'Full Stack Developer',
  tagline:
    'I build performant, user-centered web applications with a focus on clarity, speed, and thoughtful UX.',
  email: 'tortakul.saelao@gmail.com',
  github: 'https://github.com/TortakulS',
  resume: '/Resume_Tortakul_Saelao.pdf',
}

export const projects: Project[] = [
  {
    title: 'Corporate-Booking-System',
    description:
      'A centralized enterprise platform for managing and streamlining internal travel and accommodation reservations, including hotel stays, company vehicles, and flight tickets — enabling employees to book, track, and manage requests in real time with role-based access control and automated approval workflows.',
    images: [
      '/projects/project-1.png',
      '/projects/project-1b.png',
      '/projects/project-1c.png',
    ],
    tags: ['Next.js', 'TypeScript', 'shadcn/ui','Tailwind CSS','Express', 'MMSQL','IIS Server'],
    privateNote: SCG_NOTE,
    github: '#',
  },
  {
    title: 'co-op-internship-logbook',
    description:
      'A digital logbook platform designed for university students to record, track, and manage their internship and cooperative education (co-op) experiences — enabling students to log daily activities, summarize weekly progress, and submit reports, while allowing supervisors and faculty advisors to review, and evaluate student performance throughout the placement period.',
    images: [
      '/projects/project-2.png',
      '/projects/project-2b.png',
      '/projects/project-2c.png',
    ],
    tags: ['Next.js', 'TypeScript', 'shadcn/ui','Tailwind CSS','MMSQL'],
    github: 'https://github.com/TortakulS/co-op-internship-logbook',
  },
  {
    title: 'POS-Project',
    description:
      'A full-stack Point of Sale (POS) system integrated with IoT hardware, powered by a Raspberry Pi 4 as the central server — combining a responsive web-based front-end interface with physical hardware components to deliver a seamless retail or service management experience. The system handles sales transactions, inventory tracking, and real-time device communication between software and connected IoT',
    images: [
      '/projects/project-3.png',
      '/projects/project-3b.png',
      '/projects/project-3c.png',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS','ProgressSQL','Raspberry Pi 4'],
    github: 'https://github.com/TortakulS/POS-Project',
  },
  {
    title: 'E-card Wedding',
    description:
      'A digital wedding invitation card application built as a personal experiment to explore and integrate Supabase as a backend database and authentication service alongside Cloudflare for hosting and edge deployment.',
    images: [
      '/projects/project-4.png',
      '/projects/project-4b.png',
      '/projects/project-4c.png',
    ],
    tags: ['Next.js', 'TypeScript', 'shadcn/ui','Tailwind CSS','Supabase','Cloudflare'],
    github: 'https://github.com/TortakulS/web-wedding',
  },
  {
    title: 'e-commerce-website',
    description:
      'A PHP-based web application for tracking and managing farm equipment inventory across multiple farms, built as a hands-on PHP learning project.',
    images: [
      '/projects/project-5.png',
      '/projects/project-5b.png',
      '/projects/project-5c.png',
    ],
    tags: ['HTML', 'Php', 'CSS', 'Bootstrap','MySQL'],
    github: 'https://github.com/TortakulS/WEB-Farm-Equipment-Hub',
  },
]

export const projectsdata: Project[] = [
  {
    title: 'Data pipeline Airflow',
    description:
      'An automated, end-to-end data pipeline designed to streamline retail analytics. The pipeline programmatically extracts raw transaction data from an on-premise PostgreSQL database via a secure Docker network, processes and cleanses the datasets using Pandas into 6 strategic business dimensions (e.g., top products, AOV, daily sales), and seamlessly streams the multi-table aggregates into Google BigQuery to support downstream business intelligence and visualization.',
    images: [
      '/projects/project-6.png',
      '/projects/project-6b.png',
      '/projects/project-6c.png',
    ],
    tags: ['Apache Airflow', 'Python', 'Pandas','Docker','PostgreSQL', 'Google BigQuery'],
    github: 'https://github.com/TortakulS/Local-data-TO-Cloud-Data',
  },
    {
    title: 'Local-ETL-Pipeline',
    description:
      'This project builds an ELT (Extract, Load, Transform) pipeline on a local machine to extract data from a CSV file, load it into a PostgreSQL database, and transform the data using Python before using it for data analysis.',
    images: [
      '/projects/project-7.png',
      '/projects/project-7b.png',
      '/projects/project-7c.png',
    ],
    tags: ['Python','Pandas','PostgreSQL'],
    github: 'https://github.com/TortakulS/Local-ETL-Pipeline',
  },

]
