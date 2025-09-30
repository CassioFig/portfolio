'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useLocale } from '@/contexts/locale-context';

export default function Projects() {
  const { t } = useLocale();

  return (
    <main className="bg-black min-h-screen">
      <section className="max-w-7xl w-full mx-auto pb-16 pt-32 px-8">
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
            <h1 className="text-4xl font-bold text-white">{t.pages.projects.sections.projects.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.pages.projects.sections.projects.data.map((project) => (
            <div
              key={project.name}
              className="group border-dark border-2 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10 bg-black flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <Image
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src={require(`../../assets/images/${project.image}`)}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-white mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-dark px-4 py-2 rounded-lg text-white text-sm hover:bg-green-400/10 hover:text-green-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-green text-black font-medium rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
                  >
                    <ExternalLink size={16} />
                  </a>

                  {project.repositoryLink && (
                    <a
                      href={project.repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-dark text-white rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
