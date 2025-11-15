import React, {useEffect,useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import API from '../api'
export default function ListScreen({navigation}){
  const [students,setStudents] = useState([])
  useEffect(()=>{
    API.get('/alunos').then(r=>setStudents(r.data || [])).catch(()=>{})
  },[])
  return (
    <View style={styles.container}>
      <FlatList data={students} keyExtractor={i=>String(i.id)} renderItem={({item})=>(
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Details',{id:item.id})}>
          <Image source={{uri: item.foto || `https://placehold.co/400x240?text=${encodeURIComponent(item.nome||'Aluno')}`}} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.course}>{item.curso || 'Curso'}</Text>
          </View>
        </TouchableOpacity>
      )} />
    </View>
  )
}
