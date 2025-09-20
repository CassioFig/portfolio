'use client';

import React from 'react';
import { useLocale } from '@/contexts/locale-context';

export const LanguageSwitcher: React.FC = () => {
	const { locale, setLocale } = useLocale();

	const toggleLanguage = () => {
		setLocale(locale === 'en' ? 'pt' : 'en');
	};

	return (
		<button
			onClick={toggleLanguage}
			className="flex items-center space-x-2 px-3 py-2 rounded-lg hover-bg-dark transition-all duration-300 transform hover:scale-105 text-white cursor-pointer border border-gray-600 hover:border-green-400"
			title={locale === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
		>
			<div className="flex items-center space-x-2">
				<span className="text-sm font-medium">
					{locale === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
				</span>
				<svg 
					className="w-4 h-4 transition-transform duration-200" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					<path 
						strokeLinecap="round" 
						strokeLinejoin="round" 
						strokeWidth={2} 
						d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
					/>
				</svg>
			</div>
		</button>
	);
};
