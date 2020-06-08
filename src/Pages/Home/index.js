import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'





const Home = ()=>{
    const [user, setUser] = useState([])
    useEffect(()=>{
        api.get('/usuarios')
            .then((res)=>{
                setUser(res.data)
            })
    },[])

    return(


       <div className='container row'>
            
        { user.map((u)=>
                <>
                <div className="card border-info mb-3 ml-3 mt-3" style={{maxWidth: "18rem"}}>
                <div key={u.id} className="card-header">{u.nome}</div>
                    <div className="card-body text-info">
                        <h5 class="card-title">{u.email} </h5>
                        <p className="card-text">Nascido em: <Moment format='DD/MM/YYYY'>{u.nasc}</Moment>
                        </p>
                        <p className="card-text">Profissão: {u.profissao}</p>
                        <p className='card-text'>Observações:<br/>{u.observacoes} </p>
                    <Link to={`/editar&${u.id}`}><button className=" btn btn-success mr-2">Editar</button></Link>
                    <button onClick={()=>api.delete(`/remove/${u.id}`)
                        .then(res => window.location.pathname= '/'
                        )} className="btn btn-danger">Excluir</button>
                </div>
                </div>
                </>
            )}
        </div>    
           

    )
}

export default Home