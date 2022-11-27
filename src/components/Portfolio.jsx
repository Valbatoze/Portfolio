import React from "react";
import portfolio from "../data/portfolio";
import Porfolioitem from "./PorfolioItem";

function Porfolio(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {portfolio.map(project => (
                    <Porfolioitem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                    />
                 ))}
            </div>
        </div>
    )
}
export default Porfolio;