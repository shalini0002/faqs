import { FC, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
interface FaqItemProps {
    question: {
        question: string;
        answer: string;
    };
}

const FaqItem: FC<FaqItemProps> = ({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleToggle = () => {
        setShowAnswer((prev) => !prev);
    };

    return (
        <li className="text-primary">
            <div className="flex justify-between items-center">
                <p
                    className="font-semibold hover:text-[#a823e9] duration-150 cursor-pointer"
                    onClick={handleToggle}
                >
                    {question.question}
                </p>
                <button onClick={handleToggle}>
                    <img
                        src={showAnswer ? minusIcon : plusIcon }
                        alt={showAnswer ? "Collapse" : "Expand"}
                    />
                </button>
            </div>
            <AnimatePresence>
                {showAnswer && (
                    <m.div
                        key={question.question}
                        initial={{ y: "-100%", opacity: 0, height: 0 }}
                        animate={{ y: 0, opacity: 1, height: "auto" }}
                        exit={{ y: "-100%", opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="my-4 text-secondary"
                    >
                        {question.answer}
                    </m.div>
                )}
            </AnimatePresence>
        </li>
    );
};

export default FaqItem;
