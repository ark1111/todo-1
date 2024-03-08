import { useState } from "react";

const list = [
  {
    id: 1,
    day: "Monday",
    date: 5,
  },
  {
    id: 2,
    day: "Tuesday",
    date: 6,
  },
  {
    id: 3,
    day: "Wednesday",
    date: 7,
  },
  {
    id: 4,
    day: "Thursday",
    date: 8,
  },
  {
    id: 5,
    day: "Friday",
    date: 9,
  },
  {
    id: 6,
    day: "Saturday",
    date: 10,
  },
  {
    id: 7,
    day: "sunday",
    date: 11,
  },
];

const Days = () => {
  const [activeDay, setActiveDay] = useState(1);

  const changeDay = (id: number) => {
    setActiveDay(id);
  };
  return (
    <div className="w-[calc(100%-8px)] flex items-center gap-x-1 h-10  mt-4 absolute overflow-x-auto pr-2">
      <div className="h-full aspect-square rounded-full border border-primary-main flex items-center justify-center"></div>
      {list.map((item) => (
        <div
          key={item.id}
          className={`h-full flex items-center px-4 shrink-0 rounded-full border ${
            item.id === activeDay
              ? "bg-primary-main border-primary-main text-text-primary"
              : " border-divider-main text-divider-main"
          }`}
          onClick={() => changeDay(item.id)}
        >
          {item.day} {item.date < 10 ? "0" + item.date : item.date}
        </div>
      ))}
    </div>
  );
};

export default Days;
