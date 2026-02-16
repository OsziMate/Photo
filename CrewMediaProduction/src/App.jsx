import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projektAdatok from "./data/projektek.json"
import kategoriaAdatok from "./data/kategoriak.json"

import TextAreaResize from "./components/TextAreaResize"
import Footer from './components/Footer';


function App() {


  return (
    <>
      <div id="mainbody">
        <div id="navbar">
            <a href="" className="kek">Crew Media Production</a>
            <a href="#rolunk" className="zold">Rólunk</a>
            <a href="#projektek" className="zold">Projektek</a> 
            <a href="#kapcsolat" className="zold">Kapcsolat</a> 
        </div>

        <div>
            <img src="/Asset4@2x.png" alt="" id="polaroid"/>
        </div>

        <h1 className="kek" id="rolunk">Rólunk</h1>
        
        <div  className="osztottdiv">
        <p id="rolunkp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh sem, placerat sed dictum eget, venenatis eu arcu. Vestibulum consequat eros dolor, id hendrerit leo tincidunt vitae. Proin id libero sapien. Maecenas quam tellus, mattis in nibh at, rutrum tristique elit. Nunc aliquet vitae sem et consequat. Nullam placerat vel lectus ac pellentesque. Praesent facilisis sagittis augue, at gravida dui suscipit at. Nam fringilla sed dolor ultrices interdum. Quisque suscipit dictum dui, a efficitur nunc ultricies ac. Curabitur vel diam turpis. Maecenas id laoreet ipsum, eu rhoncus enim. Vivamus a blandit odio.
        </p>
        <img src="/polaroid.png" alt="Leírás a képről" className="kep"/>
        </div>

        <h1 className="kek" id="projektek">Korábbi Projektek</h1>
        <div className="slider-container">
    <div className='swiper-prev' id="projekt-prev">{"<"}</div> 
    
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
            prevEl: "#projekt-prev",
            nextEl: "#projekt-next"
        }}
        pagination={{
            clickable: true,
            el: ".projektek-pagination"
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
            500: {slidesPerView: 1},
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
        }}
        className='mySwiper'
    >
        {projektAdatok.map((projekt) => (
            <SwiperSlide key={projekt.id}>
                <div className='projekt-kartya'>
                    <img src={projekt.kep} alt={projekt.cim} className='tablakep'/>
                    <h3 className='zold'>{projekt.cim}</h3>
                    <p>{projekt.leiras}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
    
    <div className='swiper-next' id="projekt-next">{">"}</div>
    <div className="custom-pagination projektek-pagination"></div>
</div>

        <h1 className="kek">Mivel foglalkozunk?</h1>
        <div className="slider-container">
          <div className='swiper-prev' id="kat-prev">{"<"}</div> 
          
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                  prevEl: "#kat-prev",
                  nextEl: "#kat-next"
              }}
              pagination={{
                  clickable: true,
                  el: ".kategoriak-pagination"
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                  500: {slidesPerView: 1},
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
              }}
              className='mySwiper'
          >
              {kategoriaAdatok.map((projekt) => (
                  <SwiperSlide key={projekt.id}>
                      <div className='projekt-kartya'>
                          <img src={projekt.kep} alt={projekt.cim} className='tablakep'/>
                          <h3 className='zold'>{projekt.cim}</h3>
                          <p>{projekt.leiras}</p>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
          
          <div className='swiper-next' id="kat-next">{">"}</div>
          <div className="custom-pagination kategoriak-pagination"></div>
      </div>

        <h1 id="kapcsolat">Felkeltettük érdeklődésed?</h1>
        <h1>Keress minket bátran!</h1>


        <div className="osztottdiv">
            <form action="">
                <input type="text" name="name" id="name" placeholder="Neved..."/>
                <br/>
                <input type="text" name="phone" id="phone" placeholder="Telefonszámod..."/>
                <br/>
                <TextAreaResize />     
            </form>
            <img src="public/polaroid.png" alt="Leírás a képről" className="kep"/>
        </div>
        
        <Footer />
        
    </div>
    </>
  );
}

export default App
