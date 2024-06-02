
import Card from './Card'
import TopBar from './TopBar'

const App = () => (
	<div className="app">
		<TopBar />
		<h1 className="headline white-text">I am the main Application</h1>
		<Card action="meet" subject="friends" />
	</div>
)
export default App



/* 
<TopBar>
	<div>
		<h1>Hello React</h1>
		<h2>Hello React</h2>
	</div>
</TopBar> 
*/