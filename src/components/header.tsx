export const Header: React.FC = () => {
	return (
		<header className="bg-black border-b border-dark h-24 flex items-center justify-between px-8 fixed top-0 w-full z-50">
			<section className="relative z-10 mt-23">
				<div className="relative w-44 h-44 flex items-center justify-center">
					<div className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-sm" style={{background: 'radial-gradient(circle, rgba(82, 242, 106, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)'}}></div>
					
					<svg className="absolute inset-0 w-44 h-44" viewBox="0 0 140 140">
						<defs>
							<path id="circle" d="M 70, 70 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" />
						</defs>
						<text className="text-[11px] font-medium tracking-wider animate-spin origin-center" style={{fill: 'var(--color-green-1)', animationDuration: '20s'}}>
							<textPath href="#circle" startOffset="0%">
								CASSIO FIGUEIREDO • FULL STACK DEVELOPER • BRAZIL •
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
							<button className="px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer">
								Home
							</button>
						</li>
						<li>
							<button className="px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer">
								Resume
							</button>
						</li>
						<li>
							<button className="px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer">
								Projects
							</button>
						</li>
						<li>
							<button className="px-4 py-2 rounded-lg hover-bg-dark transition-all duration-450 transform hover:scale-105 text-white cursor-pointer">
								Contact
							</button>
						</li>
					</ul>
				</nav>
			</section>
		</header>
	)
}