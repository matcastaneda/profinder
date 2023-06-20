import { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import { useWindowSize } from 'hooks/useWindowSize';
import CustomIcon from 'components/CustomIcon';
import PreferencesModal from 'components/PreferencesModal';
import ThemeSelect from 'components/Preferences/ThemeSelect';
import LanguageSelect from 'components/Preferences/LanguageSelect';

const ViewPrefences = () => {
  const projectUrl = 'https://github.com/matcastaneda/profinder';
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex items-center ml-auto space-x-4">
        <div className="flex items-center pr-5 border-r border-slate-300 mr-2 dark:border-slate-700">
          <CustomIcon
            icon={IoLogoGithub}
            anchorLink
            anchorLinkHref={projectUrl}
          />
        </div>

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
