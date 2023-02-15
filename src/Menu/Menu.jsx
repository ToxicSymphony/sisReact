import { Link } from "react-router-dom";
import { useState } from "react";



export function Menu() {
    //Gancho para abrir y cerrar el menu lateral
  let [open, setOpen] = useState(true);
  //array de objetos para las opciones del menu lateral
  const MENUOPTIONS = [
    { title: "Dashboard", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Chart_fill.png?alt=media&token=fcfe531b-b5dd-4efd-8d80-d54fb68e3b63" },
    { title: "Inbox", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Chat.png?alt=media&token=12125864-bada-4864-bf91-e6519e8b3674" },
    { title: "Accounts", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/User.png?alt=media&token=2afb685f-76e0-49a8-828c-8c72f33dafef", gap: true },
    { title: "Schedule ", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Calendar.png?alt=media&token=c39f0de0-0ad5-40d4-bebd-a3eacd8f0452" },
    { title: "Search", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Search.png?alt=media&token=f4c17375-44cb-42fb-8ebb-c7a1fb04c2d3" },
    { title: "Analytics", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Chart.png?alt=media&token=21b791a7-dccf-4aeb-b379-044e76dd021e" },
    { title: "Files ", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Folder.png?alt=media&token=71567462-e162-409e-ba75-71f312c121af", gap: true },
    { title: "Setting", src: "https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/Setting.png?alt=media&token=1b9ae7ba-973a-4639-b6cd-3a441a7fb004" },
  ];

  return (
    <>
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-blue-900 relative`}
      >
        <img src="https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/control.png?alt=media&token=30256de8-2479-4178-a4e6-61546bbf59c4"
          className={`absolute cursor-pointer rounded-full text-black text-3xl font-bold -right-3 top-9 w-7 border-2 border-blue-400  bg-blue-200 ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/sisproyecto-436b9.appspot.com/o/logo.png?alt=media&token=a4e58752-eda6-42da-8663-c796dff3d5df" alt="logo" className={`cursor-pointer duration-500 text-white ${open && "rotate-[360deg]"}`}/>
          <Link  className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}     to="/home">Centro de informacion</Link>
        </div>
        <ul>
        {MENUOPTIONS.map((option, index) => (
                <li key={index} className={`text-sm text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-full ${option.gap ? "mt-9" : "mt-2"}`}>
                    <img src={`${option.src}`} />
                    <Link className={`${!open && `hidden`} origin-left duration-200`}>{option.title}</Link>
                </li>
            ))}
        </ul>
      </div>
      </div>
    </>
  );
}
