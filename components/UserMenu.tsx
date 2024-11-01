'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function UserMenu() {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        {session?.user?.image ? (
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src={session.user.image}
            alt=""
          />
        ) : (
          <UserCircleIcon className="h-8 w-8 text-gray-400" />
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2.5 w-32 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut()}
                className={classNames(
                  active ? 'bg-gray-50' : '',
                  'block w-full px-3 py-1 text-sm leading-6 text-gray-900 text-right'
                )}
              >
                تسجيل الخروج
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}