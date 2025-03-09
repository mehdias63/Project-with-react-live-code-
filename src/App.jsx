import { useState } from 'react'
import ProjectTable from './components/ProjectTable'
import ProjectHeader from './components/ProjectHeader'

function App() {
	const [filter, setFilter] = useState('ALL')
	return (
		<div className="container mx-auto p-4">
			<ProjectHeader filter={filter} setFilter={setFilter} />
			<ProjectTable filter={filter} />
		</div>
	)
}

export default App
