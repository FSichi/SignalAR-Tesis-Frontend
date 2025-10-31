
export const TitleForForms = ({ title, titleEmphasis, colorTitle, subTitle }) => {
    return (
        <div>
            <h1 className="text-4xl text-center">{title} <span className={`${colorTitle} italic`}>{titleEmphasis}</span></h1>
            <h2 className="text-2xl text-center mt-3">{subTitle}</h2>
        </div>
    )
}
export const TitleForProfessionalForms = ({ title, titleEmphasis, colorTitle, subTitle }) => {
    return (
        <div className="m-auto mr-24">
            <h1 className="text-4xl text-left mt-4">{title} <span className={`${colorTitle} italic`}>{titleEmphasis}</span></h1>
            <h2 className="text-xl text-left mt-3">{subTitle}</h2>
        </div>
    )
}


