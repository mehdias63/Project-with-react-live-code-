const projects = [
	{
		id: 1,
		title: 'طراحی اپلیکیشن سفر آنلاین',
		description:
			'طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین',
		status: 'CLOSED',
		category: {
			id: 1,
			title: 'طراحی UI/UX',
			englishTitle: 'design-ui/ux',
		},
		budget: 10000,
		tags: ['Ui/UX', 'Figma'],
		deadline: '2023-12-23T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
	{
		id: 2,
		title: 'توسعه سایت فروشگاهی',
		description: 'یک سایت فروشگاهی کامل با پنل ادمین',
		status: 'OPEN',
		category: {
			id: 2,
			title: 'برنامه نویسی وب',
			englishTitle: 'web development',
		},
		budget: 50000,
		tags: ['React', 'Nodejs', 'online shop'],
		deadline: '2025-06-23T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
	{
		id: 3,
		title: 'ایجاد سیستم رزرو آنلاین هتل',
		description: 'یک سایت رزرو آنلاین کامل با پنل ادمین',
		status: 'OPEN',
		category: {
			id: 3,
			title: 'برنامه نویسی وب',
			englishTitle: 'web development',
		},
		budget: 400000,
		tags: ['React', 'Nodejs', 'online shop'],
		deadline: '2025-10-11T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
	{
		id: 4,
		title: 'ساخت اپلیکیشن مدیریت وظایف',
		description: 'یک سایت ساخت اپلیکیشن مدیریت وظایف با پنل ادمین',
		status: 'CLOSED',
		category: {
			id: 4,
			title: 'برنامه نویسی وب',
			englishTitle: 'web development',
		},
		budget: 150000,
		tags: ['Ui/UX', 'Figma'],
		deadline: '2023-02-23T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
	{
		id: 5,
		title: 'طراحی و توسعه وب‌سایت خبری',
		description:
			'یک سایت طراحی و توسعه وب‌سایت خبری کامل با پنل ادمین',
		status: 'OPEN',
		category: {
			id: 5,
			title: 'برنامه نویسی وب',
			englishTitle: 'web development',
		},
		budget: 300000,
		tags: ['React', 'Nodejs', 'online shop'],
		deadline: '2025-11-15T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
]

const ProjectTable = ({ filter }) => {
	const filteredProjects = projects.filter(project =>
		filter === 'ALL' ? true : project.status === filter,
	)
	return (
		<div className="">
			<ul className="space-y-4 border p-4 rounded-lg shadow-md">
				<li className="grid grid-cols-7 font-semibold border-b mb-2 py-4 px-6">
					<p>#</p>
					<p className="col-span-2">عنوان پروژه</p>
					<p>بودجه</p>
					<p>ددلاین</p>
					<p>وضعیت</p>
					<p>عملیات</p>
				</li>
				{filteredProjects.map(project => (
					<li
						key={project._id}
						className="grid grid-cols-7 border-b py-4 px-6 bg-white text-sm rounded-md"
					>
						<p>{project.id}</p>
						<p className="col-span-2">{project.title}</p>
						<p>{project.budget.toLocaleString()} تومان</p>
						<p>
							{new Date(project.deadline).toLocaleDateString('fa-IR')}
						</p>
						<p>
							<span
								className={`px-3 py-1 text-white rounded-full ${
									project.status === 'OPEN'
										? 'bg-green-500'
										: 'bg-red-500'
								}`}
							>
								{project.status === 'OPEN' ? 'باز' : 'بسته'}
							</span>
						</p>
						<p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="blue"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
								/>
							</svg>
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectTable
