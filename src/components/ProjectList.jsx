import { useState } from 'react'

const projects = [
	{
		_id: 1,
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
		_id: 2,
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
		deadline: '2023-12-23T12:55:48.740Z',
		createdAt: '2023-10-23T18:18:55.636Z',
		updatedAt: '2024-06-02T13:37:48.468Z',
	},
]

const ProjectList = () => {
	const [filter, setFilter] = useState('ALL')

	const filteredProjects = projects.filter(project =>
		filter === 'ALL' ? true : project.status === filter,
	)
	return (
		<div className="p-4">
			<div className="flex justify-between">
				<h2 className="text-xl font-bold mb-4">لیست پروژه‌ها</h2>
				<div className="flex flex-col md:flex-row gap-4 mb-4">
					<div className="flex gap-2 border p-2 rounded w-full md:w-1/3 justify-center">
						<button
							onClick={() => setFilter('ALL')}
							className={`px-3 py-1 rounded ${
								filter === 'ALL' ? 'bg-blue-500 text-white' : ''
							}`}
						>
							همه
						</button>
						<button
							onClick={() => setFilter('OPEN')}
							className={`px-3 py-1 rounded ${
								filter === 'OPEN' ? 'bg-blue-500 text-white' : ''
							}`}
						>
							باز
						</button>
						<button
							onClick={() => setFilter('CLOSED')}
							className={`px-3 py-1 rounded ${
								filter === 'CLOSED' ? 'bg-blue-500 text-white' : ''
							}`}
						>
							بسته
						</button>
					</div>
					<input
						type="text"
						placeholder="جستجو بر اساس عنوان"
						className="border p-2 rounded"
					/>
					<input
						type="text"
						placeholder="جستجو بر اساس وضعیت"
						className="border p-2 rounded"
					/>
				</div>
			</div>
			<ul className="space-y-4 border p-4 rounded-lg shadow-md">
				<li className="grid grid-cols-5 font-semibold border-b pb-2 mb-2">
					<p>عنوان پروژه</p>
					<p>بودجه</p>
					<p>ددلاین</p>
					<p>وضعیت</p>
					<p>عملیات</p>
				</li>
				{filteredProjects.map(project => (
					<li
						key={project._id}
						className="grid grid-cols-5 border-b py-2"
					>
						<p>{project.title}</p>
						<p>{project.budget.toLocaleString()} تومان</p>
						<p>
							{new Date(project.deadline).toLocaleDateString('fa-IR')}
						</p>
						<p>
							<span
								className={`px-3 py-1 text-white rounded-lg ${
									project.status === 'OPEN'
										? 'bg-green-500'
										: 'bg-red-500'
								}`}
							>
								{project.status === 'OPEN' ? 'باز' : 'بسته'}
							</span>
						</p>
						<p>✅</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectList
