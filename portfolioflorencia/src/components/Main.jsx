function Main ({ datos }) {
    return (
        <>
        <div className="card">
            <img src={datos.imagen} alt="Foto del alumno" width="150" />
            <h2>{datos.nombre}</h2>
             <p>{datos.descripcion}</p>
        </div>
        </>
    )
}
export default Main 