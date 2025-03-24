"use client";

import { Timeline } from 'primereact/timeline';
import { Chip } from 'primereact/chip';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function TimelineComponent() {
  const jobs = [
    {
      position: 'System Technician',
      company: 'Joyson Safety Systems',
      date: 'Dec 2024 - Present',
      location: 'Torreón, Coahuila',
      tags: ['Network Administration'],
    },
    {
      position: 'IT Intern',
      company: 'Joyson Safety Systems',
      date: 'Oct 2024 - Nov 2024',
      location: 'Torreón, Coahuila',
      tags: ['Technical Support', 'Network'],
    },
    {
      position: 'Front-End Developer',
      company: 'Freelance',
      date: 'Oct 2023 - Dec 2023',
      location: 'Remote',
      tags: ['Time Management', 'Front-End', 'VueJS'],
    }
  ];

  return (
    <div className="p-timeline-left">
      <h1 className='text-2xl text-center font-bold mt-10 mb-10'>Experience</h1>
      <Timeline
        value={jobs}
        content={(item) => (
          <div className="">
            <h1 className="text-lg font-semibold" style={{ color: 'var(--timeline-position)' }} >{item.position}</h1>
            <small style={{ color: 'var(--timeline-company)' }} >{item.company} - {item.location}<br /></small>
            <small className="" style={{ color: 'var(--timeline-company)' }}>{item.date}</small>
            <div className="flex gap-2 mt-2 mb-10" >
              {item.tags.map((tag, key) => (
                <Chip label={tag} key={key} />
              ))}
            </div>
          </div>
        )}
        className="p-timeline-left"
      />
    </div>
  )
}
