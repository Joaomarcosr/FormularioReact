import { useForm } from 'react-hook-form';
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './form.css'

const verificacao = yup.object({
	firstName: yup.string().required("Primeiro nome é obrigatório!").max(10, "Máximo de 10 caracteres").min(3, "Mínimo de 3 caracter"), // Dizendo que é uma string e que é obrigatório
	lastName: yup.string().required("Sobre nome é obrigatório!").max(10, "Máximo de 10 caracteres").min(3, "Mínimo de 3 caracter"),
	job: yup.string().required("Profissão é obrigatório!").max(30, "Máximo de 30 caracteres").min(3, "Mínimo de 3 caracter"),
	gender: yup.string().required("Gênero é obrigatório!"),
	age: yup.string().required("Idade é obrigatório!"),
}).required();

function Form() {
	// Desestruturando esses elementos de dentro da biblioteca	
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(verificacao)
	})

	const onSubmitForm = data => {
		console.log(data)
		alert('Cadastro realizado com sucesso! Dados no console.');
		setOpen(!isOpen)
	}

	const [isOpen, setOpen] = useState(false);

	return (
		<div className="app">
			<form onSubmit={handleSubmit(onSubmitForm)}> {/* sinaliza que estamos enviando uma função dps que faz o submit */}
				<h1>Formulário Brabo</h1>

				<div className='field' >
					<label className='label'>Nome</label>
					<input type="text" {...register("firstName")}/> {/* (...) desconstroi o register */}
					<p>{errors.firstName?.message}</p>
				</div>

				<div className='field' >
					<label className='label'>Sobre nome</label>
					<input type="text" {...register("lastName")}/>
					<p>{errors.lastName?.message}</p>
				</div>

				<div className='field' >
					<label className='label'>Profissão</label>
					<input type="text" {...register("job")}/> 
					<p>{errors.job?.message}</p>
				</div>

				<div className='box'>
					<div className='field fieldAlternative'>
						<label className='label'>Gênero</label>
						<select {...register("gender")}>
							<option value="">Selecione</option>
							<option value="female">Feminino</option>
							<option value="male">Masculino</option>
							<option value="heli">Helicóptero RMAX Type II</option>
							<option value="other">Outro</option>
							<option value="nothing">Prefiro não informar</option>
						</select>
						<p>{errors.gender?.message}</p>
					</div>

					<div className='field fieldAlternative' >
						<label>Idade</label>
						<input type="number" {...register("age", { min: 18, max: 99 })}/>
						<p>{errors.age?.message}</p>
					</div>
				</div>

				<button type='submit'>
						CADASTRAR
				</button>

				{
					isOpen ? 
					<button type='reset'>
						<Link className="btn-link" to="/end">
        					Próxima página
      					</Link>
					</button> 
					: 
					""
				}

			</form>
		</div>
	);
}

export default Form;