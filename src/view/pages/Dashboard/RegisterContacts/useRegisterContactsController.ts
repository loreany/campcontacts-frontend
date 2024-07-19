import { useDashboard } from '../DashboardContext/useDashboard';

export function useRegisterContactsController() {
  const { openNewContactsModal, isNewContactsModalOpen } = useDashboard();
  return {
    openNewContactsModal,
    isNewContactsModalOpen,
  };
}
