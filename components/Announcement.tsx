interface Props {
    text: string;
}

const Announcement = ({ text }: Props) => {
    if (!text || text.length <= 0) return (<div />)

    return (
        <div className="w-full bg-primary text-white font-semibold px-6 py-2 text-center tracking-wide">
            {text}
        </div>
    );
};

export default Announcement;
