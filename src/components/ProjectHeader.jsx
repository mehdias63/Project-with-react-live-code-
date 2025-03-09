function ProjectHeader({ filter, setFilter }) {
	return (
		<div className="flex justify-between mb-6 mt-12">
			<h2 className="text-xl font-bold mb-4">لیست پروژه‌ها</h2>
			<div className="flex flex-col md:flex-row gap-4 mb-4 items-center text-sm">
				<p>وضعیت</p>
				<div className="flex gap-2 p-2 justify-center bg-white rounded-xl">
					<button
						onClick={() => setFilter('ALL')}
						className={`px-4 py-1 rounded-lg ${
							filter === 'ALL' ? 'bg-blue-500 text-white' : ''
						}`}
					>
						همه
					</button>
					<button
						onClick={() => setFilter('OPEN')}
						className={`px-4 py-1 rounded-lg ${
							filter === 'OPEN' ? 'bg-blue-500 text-white' : ''
						}`}
					>
						باز
					</button>
					<button
						onClick={() => setFilter('CLOSED')}
						className={`px-4 py-1 rounded-lg ${
							filter === 'CLOSED' ? 'bg-blue-500 text-white' : ''
						}`}
					>
						بسته
					</button>
				</div>
				<select className="px-12 py-[0.62rem] rounded-xl">
					<option>مرتب سازی</option>
					<option>جدیدترین</option>
					<option>قدیمی ترین</option>
				</select>
				<select className="px-12 py-[0.62rem] rounded-xl">
					<option>دسته بندی</option>
					<option>باز</option>
					<option>بسته</option>
				</select>
			</div>
		</div>
	)
}

export default ProjectHeader
