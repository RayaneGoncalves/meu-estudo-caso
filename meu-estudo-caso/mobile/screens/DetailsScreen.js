import React, {useEffect,useState} from 'react'
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import API from '../api'
export default function DetailsScreen({route,navigation}){
  const { id } = route.params
  const [student,setStudent] = useState(null)
  useEffect(()=>{
    API.get(`/alunos/${id}`).then(r=>setStudent(r.data)).catch(()=>setStudent(null))
  },[id])
  if(!student) return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Aluno não encontrado</Text></View>)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: student.foto || `https://placehold.co/600x360?text=${encodeURIComponent(student.nome||'Aluno')}`}} style={styles.image} />
      <Text style={styles.name}>{student.nome}</Text>
      <Text style={styles.label}>Matrícula: <Text style={styles.value}>{student.matricula || '—'}</Text></Text>
      <Text style={styles.label}>Curso: <Text style={styles.value}>{student.curso || '—'}</Text></Text>
      <Text style={styles.label}>Observações:</Text>
      <Text style={styles.obs}>{student.obs || '—'}</Text>
      <Button title="Voltar" onPress={()=>navigation.goBack()} />
    </ScrollView>
  )
}
