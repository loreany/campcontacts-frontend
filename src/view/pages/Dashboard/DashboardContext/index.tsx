import { ChangeEvent, createContext, useCallback, useState } from 'react';
import formatPhone from '../../../../app/utils/formatPhone';

interface DashboardContextValue {
  isPasswordModalOpen: boolean;
  isNewContactsModalOpen: boolean;
  showSocials: boolean;
  phone: string;
  checkedLocationBox: boolean;
  openNewContactsModal(): void;
  closeNewContactsModal(): void;
  handleOpenPasswordModal(): void;
  handleClosedPasswordModal(): void;
  handleShowSocials(): void;
  handlePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  handleResetPhone(): void;
  handleResetShowSocials(): void;
  handleLocationCheckboxChange(): void;
  handleResetLocationCheckbox(): void;
}
[];

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isNewContactsModalOpen, setIsNewContactsModalOpen] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [checkedLocationBox, setCheckedLocationBox] = useState(false);
  const [phone, setPhone] = useState('');

  const handleOpenPasswordModal = useCallback(() => {
    setIsPasswordModalOpen(true);
  }, []);

  const handleClosedPasswordModal = useCallback(() => {
    setIsPasswordModalOpen(false);
  }, []);

  const openNewContactsModal = useCallback(() => {
    setIsNewContactsModalOpen(true);
  }, []);

  const closeNewContactsModal = useCallback(() => {
    handleResetLocationCheckbox();
    setIsNewContactsModalOpen(false);
  }, []);

  function handleShowSocials() {
    return setShowSocials((prevState) => !prevState);
  }

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  function handleResetPhone() {
    return setPhone('');
  }

  function handleResetShowSocials() {
    return setShowSocials(false);
  }

  function handleLocationCheckboxChange() {
    return setCheckedLocationBox((prevState) => !prevState);
  }

  function handleResetLocationCheckbox() {
    return setCheckedLocationBox(false);
  }

  return (
    <DashboardContext.Provider
      value={{
        isPasswordModalOpen,
        isNewContactsModalOpen,
        openNewContactsModal,
        closeNewContactsModal,
        handleOpenPasswordModal,
        handleClosedPasswordModal,
        showSocials,
        handleShowSocials,
        phone,
        handlePhone,
        handleResetPhone,
        handleResetShowSocials,
        checkedLocationBox,
        handleLocationCheckboxChange,
        handleResetLocationCheckbox,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
