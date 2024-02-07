"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  User,
  Users2,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const SideNavbar = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="border-r relative min-w-[80px] px-3 pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute top-7 right-[-20px] ">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={() => toggleSidebar()}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            icon: User,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Setting",
            icon: Settings,
            variant: "ghost",
            href: "/setting",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
