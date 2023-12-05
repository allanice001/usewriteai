import useContent from '../utilities/useContent';

interface Props {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: Props) => {
    return (
        <div className="w-full p-10 rounded-lg border-2 border-slate-200 dark:border-slate-900 text-center cursor-pointer hover:-translate-y-4 duration-200">
            <h3 className="mb-4 font-bold text-xl text-black dark:text-white leading-8">
                {question}
            </h3>
            <p className="text-slate-500 leading-7">{answer}</p>
        </div>
    );
};

const FAQ = () => {
    const questionsContent = useContent('index.faq.questions');

    return (
        <section className="container mx-auto max-w-7xl py-20 px-6" id="faq">
            <div className="max-w-2xl mx-auto mb-12 text-center">
                <p className="uppercase font-bold text-primary pb-6 tracking-wider">
                    {useContent('index.faq.subtitle')}
                </p>
                <h2 className="mb-6 text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white">
                    {useContent('index.faq.title')}
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {questionsContent.map((element: any, index: number) => (
                    <Question key={index} question={element.question} answer={element.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
