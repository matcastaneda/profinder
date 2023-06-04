import { IoLogoGithub } from 'react-icons/io';
import Theme from 'components/Theme';
import ViewLogo from 'components/ViewLogo';
import Icon from 'components/Icon';
import Search from 'components/Search';

const ViewHeader = () => {
  const ProjectUrl = 'https://github.com/matcastaneda/profinder';

  return (
    <header className="space-y-10 mx-auto max-w-4xl">
      <section className="flex items-center">
        <ViewLogo />

        <div className="flex items-center ml-auto space-x-3">
          <Theme />
          <Icon icon={IoLogoGithub} anchorLink anchorLinkHref={ProjectUrl} />
        </div>
      </section>

      <Search />
    </header>
  );
};

export default ViewHeader;
