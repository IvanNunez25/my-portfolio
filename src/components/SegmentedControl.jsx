"use client";

import { UserCircleIcon, DocumentDuplicateIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'About Me', href: '/', icon: UserCircleIcon },
    { name: 'Projects', href: '/projects', icon: DocumentDuplicateIcon },
    { name: 'Blog', href: '/blog', icon: NewspaperIcon },
];

export default function SegmentedControl() {
  const pathname = usePathname();

  return (
    <div className="flex w-full max-w-xs sm:max-w-md mx-auto rounded-2xl p-1" style={{ backgroundColor: 'var(--segmented-bg)' }}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex-2 text-center py-2 rounded-2xl text-sm font-medium transition-colors duration-200",
              pathname === link.href
                ? "shadow" // Aplica sombra si está activo
                : "hover:bg-gray-300",
            )}
            style={{
              color: pathname === link.href ? "var(--segmented-active-text)" : "var(--segmented-text)",
              backgroundColor: pathname === link.href ? "var(--segmented-active-bg)" : "transparent",
            }}
          >
            <LinkIcon className="w-5 mx-auto" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
