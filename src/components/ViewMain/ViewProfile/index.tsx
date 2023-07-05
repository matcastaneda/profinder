import { IoOpenOutline } from 'react-icons/io5';
import { Metrics, type Profile } from 'types';
import ViewMetrics from '../ViewMetrics';
import { formattedDate } from 'utils/formattedDate';

const ViewProfile = (profile: Profile) => {
  const createdAt = formattedDate(profile.created_at);
  const metrics: Metrics = {
    followers: profile?.followers,
    following: profile?.following,
    public_repos: profile?.public_repos,
    public_gists: profile?.public_gists,
  };

  return (
    <section className="realtive w-full lg:max-w-sm space-y-4 lg:sticky lg:top-10 lg:self-start">
      <div className="relative px-3 pt-8 pb-4 bg-white dark:bg-[#1F2A48] rounded-xl shadow-sm text-center">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer noopener"
          className="absolute top-4 right-4">
          <IoOpenOutline className="w-7 h-7 text-sky-500 md:hover:scale-105 transition" />
        </a>

        <img
          src={profile.avatar_url}
          alt="matcastaneda"
          className="w-28 h-28 mx-auto rounded-full outline-dashed outline-2 outline-offset-4 outline-sky-500 mb-5"
        />

        <div className="mb-5">
          <h2 className="text-xl font-bold">{profile.name || profile.login}</h2>
          <h3 className="text-sky-500 font-semibold">{`@${profile.login}`}</h3>
        </div>

        <blockquote className="mb-5">
          {profile.bio ? (
            <p className="text-sm tracking-tight">{profile.bio}</p>
          ) : (
            <p className="text-sm italic tracking-tight opacity-50">
              No bio provided.
            </p>
          )}
        </blockquote>

        <small className="opacity-70 italic">
          &#126; {`Joined ${createdAt}`} &#126;
        </small>
      </div>

      <ViewMetrics {...metrics} />
    </section>
  );
};

export default ViewProfile;
