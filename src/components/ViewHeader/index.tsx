import ViewLogo from 'components/ViewLogo';
import Search from 'components/Search';
import ViewPrefences from 'components/ViewPreferences';

const ViewHeader = () => {
  return (
    <header className="space-y-8 mx-auto max-w-5xl">
      <section className="flex items-center">
        <ViewLogo />
        <ViewPrefences />
      </section>
      <Search />
    </header>
  );
};

export default ViewHeader;
