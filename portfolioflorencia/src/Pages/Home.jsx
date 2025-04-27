import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import perfil from '../assets/perfil.jpg';

const Home = () => {
    
        const datosAlumno = {
          nombre: "Florencia Magalí Díaz",
          descripcion: "Soy estudiante de programación en la Facultad Regional Tucumán. Manejo lenguajes como Java, JavaScript, y Python.",
          imagen: perfil
        };

    return (
        <>
         <Header  />
         <Main datos={datosAlumno}/>
         <Footer/>

        </>
       

    )
}
export default Home;