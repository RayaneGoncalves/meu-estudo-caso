import React, {useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../api'
export default function StudentDetails(){
  const { id } = useParams()
  const nav = useNavigate()
  const [student,setStudent] = useState(null)
  useEffect(()=>{
    API.get(`/alunos/${id}`).then(r=>setStudent(r.data)).catch(()=>setStudent(null))
  },[id])
  if(!student) return <div className="container">Aluno não encontrado</div>
  return (
    <div className="container">
      <div className="detail-card">
        <img src={student.foto || `https://placehold.co/600x360?text=${encodeURIComponent(student.nome||'Aluno')}`} alt={student.nome} className="detail-img" />
        <h2>{student.nome}</h2>
        <p><strong>Matrícula:</strong> {student.matricula || '—'}</p>
        <p><strong>Curso:</strong> {student.curso || '—'}</p>
        <p><strong>Observações:</strong> {student.obs || '—'}</p>
        <button className="btn" onClick={()=>nav(-1)}>Voltar</button>
      </div>
    </div>
  )
}
