import React,{useState} from 'react'
import styles from "./Form.module.css"

function Form() {
const [formData, setFormData] = useState()


// console.log(formData)
// console.log("working",task)


// const postDetails = async(value,newTask)=>{
//   let responce = await fetch("http://localhost:3000/details",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({value:newTask

//     })
//   })
//   let data = await responce.json()
//   console.log("data",data)
// }



// const onSubmit = (newData)=>{
//   setFormData([...formData,{id:formData.length+1,value:newData,completed:true}])
// }
const handleChange = (e)=>{
  const inputName = e.target.name
  if(e.target.type==="checkbox"){
    setFormData({...formData,[inputName]:e.target.checked})
  }else{
    setFormData({...formData,[inputName]:e.target.value})
  }
}

const handleSubmit =(e)=>{
  
  e.preventDefault();

  const payload = {
     id:formData.length+1,
    ...formData,

  };
  const postDetails = async(payload)=>{
    let responce = await fetch("http://localhost:3000/details",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(payload)
    })
    let data = await responce.json()
    console.log("dataNNN",data)
  }
  
  postDetails(payload)
  
}




// const handleSubmit = (event) => {
//   event.preventDefault();
//   const postvalue = {
//     id: formData.length+100,
//     name: name ,
//     ownerName: ownername,
//     address:  address,
//     areaCode: acode,
//     rent: rent,
//     tenants: "married",
//     image: img,
//   };
//   const postdata = async (postvalue) => {
//     let res = await fetch(`http://localhost:3000/houses`, {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(postvalue)
//     });
//     let datavalue = await res.json()
//     console.log(datavalue)
//   }
//   postdata(postvalue)
// };












// useEffect(() =>{
//   console.log("working")
// },[])

// const getDetails = async()=>{
//   try{
//     let response = await fetch("http://localhost:3000/details")
//     let data = await response.json();
//     console.log("data",data)
//     setFormData(data)
//     // postDetails(data)
//   }catch(error){
//    console.log(error)
//   }
// }
// const postDetails = async()=>{
//   let responce = await fetch("http://localhost:3000/details",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:data
//   })
//   let data = await response.json()
//   console.log(data)
// }



  return (
    <div> Details
        <form onSubmit={handleSubmit} >
            <div className={styles.grid}>
            <label>User Name</label>
            <input type="text" placeholder='username' name="username" onChange={handleChange} ></input>
            </div>
            <div className={styles.grid}>
            <label>Age</label>
            <input type="number" placeholder='Age' name="age" onChange={handleChange} ></input>
            </div>
            <div className={styles.grid}>
            <label>Address</label>
            <input type="text" placeholder='Address' name="address"onChange={handleChange} ></input>
            </div>
            {/* <div className={styles.grid}>
            <label>Department</label>
            <input type="radio"onChange={handleChange} ></input>
            </div> */}
            <div className={styles.grid}>
            <label>Salary</label>
            <input type="text" placeholder='Salary' name="salary"onChange={handleChange} ></input>
            </div>
            <div className={styles.grid}>
              <label>Maretile Status</label>
            <input type="radio" value="Single" name='MaritalStatus' onChange={handleChange}></input>Single<br/>
            <input type="radio" value="Married" name='MaritalStatus' onChange={handleChange}></input>Married
            </div>
            <div className={styles.grid}>
            {/* <label>Salary</label> */}
            <input type="submit"  name="submit"></input>
            </div>
           
        </form>
     
    </div>
  )
}

export default Form


// onChange={handleChange}