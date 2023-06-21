import { useState } from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';
import { useWindowSize } from 'hooks/useWindowSize';
import CustomIcon from 'components/CustomIcon';
import PreferencesModal from 'components/PreferencesModal';
import ThemeSelect from 'components/Preferences/ThemeSelect';
import LanguageSelect from 'components/Preferences/LanguageSelect';

const ViewPrefences = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex items-center ml-auto space-x-4">
        {width > 768 ? (
          <>
            <ThemeSelect />
            <LanguageSelect />
          </>
        ) : (
          <CustomIcon icon={AiTwotoneSetting} onClick={toggleModal} />
        )}
      </div>

      {width <= 768 ? (
        <PreferencesModal isOpen={isOpen} onClose={toggleModal} />
      ) : null}
    </>
  );
};

export default ViewPrefences;
