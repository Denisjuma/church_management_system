import Carousel from './Carousel'
import Announcement from './Announcement'
import Events from './Events'
import Services from './Services'
//import Donate from './Donate'
import Footer from './Footer'
import Spinner from './Spinner'
import Navbar from './Navbar'

const Home = () => {
   
    
    return ( 
        <div className="home">
            <Navbar />
            <Spinner/>
           <Carousel/>
            <Announcement/>
            <Events />
            <Services/>
          {/*}  <Donate/>*/}
            <Footer/>
        </div>
     );
}
 
export default Home;