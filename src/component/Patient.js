import React , {Component} from 'react'
import './patienteee.css'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom"



class Patient extends Component {

  state={
     posts:[],
     consul:[],
     consule:[],
     pres:[],


   }




     componentDidMount=()=>{

       axios.get("http://127.0.0.1:8000/patients/"+this.props.match.params.id+"/")
       .then((response)=>{

      this.setState({consul:response.data.consultations,
      posts:response.data,

    })


         })



       }



render(){

  const {posts,consul,pres,show}= this.state


return(
<div className='cons'>

   <div className="left-sid">

      <div className="hederConsul">
         <h3> Consultations</h3>
         <Link to ={'/Pres/'+posts.id}> <button className="addCons">Add</button> </Link>

       </div>
 <div  ClassName="hrpatient" >
 <hr/>
 </div>



      <div>

{
consul.map(consul=>
<div className='cns' key={consul.id}>
<div className="cnsDate">{consul.date}</div>
<div><h4>Type</h4><p>{consul.type}</p></div>
<div><h4>description</h4><p>{consul.description}</p></div>
<div><h4>outcome</h4><p>{consul.outcome}</p></div>
<div><h4>prescription</h4><div className="prescr">
<Table  bordered>
<thead>
<tr>

  <th>drug</th>
  <th>quantity</th>
  <th>no of times a day</th>
</tr>
</thead>
<tbody>
{consul.prescription_fields.map(prescription_fields=>
<tr >

<td className='col22'>{prescription_fields.drug.scientific_name}</td>
  <td className='col22'>{prescription_fields.quantity}</td>
    <td className='col22'>{prescription_fields.times_per_day}</td>


</tr>



  )}

</tbody>
</Table>
</div></div>


</div>  )}
        </div>




</div>

<div className='patientinfoo'>


{

  <ul className="patient"key={posts.id}>
  <Link to ={'/EditForm/'+posts.id}> <button className="editCons">Edit</button> </Link>
      <li> <img className="imagePatient" src={posts.photo} /></li>
      <div className='listinfo'>
      <p>name</p>
      <li >  {posts.name} </li>
      <p>Birthdate</p>
      <li >{posts.birthdate} </li>
      <p>phone</p>
      <li >{posts.phone} </li>
      <p>wilaya</p>
      <li> {posts.wilaya}</li>

   </div>
  </ul>
}



</div>


</div>



)
}}
export default Patient;
