
export const HistorialAcademico = ({ alumno }) => {
    return (
        <section className="bg-gray-800 text-gray-100 rounded-2xl p-4 mt-3">

            <div className="text-center py-20 text-2xl">
                HISTORIAL ACADEMICO DE - {alumno.apellidoyNombre}
            </div>

        </section>
    )
}
