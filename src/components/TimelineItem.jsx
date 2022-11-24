import React from "react";

function TimelineItem({year, title, details}){
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-yellow-500">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full mt-1.5 -left-1.5 border border-yellow-500"/>
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-yellow bg-yellow-500 dark:text-stone-900 rounded-md">{year}</span>
                        <h3 className="text-lg font-semiboold text-stone-900 dark:text-white"> {title}</h3>
                    </p>
                    <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-300">{details}</p>
            </li>
        </ol>
    )
}

export default TimelineItem;