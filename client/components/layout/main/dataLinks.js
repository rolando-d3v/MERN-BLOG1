import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";


export const links = [
  { id: 1, url: "/gif", text: "home", icon: <FaHome /> },
  { id: 2, url: "/navigation1", text: "team", icon: <FaUserFriends /> },
  { id: 3, url: "/navigation2", text: "projects", icon: <FaFolderOpen /> },
  { id: 4, url: "/gif", text: "calendar", icon: <FaCalendarAlt /> },
  { id: 5, url: "/documents", text: "documents", icon: <FaWpforms /> },
];

export const social = [
  { id: 1, name: 'Facebook', url: "https://www.twitter.com", icon: <FaFacebook /> },
  { id: 2, name: 'Twiter', url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, name: 'Likin', url: "https://www.twitter.com", icon: <FaLinkedin /> },
  { id: 4, name: 'Befer', url: "https://www.twitter.com", icon: <FaBehance /> },
  { id: 5, name: 'Diamante', url: "https://www.twitter.com", icon: <FaSketch /> },
];
