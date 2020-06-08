import api from '../../services/api'
import { toast } from 'react-toastify'

const  alert = (message)=>toast(message)



export const addUsuario = (form)=>{
    return dispatch =>{
        api.post('/cadastro',form)
            .then((res)=>{
                alert(res.data)
            })
            .catch((res)=> console.log(res))
            
            
    }
}