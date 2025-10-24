import React from 'react';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200/80 dark:bg-black/70 backdrop-blur-sm overflow-hidden">
      <div className="bg-white dark:bg-gray-900 h-[500px] overflow-y-auto custom-scrollbar rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
