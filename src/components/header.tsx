'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/contexts/locale-context';
import { LanguageSwitcher } from './language-switcher';
import Link from 'next/link';

export const Header: React.FC = () => {
	const { t } = useLocale();
	const pathname = usePathname();

	return (
		<header className="bg-black border-b border-dark h-24 flex items-center justify-between px-8 fixed top-0 w-full z-50">
			<section className="relative z-10 mt-23">
				<div className="relative w-44 h-44 flex items-center justify-center">
					<div className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-sm" style={{background: 'radial-gradient(circle, rgba(82, 242, 106, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)'}}></div>
					
					<svg className="absolute inset-0 w-44 h-44" viewBox="0 0 140 140">
						<defs>
							<path id="circle" d="M 70, 70 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" />
						</defs>
						<text className="font-medium tracking-wider animate-spin origin-center" style={{fill: 'var(--color-green-1)', animationDuration: '20s', fontSize: '11.5px'}}>
							<textPath href="#circle" startOffset="0%">
								{t.header.logo}
							</textPath>
						</text>
					</svg>
					
					<div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full shadow-lg bg-gradient-green">
						<span className="text-black font-bold text-4xl tracking-tight">CF</span>
					</div>
				</div>
			</section>
			<section className="absolute left-1/2 transform -translate-x-1/2">
				<nav>
					<ul className="flex space-x-2">
						<li>
							<Link href="/" className={`px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer ${pathname === '/' ? 'bg-dark' : ''}`}>
								{t.header.menu.home}
							</Link>
						</li>
						<li>
							<Link href="/resume" className={`px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer ${pathname === '/resume' ? 'bg-dark' : ''}`}>
								{t.header.menu.resume}
							</Link>
						</li>
						<li>
							<Link href="/projects" className={`px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer ${pathname === '/projects' ? 'bg-dark' : ''}`}>
								{t.header.menu.projects}
							</Link>
						</li>
						<li>
							<Link href="/contact" className={`px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer ${pathname === '/contact' ? 'bg-dark' : ''}`}>
								{t.header.menu.contact}
							</Link>
						</li>
					</ul>
				</nav>
			</section>
			<section className="flex items-center"><LanguageSwitcher /></section>
		</header>
	)
}