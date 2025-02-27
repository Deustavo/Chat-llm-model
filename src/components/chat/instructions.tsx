import { IconType } from "react-icons";
import { FiAlertTriangle, FiSun, FiZap } from "react-icons/fi";

type Introdution = {
    icon: IconType,
    name: "Examples" | "Capabilities" | "Limitations",
    list: string[]
};

export interface IInstructionsProps {
    onClick: (text: string) => void
};

export default function Instructions({ onClick }: IInstructionsProps) {
    const introdution: Introdution[] = [
        {
            icon: FiSun,
            name: "Examples",
            list: [
                "Explain quantum computing in simple terms",
                "Got any creative ideas for a 10 year old's birthday?",
                "How do i make an HTTP request in JavaScript?"
            ]
        },
        {
            icon: FiZap,
            name: "Capabilities",
            list: [
                "Remembers what user said earlier in the conversation",
                "Allows user to provide follow-up corrections",
                "Trained to decline inappropriate requests"
            ]
        },
        {
            icon: FiAlertTriangle,
            name: "Limitations",
            list: [
                "May occasionally generate incorrect information",
                "May occasionally produce harmful instructions or biased content",
                "Limited knowledge of world and events after 2021"
            ]
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full overflow-auto">
            <h1 className="text-lg my-8">
                ChatGPT
            </h1>
            <div className="flex flex-col md:flex-row">
                {introdution.map(({ icon, list, name }, key) => {
                    const handleClick = (text: string) => {
                        if (name == 'Examples') {
                            return () => onClick(text);
                        };
                        return undefined;
                    };

                    return (
                        <div
                            key={key}
                            className="flex flex-col items-center"
                        >
                            <div className="text-2xl">
                                {/* <Icon as={icon} /> */}
                                <FiSun />
                            </div>
                            <h2 className="text-sm font-semibold">{name}</h2>
                            {list.map((text, key) => (
                                <button
                                    key={key}
                                    className="max-w-xs p-4 my-2 bg-blue-500 text-white rounded"
                                    onClick={handleClick(text)}
                                >
                                    <span className="block overflow-hidden whitespace-normal">{text}</span>
                                </button>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};