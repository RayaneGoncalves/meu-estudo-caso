import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import API from '../api'
export default function StudentsList(){
  const [students,setStudents] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    API.get('/alunos').then(r=>{
      setStudents(r.data || [])
    }).catch(()=>{})
    .finally(()=>setLoading(false))
  },[])
  if(loading) return <div className="container">Carregando...</div>
  return (
    <div className="container">
      <div className="grid">
        {students.map(s=>(
          <div className="card" key={s.id}>
            <img src={s.foto || `https://placehold.co/400x240?text=${encodeURIComponent(s.nome||'Aluno')}`} alt={s.nome} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{s.nome}</h3>
              <p className="card-sub">{s.curso || 'Curso não informado'}</p>
              <Link to={`/student/${s.id}`} className="btn">Ver detalhes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
