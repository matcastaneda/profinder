import ViewLogo from 'components/ViewLogo';
import Search from 'components/Search';
import ViewPrefences from 'components/ViewPreferences';

const ViewHeader = () => {
  return (
    <header className="space-y-10 mx-auto max-w-4xl">
      <section className="flex items-center">
        <ViewLogo />
        <ViewPrefences />
      </section>
      <Search />
    </header>
  );
};

export default ViewHeader;
