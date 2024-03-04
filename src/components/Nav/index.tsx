import { useState } from "react";
import { NavList } from "./constants";

type Props = {};

const Nav = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(2);

  const changeNav=(index:number)=>{
    setActiveIndex(index)
  }
  return (
    <div className="w-full h-[80px] bg-primary-main fixed bottom-0 flex items-center gap-x-2 px-4">
      {NavList.map((item, index) => (
        <div
          key={item.id}
          className={`flex-1 h-12 flex items-center justify-center gap-x-1 rounded-full border border-divider-main ${
            activeIndex === index ? "bg-secondary-one-main" : ""
          }`}
          onClick={()=>changeNav(index)}
        >
          <div
            className={`text-sm  ${
              activeIndex === index ? "text-text-secondary" : "text-text-primary"
            }`}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
