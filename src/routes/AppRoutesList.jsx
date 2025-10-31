import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { ListadoAlumnos } from "../pages/Alumnos/ListadoAlumnos";
import { AgregarAlumno } from "../pages/Alumnos/AgregarAlumno";
import { Perfil } from "../pages/Perfil";
import { VisualizarAlumno } from "../pages/Alumnos/VisualizarAlumno";
import { ListadoSecciones } from "../pages/Secciones/ListadoSecciones";
import { ListarEvaluaciones } from "../pages/Evaluaciones/ListarEvaluaciones";
import { VisualizarSeccion } from "../pages/Secciones/VisualizarSeccion";
import { ResolverLeccion } from "../pages/Lecciones/ResolverLeccion";
import { ResolverEvaluacion } from "../pages/Evaluaciones/ResolverEvaluacion";


export const AppRoutesList = [
    {
        path: '/dashboard', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<Dashboard />}></ProtectedRoute>,
    },
    {
        path: '/perfil', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<Perfil />}></ProtectedRoute>,
    },
    {
        path: '/alumnos/listado', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<ListadoAlumnos />}></ProtectedRoute>,
    },
    {
        path: '/alumnos/visualizar/:idAlumno', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<VisualizarAlumno />}></ProtectedRoute>,
    },
    {
        path: '/alumnos/agregar', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<AgregarAlumno />}></ProtectedRoute>,
    },
    {
        path: '/seccion/listado', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<ListadoSecciones />}></ProtectedRoute>,
    },
    {
        path: '/lecciones/visualizar/:idSeccion', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<VisualizarSeccion />}></ProtectedRoute>,
    },
    {
        path: '/leccion/resolver/:idLeccion', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<ResolverLeccion />}></ProtectedRoute>,
    },
    {
        path: '/evaluacion/listado', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<ListarEvaluaciones />}></ProtectedRoute>,
    },
    {
        path: '/evaluacion/resolver/:idEvaluacion', // the url
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <ProtectedRoute children={<ResolverEvaluacion />}></ProtectedRoute>,
    },
]