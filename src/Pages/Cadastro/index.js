import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsuario } from '../../store/fetchActions'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';


const Cadastro=()=>{
    const[form, setForm] = useState({
        nome: '',
        email: '',
        profissao: 'SDR',
        nasc:'',
        observacoes: ''

    })
    const { register, handleSubmit, errors } = useForm()
   
   

    const dispatch = useDispatch()

    function handleChange(e){
        const {name, value} = e.target
        setForm({...form,[name]: value})
    }
    function onSubmit(e){
        //e.preventDefault()
        dispatch(addUsuario(form))
        setForm( {  nome:'',
            email:'',
            profissao: '',
            nasc:'',
            observacoes:''})
       
    }

    return(
    <form className="container col-6" method='POST' onSubmit={handleSubmit(onSubmit)} type='application/x-www-form-urlencoded'>
        <h1 className='text-center'>Cadastro</h1>
        <div className="form-group">
            <label for="exampleFormControlInput1">Nome</label>
            {errors.nome && <span style={{color:'red'}}><br/>Este campo é Obrigatório</span>}
            <input onChange={handleChange} ref={register({ required: true })} name='nome' type="text" className="form-control" id="exampleFormControlInput1" placeholder="digite seu nome" value={form.nome}/>
        </div>
      <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Endereço de e-mail</label>
              {errors.email && <span style={{color:'red'}}><br/>E-mail inválido</span>}
            <input onChange={handleChange} ref={register({ required: true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={form.email}/>
      </div>
      <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Data de Nascimento</label>
              {errors.nasc && <span style={{color:'red'}}><br/>Este campo é Obrigatório</span>}
            <input onChange={handleChange} ref={register({ required: true })} name='nasc' type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={form.nasc}/>
      </div>
  
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Profissão</label>
        <select onChange={handleChange} className="form-control" id="exampleFormControlSelect1" name='profissao' value={form.profissao}>
          <option>Programador</option>
          <option>Consultor de Vendas</option>
          <option>SDR</option>
          <option>Suporte ao Cliente</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea onChange={handleChange} name='observacoes' className="form-control" id="exampleFormControlTextarea1" rows="3" value={form.observacoes}></textarea>
      </div>
      <button className="btn btn-info">Cadastrar</button>
    </form>
    )
}

export default Cadastro