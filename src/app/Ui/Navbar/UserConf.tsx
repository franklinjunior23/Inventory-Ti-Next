import { IconLogout2 } from "@tabler/icons-react";
import React from "react";

interface Props{
  ActiveMenu :boolean
}
function UserConf({ActiveMenu} : Props) {
 
  return (
    <footer>
      <header className="flex justify-center md:justify-between">
        <section className="md:flex md:gap-3 ">
          <img
            src="/userimg/ImageUserLog.avif"
            className="md:w-12 w-10 h-10 md:h-full rounded-md md:rounded-xl mx-auto block"
            alt=""
          />
          <div className={`md:grid hidden ${ActiveMenu && "md:hidden"}`}>
            <h3 className="text-lg font-semibold">User Login</h3>
            <span className="self-end text-sm">Soporte</span>
          </div>
        </section>
        <div className={`self-center hidden md:block ${ActiveMenu && "md:hidden"}`}>
          <IconLogout2 />
        </div>
      </header>
    </footer>
  );
}

export default UserConf;
