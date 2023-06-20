import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import CustomIcon from 'components/CustomIcon';

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  title = 'Modal Title',
}) => {
  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog as={'div'} className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter  firefox:bg-opacity-90" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#141C2F] p-6 text-left align-middle shadow-xl transition-all">
                <CustomIcon
                  icon={IoClose}
                  onClick={onClose}
                  size={20}
                  className="absolute top-6 right-4 cursor-pointer text-slate-500/90"
                />

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-slate-600 dark:text-slate-300">
                  {title}
                </Dialog.Title>

                {children && <div className="mt-2">{children}</div>}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CustomModal;
