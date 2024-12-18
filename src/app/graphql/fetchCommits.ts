import { gql } from "@apollo/client";
import { client } from "./client";

type Props = {
	userName: string;
	fromTime: string;
	toTime: string;
};

export const fetchCommits = async ({
	userName,
	fromTime,
	toTime,
}: Props): Promise<number> => {
	const { data } = await client.query({
		query: gql`
			query ($username: String!, $from: DateTime!, $to: DateTime!) {
				user(login: $username) {
					contributionsCollection(from: $from, to: $to) {
						totalCommitContributions
					}
				}
			}
		`,
		variables: {
			username: userName,
			from: fromTime, // Date型をISO8601形式に変換
			to: toTime, // Date型をISO8601形式に変換
		},
	});
	return data.user.contributionsCollection.totalCommitContributions;
};
