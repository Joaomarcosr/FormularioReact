import { Link } from "react-router-dom";

import './end.css'

function End() {
	return (
		<div className="app">
			<h1 className="title">FIM</h1>
			<span>Cadastro realizado! Informações no console</span>
			<button className="btn">
				<Link className="btn-link" to="/">
        			Voltar para começo
      			</Link>
			</button>
			<button className="btn">
				<Link className="btn-link" to="/form">
        			Voltar para formulário
      			</Link>
			</button>
		</div>
	);
}

export default End;