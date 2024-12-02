import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";

interface IconifyIconOnlineProps {
  icon: string;
  style?: any;
}

/**
 * 封装IconifyIconOnline组件
 * @param icon 图标名称，如：icon-park-outline:activity-source
 * @param attrs 其他属性
 * @returns
 * @example <IconifyIconOnline icon="icon-park-outline:activity-source" />
 * @see https://iconify.design/icon-sets/icon-park-outline/
 * @description 用于使用线上图标
 */
const IconifyIconOnline: React.FC<IconifyIconOnlineProps> = ({
  icon,
  ...attrs
}) => {
  const style = {
    ...(attrs.style || {}),
    outline: "none",
  };

  return <IconifyIcon icon={icon} style={style} {...attrs} />;
};

export default IconifyIconOnline;
