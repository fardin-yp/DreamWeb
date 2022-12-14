import axios from 'axios';
import React,{useEffect, useState ,useContext} from 'react';
import context from "../../../helpers/context/authContext"

export async function getInitialProps (context) {

    const con = context.params.code;
    const merchant = "d164f627-0400-4dc5-8da5-bc166ee30553";
  
    const loggedIn = await fetch(`http://localhost:3000/api/fullPost/${con}`,{method:'GET'});
    const logged = await loggedIn.json();

    const usersloggedIn = await fetch("http://localhost:3000/api/Auth/find",{
        credentials: "include",
        headers:{
          cookie:context.req.cookies.token
        }
        
      });

      const user = await usersloggedIn.json()


  
    return {
       props: {post:logged ,find:user   ,merchant}
    }
  }

const index = ({post ,find  ,merchant}) => {

    const [usename ,setusename] = useState('');
    const [number ,setNumber] = useState("");
    const [email ,setEmail] = useState("");
    const [agree ,setAgree] = useState("");
    const [err ,setErr] = useState(null);
    const [comDomain ,setcomDomain] = useState(false);
    const [comDomainPrice ,setcomDomainPrice] = useState(290000);
    const [description ,setDescription] = useState("");
    const [read ,setRead ] = useState(false);
    const [laws ,setLaws] = useState("");
    const {Api } = useContext(context);
    const [ rialsPay ,setrialsPay] = useState("");


    const law = async () => {
     await axios.get(`${Api}/allRoutes/laws`,{withCredentials:true}).then(res => {
       setLaws(res.data[0].text)
     })
    }

    useEffect(() => {
      if(find) {
        setusename(find.usename);
        setEmail(find.email);
        setNumber(find?.number[0]?.number);
        law();
        setrialsPay(post && post.price + "0");
      }
    },[]);

    console.log(post)

    useEffect(() => {

     if(comDomain === true){
     const parse = parseInt(post && post.price + "0")
     setrialsPay(post && parse + comDomainPrice )
     }
     if(comDomain === false){

      setrialsPay(post && post.price + "0")

      }

    },[comDomain]);

    const paying = async (e) => {
       e.preventDefault();
       
      const Post = {object:{post , comDomain},category:"amade",email:find.email, des:description ,amount:parseInt(rialsPay) , description:post.name ,callback_url:`http://localhost:3000/order/buyComplete/${rialsPay}/`,merchant_id:merchant}
       await axios.post(`${Api}/sell/pay` ,Post ,{withCredentials:true})
       .then(res => {
        if(res.data.errMessage){
          setErr(res.data)
        }
        if(!res.data.errMessage){
          localStorage.setItem("object" ,JSON.stringify(res.data))
          window.location = `https://www.zarinpal.com/pg/StartPay/${res.data.post.data.authority}`
        }

      })
    }
console.log(find)

 
    return (
      <>
      {find && find.username && <div className="order-web">
            <h1> ?????????? ???????????? ???????????? {post?.name}</h1>
            {read === true && <div onClick={() => setRead(false)} id="backDrop">hello</div>}
            {read === true &&             
            <div className="law">
              <img onClick={() => setRead(false)} src="/images/cancel (1).png" alt=""/>
{laws && <div dangerouslySetInnerHTML={{__html: laws}} />}
            </div>}
            <form >
                <input style={{background:"#ddf0ff"}}  placeholder={`?????? ?? ?????? ????????????????: `} value={`?????? ?? ?????? ????????????????: ${find.usename} ${find.number[0].family}`} onChange={(e) => setusename(e.target.value)} />
                <input style={{background:"#ddf0ff"}} placeholder="?????????? ??????????" value={`?????????? ??????????: ${find.number[0].number}`} />
                <input style={{background:"#ddf0ff"}} placeholder={`???? ??????: `} value={`???? ??????: ${find.number[0].meliCode}`} />
                <input style={{background:"#ddf0ff"}} placeholder="??????????" value={`??????????: ${find?.email}`} />  
                <textarea onChange={(e) => setDescription(e.target.value)} style={{fontWeight:"600",width:"92%",marginTop:"15px" ,borderRadius:"5px",border:"1px solid silver",height:"100px"}} placeholder="?????????????? ?????????? ... (????????????)" />   
                
                <label>
                    <div style={{width:"99%",margin:"10px 0px"}}>
                      <input type="checkbox" checked={comDomain} onChange={() => setcomDomain(prev => !prev)} /><p>?????????? com ?????????????? 290,000 ??????????</p></div>
                    <div style={{width:"99%",margin:"10px 0px"}}>
                      <input type="checkbox" />
                      <p>???????????? ???????????? ???? ???????????? ???????? ?? ???? ???? ???????????? .<b style={{cursor:"pointer",pointerEvents:"all"}} onClick={() => setRead(true)}>???????????? ????????????</b></p>
                    </div>
                </label>
                <div className="payment">
                    <p>???????? ???????? ????????????:</p>
                    <p>{rialsPay} ???????? </p>
                </div>
                <a href="#" onClick={paying} >???????????? ????????????</a>
            </form>
            {err && 
            <div className="secc-comment" style={{zIndex:"151"}}>
              <img src={'/uploads/warning.png'} alt="" />
              <h1>{err.errMessage}</h1>
            <div>
            <button onClick={() => setErr(null)} style={{background:"red"}} >  ?????????? ?????? !</button>
            </div>
            </div>}
        </div>}
        </>
    )
}

export default index;
