import React from "react";

type HeaderIconProps = {
  Icon: any;
};

const HeaderIcon = ({ Icon }: HeaderIconProps) => {
  return (
    <div className="flex items-center cursor-pointer md:px-8 py-4 m:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon className="h5 text-center sm:h-7 mx-auto group-hover:text-blue-500" />
    </div>
  );
};

export default HeaderIcon;