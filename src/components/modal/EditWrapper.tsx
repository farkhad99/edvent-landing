'use client';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Pencil } from 'lucide-react';
import type { ReactNode } from 'react';
import React, { useMemo, useState } from 'react';

import type { FormConstructor } from './EditForm';
import EditForm from './EditForm';

// Type for the modal state that will be managed globally
type ModalState = {
  isOpen: boolean;
  title?: string;
  content?: ReactNode;
  forms?: FormConstructor[];
};

// Create a global modal state using React context
const ModalContext = React.createContext<{
  modalState: ModalState;
  setModalState: (state: ModalState) => void;
}>({
  modalState: { isOpen: false, forms: [] },
  setModalState: () => {}
});

// Modal provider component
export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    forms: []
  });

  // Use `useMemo` to prevent creating a new object on every render
  const contextValue = useMemo(
    () => ({ modalState, setModalState }),
    [modalState, setModalState]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Dialog open={modalState.isOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>{modalState.title}</DialogTitle>
          {modalState.forms ? (
            <EditForm
              constructors={modalState.forms}
              onClose={() => setModalState({ isOpen: false })}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
}

// Hook to use the modal
export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

// Props type for the EditWrapper component
type EditWrapperProps = {
  children: ReactNode;
  modalTitle?: string;
  forms: FormConstructor[];
  modalContent?: ReactNode;
  className?: string;
  isVisible?: boolean;
  centered?: boolean;
};

// Main EditWrapper component
export default function EditWrapper({
  children,
  modalTitle = 'Edit Content',
  modalContent,
  className = '',
  isVisible = false,
  forms,
  centered = false
}: EditWrapperProps) {
  const { setModalState } = useModal();

  const handleEditClick = () => {
    setModalState({
      isOpen: true,
      title: modalTitle,
      content: modalContent,
      forms
    });
  };

  if (!isVisible) return children;

  return (
    <div className={`group relative ${className}`}>
      {children}
      <button
        type="button"
        onClick={handleEditClick}
        className={`absolute z-[100] rounded-full bg-gray-500 p-2 shadow-md hover:bg-gray-50 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${centered ? 'left-1/2 top-1/2 size-8' : 'right-1 top-0'}`}
        aria-label="Edit"
      >
        <Pencil className="size-4 text-gray-600" />
      </button>
    </div>
  );
}
