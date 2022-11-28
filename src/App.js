import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from './pages/Form';
import Home from './pages/Home';
import End from './pages/End';

import './styles/global.css'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
          			<Route path='/form' element={<Form />} />
         			<Route path='/end' element={<End />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;