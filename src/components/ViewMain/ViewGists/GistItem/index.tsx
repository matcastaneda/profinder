import CustomIcon from 'components/CustomIcon';
import { IoOpenOutline } from 'react-icons/io5';
import { TbCode } from 'react-icons/tb';
import { type Gist } from 'types';

const GistItem = (gist: Gist) => {
  const filesName = Object.keys(gist.files).join(', ');

  return (
    <li>
      <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
        <article className="relative space-y-4 rounded-xl bg-white dark:bg-[#1F2A48] shadow-sm p-4 md:hover:outline-2 md:hover:outline-dashed md:hover:outline-sky-500">
          <div className="flex items-start space-x-2">
            <CustomIcon icon={TbCode} className="w-4 h-4 mt-1" />

            <h4>
              {gist.description ? (
                <>{gist.description}</>
              ) : (
                <p className="opacity-50 italic">No description provided.</p>
              )}
            </h4>
          </div>

          <div className="flex items-center justify-between space-x-2 ml-6">
            <small className="font-medium">{`Files: ${filesName}`}</small>

            <CustomIcon icon={IoOpenOutline} className="w-5 h-5 text-sky-500" />
          </div>
        </article>
      </a>
    </li>
  );
};

export default GistItem;
