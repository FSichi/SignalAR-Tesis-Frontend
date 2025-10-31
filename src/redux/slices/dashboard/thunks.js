import { AuthTokenVerification } from "../../../utils/AuthTokenVerification";
import { ResponseStatus } from "../../api/ApiResponse";
import { AppAPI } from "../../api/AppAPI";
// import { renewToken } from "../auth/thunks";
import { startLoadingDashboardProcess, setDashboardData } from "./dashboardSlice";
import { setAlumnoSelectedData } from "../alumnos/alumnosSlice";

export const getDashboardInfo = (token, nav) => {
    return async (dispatch) => {

        dispatch(startLoadingDashboardProcess());

        try {

            const { data: responseData } = await AppAPI(token).get(`/users/dashboard/info`);

            if (responseData.status === ResponseStatus.OK) {

                dispatch(setDashboardData({
                    cards: responseData.data.cards
                }));

                if (responseData.data.alumnoActivo !== null) {
                    dispatch(setAlumnoSelectedData({
                        alumnoSelected: responseData.data.alumnoActivo
                    }));
                }

                // dispatch(renewToken());
            }

        } catch (error) {
            AuthTokenVerification(error, nav, dispatch);
        }
    }
}

