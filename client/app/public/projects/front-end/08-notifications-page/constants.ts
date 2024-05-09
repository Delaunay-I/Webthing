export enum notifKind {
  Reaction = "reaction",
  Comment = "comment",
  Message = "message",
  Follow = "follow",
  Join = "joined",
  Left = "left",
}

export interface notificationInterface {
  id: number;
  author: string;
  profilePic: string;
  type: notifKind;
  isRead: boolean;
  timestamp: string;
  post?: string;
  message?: string;
  pic?: string;
  group?: string;
}

export const notifications: notificationInterface[] = [
  {
    id: 1,
    author: "Mark Webber",
    profilePic: "/frontend-projects/08/avatar-mark-webber.webp",
    type: notifKind.Reaction,
    isRead: false,
    timestamp: "1m ago",
    post: "My first tournament today!",
  },
  {
    id: 2,
    author: "Angela Gray",
    profilePic: "/frontend-projects/08/avatar-angela-gray.webp",
    type: notifKind.Follow,
    isRead: false,
    timestamp: "5m ago",
  },
  {
    id: 3,
    author: "Jacob Thompson",
    profilePic: "/frontend-projects/08/avatar-jacob-thompson.webp",
    type: notifKind.Join,
    isRead: false,
    timestamp: "1 day ago",
    group: "Chess Club",
  },
  {
    id: 4,
    author: "Rizky Hasanuddin",
    profilePic: "/frontend-projects/08/avatar-rizky-hasanuddin.webp",
    type: notifKind.Message,
    isRead: true,
    timestamp: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    author: "Kimberly Smith",
    profilePic: "/frontend-projects/08/avatar-kimberly-smith.webp",
    type: notifKind.Comment,
    isRead: true,
    timestamp: "1 week ago",
    pic: "/frontend-projects/08/image-chess.webp",
  },
  {
    id: 6,
    author: "Nathan Peterson",
    profilePic: "/frontend-projects/08/avatar-nathan-peterson.webp",
    type: notifKind.Reaction,
    isRead: true,
    timestamp: "2 weeks ago",
    post: "5 end-game strategies to increase your win rate",
  },
  {
    id: 7,
    author: "Anna Kim",
    profilePic: "/frontend-projects/08/avatar-anna-kim.webp",
    type: notifKind.Left,
    isRead: true,
    timestamp: "2 weeks ago",
    group: "Chess Club",
  },
];
