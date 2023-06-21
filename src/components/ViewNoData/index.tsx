export type DataType = 'repos' | 'gists' | 'followers' | 'following';

export interface NoDataProps {
  dataType: DataType;
}

type TextsProps = {
  [key in DataType]: {
    description: string;
  };
};

const ViewNoData = ({ dataType }: NoDataProps) => {
  const texts: TextsProps = {
    repos: {
      description:
        'No repositories yet. When you create a repository, it will appear here.',
    },
    gists: {
      description: 'No gists yet. When you create a gist, it will appear here.',
    },
    followers: {
      description:
        'No followers yet. When someone follows you, you’ll see them here.',
    },
    following: {
      description:
        'No following yet. When you follow someone, you’ll see them here.',
    },
  };
  const { description } = texts[dataType];

  return (
    <section className="flex flex-col items-start justify-center mt-5 space-y-2">
      <small className="opacity-50">{description}</small>
    </section>
  );
};

export default ViewNoData;
