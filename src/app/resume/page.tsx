'use client';

import { useLocale } from '@/contexts/locale-context';
import { GraduationCap, Briefcase, Download } from 'lucide-react';

export default function ResumePage() {
	const { t } = useLocale();

	return (
		<main className="bg-black min-h-screen">
			<section className="max-w-7xl w-full mx-auto pb-16 pt-32 px-8">
				<div className="flex items-center mb-8">
					<div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
					<h2 className="text-4xl font-bold text-white">{ t.pages.resume.sections.education.title }</h2>
				</div>

				<div className="border-2 border-dark rounded-lg p-6 flex flex-col gap-5">
					{t.pages.resume.sections.education.data.toReversed().map((edu, index) => (
						<div key={index} className="flex items-start gap-4">
							<GraduationCap className="text-green-1 mt-1" size={24} />
							<div className="flex-1">
								<h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
								<p className="text-green-1 font-medium mb-2">{edu.institution}</p>
								<p className="text-gray-400 text-sm mb-3">{edu.period} ({edu.location})</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='max-w-7xl w-full mx-auto pb-16 px-8'>
				<div className="flex items-center mb-8">
					<div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
					<h2 className="text-4xl font-bold text-white">{ t.pages.resume.sections.experience.title }</h2>
				</div>

				<div className="border-2 border-dark rounded-lg p-6 space-y-8">
					{t.pages.resume.sections.experience.data.toReversed().map((company, companyIndex) => (
						<div key={companyIndex} className="space-y-6">
							<div className="mb-4">
								<h3 className="text-2xl font-semibold text-white mb-1">{company.company}</h3>
								<p className="text-gray-400 text-sm">{company.location}</p>
							</div>
							
							{company.history.toReversed().map((position, positionIndex) => (
								<div key={positionIndex} className="relative">
									<div className="flex items-start gap-4">
										<Briefcase className="text-green-1 mt-1 z-10 bg-black" size={24} />
										<div className="flex-1">
											<h4 className="text-xl font-semibold text-white mb-2">{position.position}</h4>
											<p className="text-gray-400 text-sm mb-3">{position.period}</p>
											<ul className="text-gray-300 leading-relaxed mb-6 space-y-1">
												{position.description.split(';').filter(item => item.trim()).map((item, index) => (
													<li key={index} className="flex items-start gap-2">
														<span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
														<span>{item.trim()}.</span>
													</li>
												))}
											</ul>
											<div className="flex flex-wrap gap-3">
												{position.technologies.map((tech) => (
													<span key={tech} className="bg-dark px-4 py-2 rounded-lg">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
									{positionIndex < company.history.length - 1 && (
										<div className="absolute left-3 top-8 bottom-0 w-px bg-dark"></div>
									)}
								</div>
							))}
						</div>
					))}
				</div>
			</section>

			{/* <button 
				onClick={() => {
					const link = document.createElement('a');
					link.href = '/cv-cassio-figueiredo.pdf';
					link.download = 'CV-Cassio-Figueiredo.pdf';
					link.click();
				}}
				className="fixed bottom-8 right-8 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-semibold p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
				aria-label="Download CV"
			>
				<Download size={24} className="group-hover:animate-bounce" />
			</button> */}
		</main>
	);
}
