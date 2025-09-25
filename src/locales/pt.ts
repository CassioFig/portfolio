export const PT = {
	jobTitle: "Desenvolvedor Full Stack",
	header: {
		logo: "CASSIO FIGUEIREDO • FULL STACK DEVELOPER • BRASIL •",
		menu: {
			home: "Início",
			resume: "Currículo",
			projects: "Projetos",
			contact: "Contato",
		}
	},
	pages: {
		home: {
			sections: {
				about: {
					navigationTitle: "Sobre",
					title: "Sobre mim",
					description: "Bacharel em Ciência da Computação com aproximadamente quatro anos de experiência profissional em desenvolvimento full-stack, especializado em soluções backend. Possui sólida experiência em liderar projetos, otimizar fluxos de trabalho e mentorar equipes, utilizando metodologias ágeis. Habilidoso em processos de revisão de código para garantir código de alta qualidade e manutenível. Apaixonado por entregar soluções impactantes e aprimorar continuamente a expertise."
				},
				skills: {
					navigationTitle: "Habilidades",
					title: "Minhas Habilidades",
					description: ""
				}
			},
			skills: {
				mobile: "Desenvolvimento Mobile",
				web: "Desenvolvimento Web",
				backend: "Desenvolvimento Backend",
			}
		},
		resume: {
			sections: {
				education: {
					title: "Education",
					data: [
						{
							degree: "Computer Science Bachelor’s degree",
							institution: "Tiradentes University",
							location: "Aracaju, Brazil",
							period: "Jan. 2019 - July 2023",
						},
						{
							degree: "Web Developer Co-op Diploma ",
							institution: "Tamwood Careers College",
							location: "Vancouver, Canada",
							period: "Apr. 2025 - May 2026",
						}
					]
				},
				experience: {
					title: "Experience",
					data: [
						{
							company: "Tiradentes Group",
							location: "Aracaju, Brazil",
							history: [
								{
									position: "Data Analytics Intern",
									period: "May 2021 - Oct. 2021",
									description: `
										Developed backend solutions using the Node.js, Express, TypeScript, PostgreSQL, and Redis stack, focusing on performance, scalability, and maintainability.
										Designed and implemented new web applications using React, delivering user-friendly interfaces and responsive components.
										Applied SOLID principles, Clean Architecture, and design patterns to ensure clean, testable, and scalable codebases.
										Participated in the integration of payment systems, ensuring secure and reliable transaction processing.
										Utilized Google Cloud Platform (GCP) to deploy applications.
										Led a team of interns in the development of a new system, coordinating tasks, reviewing code, and ensuring on-time delivery. This initiative reduced development time by 40% and significantly boosted team performance.
									`,
									technologies: ["React, Node.js, TypeScript, PostgreSQL, Redis, GCP"]
								},
								{
									position: "IT Developer",
									period: "Nov. 2021 - Jan. 2024",
									description: `
										Developed Power BI dashboards for senior management, automating Excel-based reports and saving 10+ hours per week of manual work;
										Utilization of ETL processes with Python and Pentaho;
										Data analysis with PySpark;
										Created and optimized complex SQL queries to process datasets with over 1 million records;
										Managed the corporate data warehouse using Oracle Database, ensuring data integrity, performance, and scalability for analytical operations;
										Collaborated on a feature that allows university students to track academic progress, benefiting over 2,000 students;
									`,
									technologies: ["Python, PySpark, Pentaho, Power BI, Oracle"]
								}
							]
						},
						{
							company: "INFOX",
							location: "Aracaju, Brazil",
							history: [
								{
									position: "Java Developer",
									period: "Feb. 2024 - April 2025",
									description: `
										Responsible for the maintenance and evolution of Infox BPM and Infox eCP, business process management (BPM) solutions that enable the modeling and automation of business processes;
										Developed backend solutions using Java 8, Criteria, Hibernate, JPA, and Jboss;
										Managed and maintained databases using Liquibase, PostgreSQL, and SQLServer;
										Provided customer support and resolved technical issues for TCE-PE, TCM-PA, TCM-BA, and CFM, ensuring high customer satisfaction and operational efficiency;
									`,
									technologies: ["Java, Criteria, Hibernate, JPA, JSF, Jboss, Liquibase, PostgreSQL, SQLServer"]
								}
							]
						}
					]
				}
			}
		},
		projects: {
			sections: {
				projects: {
					title: "Projetos",
					data: [
						{
							image: "flamengo-project.png",
							name: "Clone do Site do Flamengo",
							description: "Um clone do site oficial do clube de futebol Flamengo, construído com HTML, CSS e JavaScript.",
							link: "https://flamengo-clone.netlify.app/",
							repositoryLink: "https://github.com/CassioFig/flamengo-webpage",
							technologies: ["HTML5", "CSS3", "JavaScript"]
						},
						{
							image: "nec-project.png",
							name: "Nec Cup Draft",
							description: "Uma aplicação web para draftar jogadores para a Copa Nec.",
							link: "https://nec-cup-draft.netlify.app/",
							repositoryLink: "",
							technologies: ["Next.js", "TypeScript"]
						}
					]
				}
			}
		},
		contact: {
			sections: {
				contact: {
					title: "Contact",
					description: "Get in touch with me through any of the channels below. I'm always open to discussing new opportunities and interesting projects.",
					data: [
						{
							type: "email",
							label: "Email",
							value: "cassio.figueiredof@gmail.com",
							href: "mailto:cassio.figueiredof@gmail.com",
							isExternal: false,
						},
						{
							type: 'github',
							label: 'GitHub',
							value: 'CassioFig',
							href: 'https://github.com/CassioFig',
							isExternal: true,
						},
						{
							type: 'linkedin',
							label: 'LinkedIn',
							value: 'cassiofig',
							href: 'https://www.linkedin.com/in/cassiofig/',
							isExternal: true,
						},
						{
							type: 'phone-br',
							label: 'Phone (Brazil)',
							value: '+55 79 99944-7667',
							href: 'tel:+5579999447667',
							isExternal: false,
						},
						{
							type: 'phone-ca',
							label: 'Phone (Canada)',
							value: '+1 236-863-5277',
							href: 'tel:+12368635277',
							isExternal: false,
						},
					]
				}
			}
		}
	}
} as const
