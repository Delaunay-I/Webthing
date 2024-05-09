import { useState } from "react";
import Notification from "./Notification";
import { notifications } from "./constants";

const Notifications = () => {
  const [notifs, setNotifs] = useState(notifications);

  const setRead = (id: number) => {
    const updatedNotifs = notifs.map((notif) => {
      if (notif.id === id) {
        return { ...notif, isRead: true };
      }
      return notif;
    });

    setNotifs(updatedNotifs);
    // Then, call  backend to update DB
  };

  const setAllRead = () => {
    const updatedNotifs = notifs.map((notif) => {
      return { ...notif, isRead: true };
    });

    setNotifs(updatedNotifs);
    // Then, call  backend to update DB
  };

  const unreadCount = notifs.reduce((count, notif) => notif.isRead ? count : count + 1, 0);

  return (
    <div className="relative h-fit w-full bg-white p-8 font-[roboto] text-black md:h-fit md:w-[680px] md:rounded-xl">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Notifications{" "}
          <span className="ml-1 rounded-md bg-[#0a317b] px-2 py-1 align-middle text-sm text-white">
            {unreadCount}
          </span>
        </h1>
        <p
          className="cursor-pointer text-[#5e6778] hover:text-[#0a317b]"
          onClick={() => setAllRead()}
        >
          Mark all as read
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {notifs.map((notif, index) => (
          <Notification
            key={index}
            notif={notif}
            onClick={() => setRead(notif.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
