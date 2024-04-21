import {FC, useState } from "react";


import { AnimatePresence, motion as m } from "framer-motion";

interface FaqItemProps {
    question: {question: string; answer: string};
}

const FaqItem: FC<FaqItemProps> =({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return(
        <>
        <li className="text-primary">
            <div className="flex justify-between items-center">
                <p className="font-semibold hover:text-[#a823e9] duration-150 cursor-pointer">
                    {
                        question.question
                    }
                </p>
                <button onClick={()=>{setShowAnswer(!showAnswer)}}><img src={ showAnswer ? '../assets/images/icon-minus.svg' : '../assets/images/icon-plus.svg' } alt=''/></button>
            </div>
            {
                showAnswer && <AnimatePresence>
                    <m.div
                    key="question"
                    initial={{y: "-100%", opacity:0, height:0}}
                    animate={{
                        y:0,
                        opacity: 1,
                        height: "auto",
                        transition: {duration: 0.5},
                    }}
                    exit={{
                        y:"-100%",
                        opacity: 0,
                        height: 0,

                    }}
                    className="my-4 text-secondary">
                        {question.answer}
                    </m.div>
                </AnimatePresence>
            }
            </li></>
    )
}

export default FaqItem;