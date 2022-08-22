export const validateNewOrder = {
	isValidAmount: inputAmount => !(inputAmount.toString().includes('e')),
	isValidUniteValue: inputUniteValue => !(inputUniteValue.toString().includes('e')),
	isValidName:  (inputName) => {
		const length = inputName.length
		return (!(length < 5 || length > 100))
	},
	isValidDocument:  (inputDocument, pattern) => {
		return inputDocument.length === pattern.length
	}
}

export default validateNewOrder;