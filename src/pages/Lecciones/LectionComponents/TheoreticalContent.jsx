import { TemasEjemplosData } from "../../../data/TemasEjemplos"
import { ActionButton, ActionButtonPracticalContent } from "../../../components/Buttons/ActionButton"
import { ContentFrame } from "./ContentFrame"
import { SideBar } from "./SideBar"
import { SignalFrame } from "./SignalFrame"
import { useEffect, useState } from "react"
import { changeSidebarData, getThemeById, getContentByLeccionId, getTopicLength } from "../../../helpers/getterOptionsForData"
import { Toast } from "../../../utils/ToastSweetAlert"

export const TheoreticalContent = ({ lectionId, onCompleteTheory }) => {

    const [theoricalContent, setTheoricalContent] = useState([]);
    const [sidebarData, setSidebarData] = useState([]);
    const [contentData, setContentData] = useState([]);
    const [themeNumber, setThemeNumber] = useState(0);
    const [lastTopic, setLastTopic] = useState(0);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        setTheoricalContent(getContentByLeccionId(lectionId, TemasEjemplosData));
        setLastTopic(getTopicLength(lectionId, TemasEjemplosData));
        setThemeNumber(1);
        setLoadingData(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (loadingData) {
            setContentData(getThemeById(themeNumber, theoricalContent.contenidoTeorico));
            if (sidebarData.length === 0) {
                setSidebarData(changeSidebarData(themeNumber, theoricalContent.contenidoTeorico));
            }
            else {
                setSidebarData(changeSidebarData(themeNumber, sidebarData));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeNumber, loadingData])


    const nextTopic = () => {
        setThemeNumber(prev => prev + 1)
    }

    const activarPractica = () => {
        
        onCompleteTheory();

        Toast.fire({
            icon: 'success',
            title: 'CONTENIDO PRACTICO HABILITADO'
        });
    }

    return (
        <div className="mx-2 flex justify">
            <div className="w-1/5">
                <SideBar data={sidebarData} title="Temas" />
            </div>

            {
                contentData.length !== 0 &&
                <div className="w-3/5 ">
                    <ContentFrame data={contentData} />
                </div>
            }

            <div className="">
                <SignalFrame gifToShown={contentData.gif}/>
                <div className="flex justify-between xl:mt-10 sm:mt-16">

                    <img src={contentData.img} width="170px" />

                    <div className="mr-5 mt-20">
                        {
                            (themeNumber) !== lastTopic
                                ? <ActionButton actionMethod={nextTopic} title={'Siguiente'} type={'button'} />
                                : <ActionButtonPracticalContent actionMethod={activarPractica} title={'A Practicar'} type={'button'} />
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}
