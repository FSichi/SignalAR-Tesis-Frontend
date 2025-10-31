import TabsList from '@mui/base/TabsList';
import Tab from '@mui/base/Tab';

/**
 *  
 * @param {Array} dataTabOptions: Es un Array de strings donde estan los nombres de las opciones a renderizar el en Tab
 * 
 * @param {String} tabType: Es un parametro de tipo string donde se envia el tipo de estilo a aplicar en el Tab. Existen 3 tipos.
 *      1. h --> Estilo Horizontal Primario
 *      2. h2 --> Estilo Horizontal Secundario
 *      3. v --> Estilo Vertical  
 */

export const TabsListComponent = ({ dataTabOptions, tabType }) => {
    return (
        <TabsList className={`tab-list-${tabType}`}>

            {dataTabOptions.map((tabOption, i) => (
                <Tab className={`tab-option-${tabType}`} key={i}>{tabOption}</Tab>
            ))}

        </TabsList>
    )
}
