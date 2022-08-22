
export const validateNewBook = {

	isValidTitle: (inputTitle) => {
		const length = inputTitle.length
		return !(length < 5 || length > 250)
	},
	isValidAuthor: (inputAuthor) => {
		const length = inputAuthor.length
		return (!(length < 5 || length > 100))
	},
	isValidImage: (inputUrl) => {
		// eslint-disable-next-line
		let regex = /(http[s]?:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(png|jpg|jpeg|webp)($|\?.*$)/i
		return !!(inputUrl.match (regex));
	},
	isValidPublisher: (inputPublisher) => {
		const length = inputPublisher.length
		return !(length < 5 || length > 100)
	},
	isValidPublisherDate: (inputDate) => {
		const currentYear = (new Date()).getFullYear()
		const date = Number(inputDate)
		return !(String(date).length !== 4 || date > currentYear);
	}
}

export default validateNewBook;
