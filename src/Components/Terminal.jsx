import { useEffect, useRef, useState } from "react";
import ObserverProvider from "./ObserverProvider";


export default function Terminal() {

    const banner = [
        <div className="whitespace-pre font-monospace text-lime-200">
{`
██████╗ ██╗███╗   ██╗ █████╗ ██████╗ ██╗   ██╗    ███╗   ███╗██╗███████╗███████╗██╗████████╗███████╗
██╔══██╗██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝    ████╗ ████║██║██╔════╝██╔════╝██║╚══██╔══╝██╔════╝
██████╔╝██║██╔██╗ ██║███████║██████╔╝ ╚████╔╝     ██╔████╔██║██║███████╗█████╗  ██║   ██║   ███████╗
██╔══██╗██║██║╚██╗██║██╔══██║██╔══██╗  ╚██╔╝      ██║╚██╔╝██║██║╚════██║██╔══╝  ██║   ██║   ╚════██║
██████╔╝██║██║ ╚████║██║  ██║██║  ██║   ██║       ██║ ╚═╝ ██║██║███████║██║     ██║   ██║   ███████║
╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝     ╚═╝╚═╝╚══════╝╚═╝     ╚═╝   ╚═╝   ╚══════╝`}
        </div>,
        <div>Type 'help' to see a list of available commands.</div>
    ];
  
    const [cmd, setcmd] = useState("");
    const lastpresstime = useRef(0);
    const tapcount = useRef(1);
    const tapdelay = 300; 
    const [showOptions, setShowOptions] = useState(false);
    const [promptHistory, setPromptHistory] = useState([]); // stores only commands
    const [index, setIndex] = useState(-1); // index for arrow navigation
    const Availablecmd = ['help', 'date', 'clear', 'social', 'banner', 'echo', 'cat'];
    const command = cmd.trim().toLowerCase();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const bottomRef = useRef(null);
    const [history, sethistory] = useState([{ type: 'prompt', text: 'banner' }, { type: 'output', text: banner }]);
    
    // useEffect(() => {
    //     // Scroll to the bottom of the terminal when new history is added
    //     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }), [history];


    const help = [
        'Available commands:',
        'date      - show current date and time',
        'social    - View our social media links',
        'banner    - Display the welcome banner',
        'cat       - Display a file',
        'clear     - Clear terminal',
        'help      - Show this help message',
    ];

    const cat = [
        {   
            name: 'Padmesh',
            role: 'Frontend Developer',
            GI: 'https://github.com/PadmeshSs',
            LI: 'https://www.linkedin.com/in/padmesh-s-1524a8283/',
        },
        {
            name: 'Goushal',
            role: 'Backend Developer',
            GI: 'https://github.com/PadmeshSs',
            LI: 'https://www.linkedin.com/in/goushal/',
        },  
    ];
   
    const social = [
        <span key="github">GitHub:   <a href="https://github.com/your-username" target="_blank" className="text-yellow-400! underline">sample link</a></span>,
        <span key="twitter">Twitter:  <a href="https://twitter.com/your-handle" target="_blank" className="text-yellow-400! underline">sample link</a></span>,
        <span key="linkedin">LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-yellow-400! underline">sample link</a></span>
    ];

    const handlekeydown = (e) => {

        // tab behavior
        if (e.key === 'Tab') {
            e.preventDefault(); 
            
            if (!command) return;
            const basecmd = command.split(' ')[0];
            const match = Availablecmd.find(cmd => cmd.startsWith(basecmd));
            console.log(match, command);
            
            if (match) {
                // Handle double-tap for autocomplete
                const now = Date.now();
                if(now - lastpresstime.current < tapdelay || basecmd === match) {
                    tapcount.current += 1;
                }
                else {
                    tapcount.current = 1;
                    setcmd(match);
                }
                console.log(tapcount);
                
                lastpresstime.current = now;
            }

            const memlength = cat.length;
            // If double-tap, show all matching commands
            if (tapcount.current === 2 && match === 'cat') {
                    setShowOptions(true);                // show options
                    setSelectedIndex(0);                 // start at first element
                    setcmd(`cat ${cat[0].name.toLowerCase()}`);  // fill input
                } 
                else if (tapcount.current > 2 && match === 'cat') {
                    const next = (selectedIndex + 1) % cat.length;
                    setSelectedIndex(next);
                    setcmd(`cat ${cat[next].name.toLowerCase()}`);
                }    
        }


        // ArrowUp navigation
        if (e.key === 'ArrowUp') {
            if (promptHistory.length === 0) return;

            const newIndex = Math.min(index + 1, promptHistory.length - 1);
            const previousCmd = promptHistory[promptHistory.length - 1 - newIndex];

            setIndex(newIndex);         // ✅ update index
            setcmd(previousCmd);        // ✅ update input field
        }

        // ArrowDown navigation
        else if (e.key === 'ArrowDown') {
            if (promptHistory.length === 0) return;

            const newIndex = Math.max(index - 1, -1);
            const nextCmd = newIndex === -1 ? '' : promptHistory[promptHistory.length - 1 - newIndex];

            setIndex(newIndex);         // ✅ update index
            setcmd(nextCmd);            // ✅ update input field
        }

        // Enter key logic
        else if (e.key === 'Enter') {
            if (!command) return;
            tapcount.current = 1; // Reset tap count on Enter
            setShowOptions(false);
            if (command === 'clear') {
            sethistory([]);
            setPromptHistory([]);
            setcmd('');
            setIndex(-1);
            return;
            }

            const response = ProcessCommand(command);

            const newHistory = [
            { type: 'prompt', text: command },
            { type: 'output', text: response }
            ];

            sethistory((prev) => [...prev, ...newHistory]);
            setPromptHistory((prev) => [...prev, command]);
            console.log(history);
            
            setcmd('');
            setIndex(-1); // Reset index after new entry
        }
    };



    const ProcessCommand = (command)=>{
        switch(command.split(' ')[0]){
            case 'help':
                return help;

            case 'date':
                const now = new Date();
                const formatted = now.toLocaleString(); // Example: "11:03:21 PM"
                return [`Current time: ${formatted}`];

            case 'social':
                return social;

            case 'banner':
                return banner; 
                
            case 'cat':
                console.log(cmd);
                if (cmd === 'cat') {                    
                    return [`Usage: cat <filename> Example: cat Padmesh`];
                } else {
                    const filename = cmd.split(' ')[1];
                    console.log(filename);
                    
                    const name = cat.find(f=> f.name.toLowerCase() === filename);
                    if(name){
                        return [
                            `Name: ${name.name}`,
                            `Role: ${name.role}`,
                            `GitHub: ${name.GI}`,
                            `LinkedIn: ${name.LI}`,
                        ];
                    }
                    else{
                        return [`cat: ${filename}: No such file or directory`];
                    }
                }

            default:
                return [`${cmd}: Unknown Command!. Type 'help' for a list of commands.`];
        }
    }
  
  
    return (
        <div className="layout  sticky top-0 left-0  overflow-hidden bg-[#0F1019] ">
            <div className="Terminal-cont container md:min-h-screen pt-5 pb-5 flex flex-col">
                <ObserverProvider>
                    <div className="Terminal-header text-white text-[clamp(35px,8vw,50px)] md:text-[50px] font-semibold relative overflow-y-clip">
                        <div className="text intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2000ms] intersect-once">Meet <span className="text-[#E0F61E]">Us</span></div>
                        <div className="line mt-1 h-[5px] w-0 intersect:w-[10%] transition-all duration-500 intersect:motion-duration-[500ms] intersect:motion-ease-in-cubic intersect-once bg-[#E0F61E]"></div>
                    </div>
                
                    <div className="terminal mt-5 font-display intersect:motion-translate-y-in-[200%] intersect:motion-opacity-in-[0%] intersect:motion-duration-[2500ms] intersect-once">
                        <div className="terminal-head w-full h-[35px] bg-[#343434] rounded-t-lg flex pl-4 items-center gap-[10px]">
                            <div className="red bg-[#FB7268] w-[10px] h-[10px] rounded-full"></div>
                            <div className="yellow bg-[#FFCE56] w-[10px] h-[10px] rounded-full"></div>
                            <div className="green bg-[#66D458] w-[10px] h-[10px] rounded-full"></div>
                        </div>
                        <div className="terminal-body text-white! w-full h-[447px] bg-[#1C1C1C] rounded-b-lg p-4 border-2 border-[#7D6433] overflow-auto">
    
                            <div className="output">
                                {history.map((item, idx) => (
                                <div key={idx} className="flex flex-wrap whitespace-pre">
                                    {item.type === 'prompt' ? (
                                    <>
                                    <div className="font-semibold">
                                        <span className="text-yellow-200">Guest</span>
                                        <span className="text-white">@</span>
                                        <span className="text-lime-200">BinaryMisfits.com</span>
                                        <span className="text-white">:$ ~ </span>
                                    </div>
                                    {item.text}
                                    </>
                                    ) : (
                                        <div className="text-white whitespace-pre">
                                            {item.text.map((line, lineIdx) => (
                                                <div key={lineIdx}>{line}</div>
                                        ))}
                                        </div>
                                    )}
                                </div>
                                ))}
                            </div>
                            <div className="input mt-1">
                                <label htmlFor="cmd" className="whitespace-pre font-semibold"><span className="text-yellow-200">Guest</span>@<span className="text-lime-200">BinaryMisfits.com</span>:$ ~ </label>
                                <input type="text" id="cmd" className="focus:outline-0 focus:border-0" value={cmd} onChange={(e)=>{setcmd(e.target.value)}} 
                                onKeyDown={handlekeydown}/> <br />
                            </div>
                            <div className="options-display">
                                {showOptions && (
                                    <div className="options">
                                        <div className=" font-semibold">Available Members:</div>
                                        <ul className="list-disc p-0">
                                            {cat.map((member, index) => (
                                                <li key={index} className={`text-white d-inline mr-1 p-1 ${index === selectedIndex ? 'bg-yellow-400 text-black font-bold' : ''}`}>{member.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* <div ref={bottomRef} /> */}
                        </div>
                        </div>
                </ObserverProvider>    
            </div>
        </div>

  );
}