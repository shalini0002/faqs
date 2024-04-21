import questions from "../data/faq";
import FaqItem from "./FaqItem";

const FaqList = () => {
    return(
    <>
<ul className="flex flex-col gap-6">
 {questions.map((question, index) => (
    <FaqItem key={index} question={question} />
 ))}
</ul>
    </>
    )
}
export default FaqList;