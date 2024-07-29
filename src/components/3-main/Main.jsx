import { useState } from "react";
import "./main.css";

import { AnimatePresence, motion } from "framer-motion";
import { myProjects } from "./myProjects";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

// import  './main.css';
// const Main = () => {
//   return (
//     <main className='flex'>
//       <section className='flex left-section'>
//         <button className='active'>all projects</button>
//         <button>Html & CSS</button>
//         <button>Javascript</button>
//         <button>React & MUI</button>

//       </section>

//       <section className="flex  right-section">

//       {["aa" , "bb" , "cc" ,1 ,7].map((item)=>{
//         return(
//           <article key={item} className='card'>
//           <img width={200} src="./1.jpg" alt="" />
//           <div style={{width:"200px"}} className='box'>
//             <h1 className='title'>VFX</h1>
//             <p className='sub-title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
//             <div className='flex icons'>

//               <div style={{gap:"11px"}} className='flex'>
//               <div className='icon-link'></div>
//               <div className='icon-github'></div>
//               </div>

//               <a className='link flex' href="">
//                 more
//                 <span style={{alignSelf:"end"}} className='icon-arrow_forward'></span>
//               </a>

//             </div>

//           </div>

//           </article>
//         )
//       })}

//       </section>

//     </main>
//   );
// }

// export default Main;
