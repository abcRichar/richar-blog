import React, { useEffect } from "react";
import { Icon as IconifyIcon, addIcon } from "@iconify/react";

interface IconifyIconOfflineProps {
  icon: any; // Assuming icon can be an object or a string
  style?: any;
}

const IconifyIconOffline: React.FC<IconifyIconOfflineProps> = ({
  icon,
  ...attrs
}) => {
  useEffect(() => {
    if (typeof icon === "object") {
      addIcon(icon.body, icon);
    }
  }, [icon]);

  const style = {
    ...(attrs.style || {}),
    outline: "none",
  };

  return <IconifyIcon icon={icon} style={style} {...attrs} />;
};

export default IconifyIconOffline;
