import React from 'react';
import CustomModal from 'components/CustomModal';
import IntlMessage from 'components/IntlMessage';
import ThemeSelectModal from './ThemeSelectModal';
import LanguageSelectModal from './LanguageSelectModal';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PreferencesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const title = IntlMessage({ id: 'app.modal.preferences-title' });

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4">
        <small className="leading-3 tracking-tighter">
          {IntlMessage({ id: 'app.modal.preferences-content' })}
        </small>

        <div className="space-y-6">
          <ThemeSelectModal />
          <LanguageSelectModal />
        </div>
      </div>
    </CustomModal>
  );
};

export default PreferencesModal;
