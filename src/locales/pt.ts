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
					title: "Educação",
					data: [
						{
							degree: "Bacharelado em Ciência da Computação",
							institution: "Universidade Tiradentes",
							location: "Aracaju, Brasil",
							period: "Jan. 2019 - Jul. 2023",
						},
						{
							degree: "Diploma de Desenvolvedor Web Co-op",
							institution: "Tamwood Careers College",
							location: "Vancouver, Canadá",
							period: "Abril 2025 - Maio 2026",
						}
					]
				},
				experience: {
					title: "Experiência",
					data: [
						{
							company: "Tiradentes Group",
							location: "Aracaju, Brasil",
							history: [
								{
									position: "Estagiário em Análise de Dados",
									period: "Maio 2021 - Out. 2021",
									description: `Desenvolveu painéis em Power BI para a alta administração, automatizando relatórios baseados em Excel e economizando mais de 10 horas por semana de trabalho manual;
										Utilizou processos ETL com Python e Pentaho;
										Realizou análise de dados com PySpark;
										Criou e otimizou consultas SQL complexas para processar conjuntos de dados com mais de 1 milhão de registros;
										Gerenciou o data warehouse corporativo utilizando Oracle Database, garantindo integridade, desempenho e escalabilidade dos dados para operações analíticas;
										Colaborou no desenvolvimento de uma funcionalidade que permite a estudantes universitários acompanhar o progresso acadêmico, beneficiando mais de 2.000 alunos;
									`,
									technologies: ["Python", "PySpark", "Pentaho", "Power BI", "Oracle"]
								},
								{
									position: "Desenvolvedor de TI",
									period: "Nov. 2021 - Jan. 2024",
									description: `Desenvolveu soluções de backend utilizando a stack Node.js, Express, TypeScript, PostgreSQL e Redis, com foco em desempenho, escalabilidade e manutenibilidade;
									Projetou e implementou novas aplicações web utilizando React, entregando interfaces amigáveis e componentes responsivos;
									Aplicou os princípios SOLID, Arquitetura Limpa e padrões de projeto para garantir bases de código limpas, testáveis e escaláveis;
									Participou da integração de sistemas de pagamento, garantindo processamento de transações seguro e confiável. Utilizou a Google Cloud Platform (GCP) para implantação de aplicações;
									Utilizou a Google Cloud Platform (GCP) para implantação de aplicações;
									Liderou uma equipe de estagiários no desenvolvimento de um novo sistema, coordenando tarefas, revisando código e garantindo entrega dentro do prazo; Essa iniciativa reduziu o tempo de desenvolvimento em 40% e aumentou significativamente o desempenho da equipe;
									`,
									technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "GCP"]
								}
							]
						},
						{
							company: "INFOX",
							location: "Aracaju, Brasil",
							history: [
								{
									position: "Desenvolvedor Java",
									period: "Fev. 2024 - Abril 2025",
									description: `Responsável pela manutenção e evolução do Infox BPM e Infox eCP, soluções de gerenciamento de processos de negócios (BPM) que permitem a modelagem e automação de processos empresariais;
										Desenvolveu soluções de backend utilizando Java 8, Criteria, Hibernate, JPA e Jboss;
										Gerenciou e manteve bancos de dados utilizando Liquibase, PostgreSQL e SQLServer;
										Prestou suporte ao cliente e resolveu problemas técnicos para TCE-PE, TCM-PA, TCM-BA e CFM, garantindo alta satisfação do cliente e eficiência operacional;
									`,
									technologies: ["Java", "Criteria", "Hibernate", "JPA", "JSF", "Jboss", "Liquibase", "PostgreSQL", "SQLServer"]
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
							description: "Uma aplicação web para realizar o draft de jogadores para a Copa Nec.",
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
					title: "Contato",
					description: "Entre em contato comigo através de qualquer um dos canais abaixo. Estou sempre aberto a discutir novas oportunidades e projetos interessantes.",
					data: [
						{
							type: "email",
							label: "E-mail",
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
					]
				}
			}
		}
	}
} as const
