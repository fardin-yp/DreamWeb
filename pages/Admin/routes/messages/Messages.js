import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react';
import context from "../../../../helpers/context/authContext"

const Messages = ({route}) => {
    const [contacts ,setContacts] = useState(null);
    const [consaltings ,setConsaltings] = useState(null);
    const [exclusives ,setExclusives] = useState(null);
    const [Delete ,setDelete] = useState(null);
    const [loading ,setLoading] = useState(false);
    const [slice ,setSlice] = useState(10);
    const {Api} = useContext(context);
    const [select ,setSelect] = useState(null);
    const [sure ,setSure] = useState(false)

    useEffect(() => {
     const getMessages = async () => {
         axios.get(`${Api}/adminRoute/getMessages` , {withCredentials:true}).then(res => {
             setContacts(res.data.Contacts);
             setConsaltings(res.data.Consaltings);
             setExclusives(res.data.Exclusives)
         })
     }
     getMessages()
    },[])

   const deleteMessages = async () => {
      const post = {type:Delete.type ,id:Delete.id}
      setLoading(true)
      try{
        await axios.post(`${Api}/adminRoute/deleteMessages` ,post , {withCredentials:true}).then(res => {
           if(res.data.Consaltings){
               setConsaltings(res.data.Consaltings);
               setLoading(false);
               setDelete(null);
           }
           if(res.data.Contacts){
            setContacts(res.data.Contacts);
            setLoading(false);
            setDelete(null);
        }
        if(res.data.Exclusives){
            setExclusives(res.data.Exclusives);
            setLoading(false);
            setDelete(null);
        }
        })

      }catch(err){
        setLoading(false);
      }
   }
   const addSlice = () => {
       setSlice(prev => prev + 10)
   }
   useEffect(() => {
    setSlice(10)
   },[route]);

console.log(select)
    return (
        <div className="products" 
        style={{flexFlow:"column",alignItems:"center",justifyContent:"flex-start"}}>
            {sure && 
            <div className="secc-comment" style={{zIndex:"151"}}>
              <h1>???????????? ???????? ?????? ????????</h1>
              <img src={'/uploads/warning.png'} alt="" />
              <button disabled={loading} onClick={deleteMessages}>
                  {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}
                  ?????? ????????
              </button>
            </div>}
            
            {sure && <div style={{zIndex:"26"}}  onClick={() => setSure(false)} id="backDrop">hello</div>}
            {select && <div onClick={() => setSelect(null)} id="backDrop">hello</div>}
            {select && <div className="select-Message">
                <button onClick={() => setSure(true)}>Delete</button>
                 <label>
                     <input value={`?????? : ${select.name}`} />
                     {select.email && <input value={`?????????? : ${select.email}`} />}
                     {select.number && <input value={`?????????? ?????????? : ${select.number}`} />}
                     {select.message && <input value={` ?????????? ???????? : ${select.message}`} />}
                     <input value={` ?????????? : ${select.timestamp}`} />
                 </label>
                 {select.des && <textarea value={`???????? : ${select.des}`} />}
                </div>}
    {route === "send-exclusive" && 
           <>
<div className="tabels" style={{width:"100%" ,justifyContent:"center" ,zIndex:"13"}}>
<div>
  <label>
      <b>?????????????? ?????? ???????????? ??????????????</b>
  </label>
  <table>
  <thead >
        <th>
        ?????? ?? ?????? ????????????????
        </th>
        <th>
         ??????????
        </th>
        <th>
        ?????????? ????????
        </th>
    </thead>
   <tbody >
   {exclusives && exclusives.slice(0,slice).map(res => {
            return <tr onClick={() => {
            setDelete({type:"exclusives" , id:res._id})
            setSelect(res)}} 

            style={{backgroundColor:"white" ,position:"relative"}} key={res._id}>
                    <td style={{width:"25%"}}>{res.name}</td>
                    <td style={{width:"50%"}}>{res.email}</td>
                    <td style={{width:"25%"}}>{res.number}</td>
                </tr>
            })}
   </tbody> 
    <tfoot></tfoot>
</table>
</div>
</div>
            
            

            </>
        }
        {route === "send-consulting" && 
            <>
            <div className="tabels" style={{width:"100%" ,justifyContent:"center" ,zIndex:"13"}}>
            <div>
              <label>
                  <b>?????????????? ?????? ????????????</b>
              </label>
              <table>
              <thead >
                    <th>
                    ?????? ?? ?????? ????????????????
                    </th>
                    <th >
                    ?????????? ????????
                    </th>
                </thead>
               <tbody >
               {consaltings && consaltings.map(res => {
            return <tr onClick={() => {
                setSelect(res)
                setDelete({type:"consaltings" , id:res._id})
                }} className="Admin-messages" key={res._id}>
                    <td style={{width:"50%"}}>{res.name}</td>
                    <td style={{width:"50%"}}>{res.number}</td>
                </tr>
            })}
               </tbody> 
                <tfoot></tfoot>
            </table>

         </div>
    </div>
     </>
        }
        {route === "contact-us" && 
            <>
        <div className="tabels" style={{width:"100%" ,justifyContent:"center" ,zIndex:"13"}}>
            <div>
              <label>
                  <b>???????? ?????? ???????????? ???? ????</b>
              </label>
              <table>
              <thead >
                    <th>
                    ?????? ?? ?????? ????????????????
                    </th>
                    <th>
                     ??????????
                    </th>
                    <th>
                    ?????????? ???????? 
                    </th>
                    <th>
                    ??????????
                    </th>
                </thead>
               <tbody >
               {contacts && contacts.map(res => {
            return <tr onClick={() => {
            setDelete({type:"contacts" , id:res._id})
            setSelect(res)}} 
             style={{backgroundColor:"white"}} key={res._id}>
                    <td style={{width:"20%"}}> {res.name}</td>
                    <td style={{width:"40%"}}> {res.email}</td>
                    <td style={{width:"20%"}}> {res.message}</td>
                    <td style={{width:"20%"}}> {res.timestamp}</td>
                </tr>
            })}
               </tbody> 
                <tfoot></tfoot>
            </table>

         </div>
    </div>
     </>
        }

        </div>
    )
}

export default Messages;
