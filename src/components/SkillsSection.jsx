import { Section } from "./Section";

export const SkillsSection = (props) => {
    return (
        <Section>
            <div className="text-yellow-300 text-2xl pb-4">skills</div>
            <div className="py-2">
                <div className="font-bold">Patient Education</div>
                <div>
                    <div>● ● ● ● ●</div>
                </div>
            </div>
            <div className="py-2">
                <div className="text-xl">Physical Evaluations</div>
                <div>
                    <div>● ● ● ● ●</div>
                </div>
            </div>
            <div className="py-2">
                <div className="font-bold">Treatment Plans</div>
                <div>
                    <div>● ● ● ● ●</div>
                </div>
            </div>
            <div className="py-2">
                <div className="font-bold">Excellent Communication</div>
                <div>
                    <div>● ● ● ● ●</div>
                </div>
            </div>
        </Section>
    );
};
