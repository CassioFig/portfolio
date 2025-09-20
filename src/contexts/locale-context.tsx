'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { EN, PT } from '../locales';
import type { Locale } from '../locales';

type LocaleData = typeof EN | typeof PT;

interface LocaleContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: LocaleData;
	isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const localeData: Record<Locale, LocaleData> = {
	en: EN,
	pt: PT,
};

interface LocaleProviderProps {
	children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
	const [locale, setLocaleState] = useState<Locale>('en');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const savedLocale = localStorage.getItem('locale') as Locale;
		if (savedLocale && ['en', 'pt'].includes(savedLocale)) {
			setLocaleState(savedLocale);
		} else {
			const browserLang = navigator.language.split('-')[0];
			if (browserLang === 'pt') {
				setLocaleState('pt');
			}
		}
		setIsLoading(false);
	}, []);

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale);
		localStorage.setItem('locale', newLocale);
	};

	const contextValue: LocaleContextType = {
		locale,
		setLocale,
		t: localeData[locale],
		isLoading,
	};

	return (
		<LocaleContext.Provider value={contextValue}>
			{children}
		</LocaleContext.Provider>
	);
};

export const useLocale = (): LocaleContextType => {
	const context = useContext(LocaleContext);
	if (context === undefined) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}
	return context;
};