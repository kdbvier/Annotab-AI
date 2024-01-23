'use client';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

import SidebarItem from '../sidebar-item';

const WorkspaceSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItemsBottom = [
    {
      value: 'Settings',
      link: '/settings/billing',
      src: '/images/svg/icon/left-side-bar/icon-settings-greypuplewhite-light.svg',
      srcActive:
        '/images/svg/icon/left-side-bar/icon-settings-greypuplewhite-light.svg',
    },
  ];

  return (
    <div
      className={clsx(
        'relative flex h-full flex-col justify-between rounded-r-lg bg-mostly-white',
        !isOpen
          ? 'right-0 w-16 justify-start transition-all duration-300 ease-in'
          : 'left-0 w-64 justify-start transition-all duration-300 ease-out'
      )}
    >
      <div className="flex flex-col gap-y-5 py-12" />
      <div className="flex flex-col justify-end gap-y-5 py-12">
        {menuItemsBottom.map((item) => (
          <SidebarItem key={item.value} item={item} isOpen={isOpen} />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={handleOpen}
          className="flex w-5 items-end justify-center rounded-l-xl rounded-r-sm bg-beacon-gray py-10 text-purple-grey"
        >
          {!isOpen ? (
            <ChevronDoubleRightIcon width={20} height={20} />
          ) : (
            <ChevronDoubleLeftIcon width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  );
};
export default WorkspaceSidebar;
