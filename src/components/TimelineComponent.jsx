"use client";

import { Timeline } from 'primereact/timeline';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema de PrimeReact (opcional)
import 'primereact/resources/primereact.min.css'; // Estilos principales de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons
import { NoSymbolIcon } from '@heroicons/react/24/outline';

export default function TimelineComponent() {
  const jobs = [
    {
      position: 'System Technician',
      company: 'Joyson Safety Systems',
      date: 'Dec 2024 - Present',
      location: 'Torreón, Coahuila',
      activities: {
        act1: '- Installed and configured new systems, including network setup, hardware deployment, and integration of production-specific software.',
        act2: '- Monitored and maintained network-connected production-line computers, troubleshooting hardware and software issues on devices.',
        act3: '- Managed and updated part numbers in the production system, ensuring 100% accuracy across multiple production lines.',
      },
    },
    {
      position: 'IT Intern',
      company: 'Joyson Safety Systems',
      date: 'Oct 2024 - Nov 2024',
      location: 'Torreón, Coahuila',
      activities: {
        act1: '- Provided technical support to administrative users, resolving hardware and software issues through a ticketing platform, achieving a 95% satisfaction rate on closed tickets.',
        act2: '- Prepared and configured workstations for new employees, ensuring all systems met company specifications',
        act3: '- Managed and configured network nodes across departments, ensuring proper connectivity and making necessary VLAN changes to improve network efficiency and performance.',
      },
    },
    {
      position: 'Front-End Devloper',
      company: 'Freelance',
      date: 'Oct 2023 - Dec 2023',
      location: 'Remote',
      activities: {
        act1: '- Developed a full front-end website for a startup using Vue.js, delivering a responsive and user-friendly design within a 3-month timeline.',
        act2: '- Developed clean, modular, and reusable code following best practices to ensure scalability and easy maintenance.',
        act3: '- Worked closely with the startups team to ensure the final product was aligned with business goals and ready for launch, with 100% client satisfaction throughout the development process.',
      },
    }
  ];

  return (
    <div className="p-timeline-left">


      <Timeline
        value={jobs}
        content={(item) => (
          <div className="">
            <h1 className="text-lg font-semibold" style={{ color: 'var(--timeline-position)' }} >{item.position}</h1>
            <small style={{ color: 'var(--timeline-company)' }} >{item.company} - {item.location}<br /></small>
            <small className="" style={{ color: 'var(--timeline-company)' }}>{item.date}</small>
            <div className="mt-2 mb-10 text-sm" style={{ color: 'var(--timeline-description)' }}>
              {Object.values(item.activities).map((act, index) => (
                <p key={index}>{act}</p>
              ))}
            </div>
          </div>
        )}
        className="p-timeline-left"
      />
    </div>
  )
}
