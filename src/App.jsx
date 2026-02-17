import './App.css'
import projektAdatok from "./data/projektek.json";
import kategoriaAdatok from "./data/kategoriak.json";

import TextAreaResize from "./components/TextAreaResize";
import Footer from './components/Footer';
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import { LightRays } from "@/components/ui/light-rays";


function App() {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LightRays count={3} color="rgb(143, 167, 194, 0.9)" blur={96} speed={6} length="200vh" />
            </div>
            <div id="mainbody">
                <Navbar />

                <div>
                    <img src="/Asset4@2x.png" alt="" id="polaroid" />
                </div>

                <h1 className="kek" id="rolunk">Rólunk</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[95%] ml-[12%] mx-auto my-10 items-center">
                    <p id="rolunkp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh sem, placerat sed dictum eget, venenatis eu arcu. Vestibulum consequat eros dolor, id hendrerit leo tincidunt vitae. Proin id libero sapien. Maecenas quam tellus, mattis in nibh at, rutrum tristique elit. Nunc aliquet vitae sem et consequat. Nullam placerat vel lectus ac pellentesque. Praesent facilisis sagittis augue, at gravida dui suscipit at. Nam fringilla sed dolor ultrices interdum. Quisque suscipit dictum dui, a efficitur nunc ultricies ac. Curabitur vel diam turpis. Maecenas id laoreet ipsum, eu rhoncus enim. Vivamus a blandit odio.
                    </p>
                    <img src="/polaroid.png" alt="Leírás a képről" className="kep" />
                </div>

                <h1 className='kek' id="projektek">Korábbi Projektek</h1>
                <Slider
                    data={projektAdatok}
                    prevId="projekt-prev"
                    nextId="projekt-next"
                    paginationClass="projektek-pagination"
                    renderItem={(projekt) => (
                        <div className="projekt-kartya">
                            <img src={projekt.kep} alt={projekt.cim} className="tablakep" />
                            <h3 className="zold">{projekt.cim}</h3>
                        </div>
                    )}
                />

                <h1 className='kek'>Mivel foglalkozunk?</h1>
                <Slider
                    data={kategoriaAdatok}
                    prevId="kat-prev"
                    nextId="kat-next"
                    paginationClass="kategoriak-pagination"
                    renderItem={(projekt) => (
                        <div className="projekt-kartya">
                            <img src={projekt.kep} alt={projekt.cim} className="tablakep" />
                            <h3 className="zold">{projekt.cim}</h3>
                        </div>
                    )}
                />

                <h1 id="kapcsolat">Felkeltettük érdeklődésed?</h1>
                <h1>Keress minket bátran!</h1>

                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 w-full md:w-[95%] mx-auto my-10 items-center">
                    <div className='md:col-span-7'>
                        <form action="">
                        <input type="text" name="name" id="name" placeholder="Neved..." required/>
                        <br />
                        <input type="text" name="phone" id="phone" placeholder="Telefonszámod..." required/>
                        <br />
                        <TextAreaResize />
                        <br />
                        <input type='submit' id="kuldes"/>
                    </form>
                    </div>
                    <div className='md:col-span-3'>
                        <img src="/polaroid.png" alt="Leírás a képről" className="kep" />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default App;