
import DOMPurify from 'dompurify';

export const ContentFrame = ({ data }) => {
    console.log(data);

    const createMarkup = (html) => {
        return { __html: DOMPurify.sanitize(html) };
    };

    return (
        <div className="bg-slate-300 rounded-lg p-2 m-5 mr-3 border-4 border-gray-800 hTopicContainer" >
            <div className="text-2xl">
                {data.content.map((item, i) => (
                    <div key={i} dangerouslySetInnerHTML={createMarkup(item.body)} />
                ))}
            </div>
        </div>
    );
};
