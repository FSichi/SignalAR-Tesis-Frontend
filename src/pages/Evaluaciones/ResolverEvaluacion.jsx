import { useParams } from "react-router-dom";

export const ResolverEvaluacion = () => {

    const { idEvaluacion } = useParams();

    return (
        <div>
            {idEvaluacion}
        </div>
    )
}
