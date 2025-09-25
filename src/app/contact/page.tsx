'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLocale } from '@/contexts/locale-context';

export default function Contact() {
  const { t } = useLocale();

	const icons = {
		github: Github,
		linkedin: Linkedin,
		email: Mail,
		'phone-br': Phone,
		'phone-ca': Phone,
	}

  return (
    <main className="bg-black min-h-screen">
      <section className="max-w-4xl w-full mx-auto pb-16 pt-32 px-8">
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
            <h1 className="text-4xl font-bold text-white">{t.pages.contact.sections.contact.title}</h1>
          </div>
          <p className="text-white text-lg leading-relaxed">
            {t.pages.contact.sections.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pages.contact.sections.contact.data.map((item) => {
            const Icon = icons[item.type];
            return (
              <a
                key={item.type}
                href={item.href}
                target={item.isExternal ? '_blank' : '_self'}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="group border-dark border-2 rounded-lg p-6 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10 bg-black hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-black" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    {item.label}
                  </h3>
                </div>
                <p className="text-white group-hover:text-green-400/80 transition-colors duration-300 ml-16">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}