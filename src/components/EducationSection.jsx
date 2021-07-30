import { Section } from "./Section";

export const EducationSection = (props) => {
    return (
        <Section>
            <div className="text-yellow-300 text-2xl pb-4">Education</div>

            <div className="text-xl">
                Physical Therapist, Sinai Rehabilitation Center
            </div>
            <div className="flex">
                <div>Jan 2013 - Aug 2019</div>
                <div className="pl-6 text-gray-400">I. Poughkeepsie</div>
            </div>
            <div>
                <ul
                    className="
                                    list-disc
                                    pl-10
                                    text-sm text-gray-400
                                    py-4
                                ">
                    <li>Graduated at the top of my class.</li>
                </ul>
            </div>
        </Section>
    );
};
