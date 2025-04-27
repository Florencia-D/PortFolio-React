import '../css/Header.css';

function Header () {
    const alumno = "Florencia Díaz";
    return (
        <>
        <div className="header">
            <h1>Portfolio {alumno}</h1>
            <hr />
        </div>
        </>
    )
}
export default Header;