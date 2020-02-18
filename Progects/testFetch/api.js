export const api = (url = `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=036cbd4c44034cfcbb1a7a96dcb760ba`) => {
	return new Promise((resolve) => {
		resolve(
				fetch(url)
				.then(e => e.json())
				.then(({ articles }) => (
								articles
						)
				))
	})
}
