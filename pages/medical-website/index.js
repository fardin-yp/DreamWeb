import Navbar from "../../components/navbar/navbar";
import Footer from '../../components/footer/footer';
import NoPost from '../../components/NoPost/NoPost'
import Head from 'next/head';

export async function getStaticProps() {

  const loggedIn = await fetch("https://dreamwebbackend.herokuapp.com/allRoutes/real-state",{method:'GET'});
  const logged = await loggedIn.json();
  
  const resSeo = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/Seo/medical');
  const jsonSeo = await resSeo.json();

  return {
     props: {
       posts:logged 
       ,jsonSeo
      }
  }
}  

const index = ({posts ,jsonSeo}) => {
    return (
        <div className="layout">

<Head>
   <link rel="icon" href="/art.png" />
    <title>{jsonSeo && jsonSeo[0].title}</title>
    <meta name="description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="keywords" content={jsonSeo && jsonSeo[0].keywords} />
    <meta property="og:site_name" content="دریم وب"/>
    <meta property="og:title" content={jsonSeo && jsonSeo[0].title} />
    <meta property="og:description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={jsonSeo && jsonSeo[0].ogUrl} />
    <meta name="og:type" content={jsonSeo && jsonSeo[0].ogType}/>
    <meta property="og:locale" content="Fa_IR" /> 
  </Head>
            <Navbar />
            <div style={{background:"linear-gradient(90deg, #06beb6 0%, #48b1bf 100%)"}} className="route">
              <h1>وبسایت های پزشکی</h1>
            </div>
            {posts.findPost.length === 0 && <NoPost name={"پزشکی"} background={"linear-gradient(90deg, #06beb6 0%, #48b1bf 100%)"} />}   
              <div className="shop">
                <div className="shop-con">
                {posts && posts.findPost.map(res => {
                  return <a href={`/fb/${res.name}`} key={res._id}>
                    <img src={`/uploads/${res.image}`} alt={res.image} />
                    <h1>خرید وبسایت پزشکی  {res.name}</h1>
                    <p>قیمت {res.price} هزار تومان</p>
                   </a>
                  })}
                </div>
              </div>
            <Footer />
        </div>
    )
}
export default index