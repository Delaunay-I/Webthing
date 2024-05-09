import { notificationInterface, notifKind } from "./constants";
import Image from "next/image";

interface notifProps {
  notif: notificationInterface;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const Notification: React.FC<notifProps> = ({ notif, onClick }) => {
  return (
    <div
      className={`flex items-start rounded-lg p-4 text-[#5e6778] ${notif.isRead ? null : "bg-[#f7fafd]"}`}
      onClick={onClick}
    >
      <Image
        src={notif.profilePic}
        width={50}
        height={50}
        alt="profile pic"
        className="mr-4"
      />
      <div>
        <p>
          <span className="cursor-pointer font-bold text-[#1c202b] hover:text-[#0a317b]">
            {notif.author}{" "}
          </span>
          {notif.type === notifKind.Reaction ? (
            <span>
              reacted to your recent post{" "}
              <span className="cursor-pointer font-bold hover:text-[#0a317b]">
                {notif.post}
              </span>
            </span>
          ) : notif.type === notifKind.Follow ? (
            <span>followed you</span>
          ) : notif.type === notifKind.Join || notifKind.Left ? (
            <span>
              {notif.type} your group{" "}
              <span className="cursor-pointer font-bold hover:text-[#0a317b]">
                {notif.group}
              </span>
            </span>
          ) : notif.type === notifKind.Message ? (
            <span>sent you a private message</span>
          ) : (
            <span>commented on your picture</span>
          )}
          {notif.isRead ? null : (
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#f65351]"></span>
          )}
        </p>
        <p className="text-[#939dae]">{notif.timestamp}</p>

        {notif.type === notifKind.Message ? (
          <p className="mt-2 cursor-pointer rounded-md border p-4 hover:bg-[#e5effa]">
            {notif.message}
          </p>
        ) : null}
      </div>
      {notif.pic ? (
        <div className="bg-yello-300 flex-1 shrink-0 flex justify-end">

          <Image
            src={notif.pic}
            width={50}
            height={50}
            alt="profile pic"
            className="cursor-pointer p-[2px] rounded-xl hover:bg-[#e5effa] min-w-[50px]"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
