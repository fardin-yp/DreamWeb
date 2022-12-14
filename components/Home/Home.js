import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Image from 'next/image'
import { useState ,useRef, useEffect ,useContext} from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import context from "../../helpers/context/authContext"


const Home = ({json ,articles ,Questions ,links }) => {
 
    const [questions ,SetQuestions] = useState('');
    const [name , setName] = useState("");
    const [number , setNumber ] = useState("");
    const [errMessage ,setErrMessage] = useState("");
    const [loading ,setLoading ]= useState(false);
    const reRef = useRef('');
    const {Api} = useContext(context)

    const sendConsulting = async (e) => {
        e.preventDefault();
        setLoading(true);
        const captcha = await reRef.current.executeAsync();
        reRef.current.reset()

    const post = {number ,name ,captcha}
    await axios.post(`${Api}/allRoutes/consulting` ,post).then(res => {
    if(res.data.errMessage){
    setErrMessage(res.data.errMessage)
    setLoading(false)
    }
    setLoading(false)        
})
    }

    const HandleScroll = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const element = document.querySelector(target).offsetTop;
       
        window.scrollTo({
            left:0,
            top:element 
        })
    }

    return (
        <>

        <div className="layout">  
        <Navbar />   
                <div className="home" > 
                
                
                <div className="first-con" >
                   <label>
                   <img  src="/images/Web-Designers.jpeg" alt="" />
                <div className="header-title">

                  <h1>همین الان کسب و کار اینترنتی خودت رو راه اندازی کن!</h1>
                   <h2>با کمترین هزینه یه موفقیت آنلاین روتجربه کن </h2>
                <div>
                <a onClick={HandleScroll} href="#third-con">خرید سایت آماده</a>
                <a href="/exclusive-website">خرید سایت اختصاصی</a>
                </div>

                </div>
                   </label>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
                          <path fill="#f4faf4" fill-opacity="1" d="M0,256L120,229.3C240,203,480,149,720,138.7C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
                <div className="second-con">
                        <div className="head-con">
                            <div className="line" /><h1> ویژگی ها  </h1><div className="line" id="line-2"/>
                        </div>
                        <div className="vijegi">
                                <div>
                                <img src="/uploads/SEOp.png" alt="سئو و بهینه سازی dreamWeb"  />
                                    <h1>سئو و بهینه سازی</h1>
                                    <p>ساخت وبسایت بر پایه اصول سئو با بالاترین سرعت.</p>
                                    
                                </div>
                                <div id="resp">
                                <img src="/uploads/RES.png" alt="طراحی حرفه ای "  />
                                <h1>طراحی حرفه ای و مدرن</h1>
                                <p>استفاده از جدیدترین متد و ابزار های طراحی برای زیبایی بی حدو مرز وبسایت شما.</p>
                                </div>
                                <div id="maintance">
                                    <img  src="/uploads/main.png" alt="پشتیبانی فنی"  />
                                    <h1>پشتیبانی فنی</h1>
                                    <p> پشتیبانی رایگان 1 ماهه بی قیدو شرط برای خریداران به وسیله مجرب ترین تیم پشتیبانی.</p>
                            </div>
                        </div>
                    </div>
                    <div className="web-design">
                      <div className="web-right"> <h1>
                           چرا طراحی سایت ؟
                       </h1>
                         <p> امروزه فضای اجتماعی و اینترنت به بخش جدا ناپذیر زندگی ما تبدیل شده است و وبسایت ها بعنوان بزرگترین و کم هزینه ترین مکان برای بازار یابی تبدیل شده اند . </p>
                         <p>همچنین مهم ترین دلیلی که داشتن وبسایت را ضرورت میبخشد فراگیر بودن اینترنت است اکثر مردم ترجیح میدهند به جای ترافیک و اتلاف وقت درخانه خرید کنند. </p>
                         <p> اگر تا کنون شما یک وبسایت خوب برای کسب و کار خود نداشته باشد بخش عضیمی از بازار کشور را از دست داده اید.</p>
                      </div> 
                       <div className="web-left">
                         <Image layout="fill" prefix src="/uploads/design.jpg" alt="design-website" />
                       </div>
                    </div>

                    <div id="third-con">
                        <div className="head-con">
                            <div className="line" /><h1> خرید سایت  </h1><div className="line" />
                        </div>
                        <div className="plans"> 
                        <a href="shop-website">
                            <img src="/uploads/shop-icon.png" alt="خرید وبسایت فروشگاهی" />
                            <h1>خرید وبسایت فروشگاهی</h1>
                        </a>
                        <a href="/medical-website">
                            <img src="/uploads/doctors.png" alt="خرید وبسایت پزشکی" />
                            <h1>خرید وبسایت پزشکی</h1>
                        </a>
                        <a href="company-website">
                            <img src="/uploads/company.png" alt="خرید وبسایت شرکتی" />
                            <h1>خرید وبسایت شرکتی</h1>
                        </a>
                        <a href="/news-website">
                            <img src="/uploads/news.png" alt="خرید وبسایت خبری" />
                            <h1>خرید وبسایت خبری</h1>
                        </a>
                        <a href="/resturant-website">
                            <img src="/uploads/online-order.png" alt="خرید وبسایت رستوران" />
                            <h1>خرید وبسایت رستوران</h1>
                        </a>
                        <a href="/personal-website">
                            <img src="/uploads/person.png" alt="خرید وبسایت شخصی" />
                            <h1>خرید وبسایت شخصی</h1>
                        </a>
                        <a href="/Real-Estate-website" >
                            <img src="/uploads/house.png" alt="خرید وبسایت املاک" />
                            <h1>خرید وبسایت املاک</h1>
                        </a>
                        <a href="/exclusive-website" >
                            <img src="/uploads/exclusive.png" alt="خرید وبسایت املاک" />
                            <h1>سفارش سایت اختصاصی</h1>
                        </a>
                        </div>
                    </div>

                    <div className="forth-con">
                        <div className="head-con">
                            <div className="line" /><h1> مراحل ساخت  </h1><div className="line" />
                        </div>
                     <div  className="steps">
                     <circle>
                        <img src="/uploads/steps.png" alt=" مراحل ساخت  dreamweb" />
                     </circle>
                     <div className="step-1">
                         <b>1</b>
                         <h1>خرید سایت</h1>
                         <p>شما میتوانید وبسایت دلخواهتان را خرید یا سفارش دهید.</p>
                      </div>
                     <div className="step-2">
                         <b>2</b>
                         <h1>آماده سازی سایت</h1>
                         <p>پس از ثبت خرید با توجه به نوع سفارش آماده سازی سایت انجام میشود که میتواند بین 2 تا 14 روز زمان ببرد.</p>
                        </div>
                     <div className="step-3">
                         <b>3</b>
                         <h1>تحویل سایت</h1>
                         <p>در آخرین مرحله وبسایت مطابق میل شما تحویل داده میشود و آموزش های لازم به شما ارائه میشود.</p>
                      </div>
                     </div>
                    </div>
                    <div className="contact">
                      <div>
                          <h1>به مشاوره نیاز دارید؟</h1>
                          <p>شما میتوانید در صورت نیاز به مشاوره نام و شماره تماس خود را برای ما ارسال کرده تا مشاورین ما با شما تماس حاصل کنند.</p>
                      </div>
                      <form>
                          <input placeholder="نام و نام خانوادگی" onChange={(e) => setName(e.target.value)} />
                          <input placeholder="شماره تلفن همراه" onChange={(e) => setNumber(e.target.value)} />
                        <div style={{width:"100%"}}>
                        {errMessage && <b style={{border:"2px solid #fe0000",fontSize:"12px",padding:"10px" ,borderRadius:"10px" ,background:"white" ,color:"black"}}>
                            <img style={{width:"20px",height:"20px",margin:"-5px 5px"}} src="/images/warning (1).png" alt=""/>
                            {errMessage}
                        </b>}
                        <ReCAPTCHA 
                           style={{zIndex:"30",opacity:"0",visibility:"hidden"}}
                           size="invisible"
                           sitekey={json}
                           ref={reRef}
                           />
                            <button style={{cursor:"pointer"}} disabled={loading} onClick={sendConsulting}> 
                            {loading && <div style={{height:"20px" ,width:"20px",top:"25%"}} className='loading-spinner'></div>}ارسال</button>
                            </div>
                      </form>
                    </div>

                    { Questions && Questions.length > 0 && <div className="fifth-con">
                        <div className="head-con">
                            <div className="line" /><h1>  سوالات متداول  </h1><div className="line" />
                        </div>
                       <div className="q-place">
                           {Questions && Questions.map(res => {
                               return <div 
                               key={res._id}  
                               className="q-box" 
                               onClick={() => questions === res._id ? SetQuestions("null") : SetQuestions(res._id)}>
                               <h1 style={{fontSize:"17px"}}>{res.question}</h1>
                                    {questions === res._id && <div>{res.answer && <div dangerouslySetInnerHTML={{__html: res.answer}} />}</div>}
                               </div>
                           })}
      
                       </div>
                    </div>}

                    <div className="seven-con">
                <label>
                <div>
                    <img width={750} height={440} src={"/images/support.jpg"} alt="support" />
                </div>
                <div>
                    <h1>ما در هر قدم کنار شما هستیم</h1>
                    <p>تیم پشتیبانی دریم وب  در تمامی مسیر همراه شماست . شما میتوانید از راه های مختلف چت با پشتیبانی ارسال ایمیل و سایر حساب های رسمی دریم وب وب با ما در ارتباط باشد .</p>
                <div>
                <div>
                    <Image width={60} height={60}src={"/images/3977930.png"}  alt=""  />
                    <b>تلفن تماس</b>
                    <p>{links && links.phone}</p>
                </div>
                <div style={{alignItems:"center"}}>
                    <Image  width={40} height={40}src={"/images/mail-142.png"}  alt=""  />
                    <b >ایمیل</b>
                    <p>{links && links.email}</p>
                </div>
                <div>
                    <Image width={40} height={40}src={"/images/PinClipart.com_mountains-black-and-white_1580825.png"}  alt=""  />
                    <b>اینستاگرام</b>
                    <p>{links && links.instagram}</p>
                </div>
                </div>
            </div>

            </label>

            </div>
            <div className="sixth-con">
                        <div className="head-con">
                            <div className="line" /><h1> مقالات </h1><div className="line" />
                        </div>
                <div className="maqalat">
                    {articles && articles.slice(0,3).map(res => {
                        return <a key={res._id} href={`/articles/${res._id}`}>
                            <img src={`/uploads/${res.image}`} alt={res.title} />
                            <div>
                              <h1>{res.title}</h1>
                              <label>
                              <div><img src={"/uploads/conversation.png"} alt="comments" />دیدگاه:{res.comments.length}</div>
                              <div><img src={"/uploads/calendar.png"} alt="calendar" />{res.timestamp}</div>
                              </label>
                            </div>
                        </a>
                    })}
                 </div>
            </div>

            </div>
            <Footer  />
        </div>
        </>
    )
}

export default Home
