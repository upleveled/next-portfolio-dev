import 'server-only';
import { RepositoryConnection, RepositoryEdge } from '../generated/graphql';

const getRepos = async (): Promise<RepositoryEdge[]> => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `
				query viewer {
					viewer {
						repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 3) {
										nodes {
											id
											name
										}
									}
								}
							}
						}
					}
				}
			`,
    }),
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: {
    data: {
      viewer: {
        repositories: RepositoryConnection;
      };
    };
  } = await res.json();

  if (!data.data.viewer.repositories.edges) {
    throw new Error('Failed to fetch data');
  }

  if (data.data.viewer.repositories.edges.some((edge) => edge === null)) {
    throw new Error('Failed to fetch data');
  }

  return data.data.viewer.repositories.edges as RepositoryEdge[];
};

export default getRepos;
