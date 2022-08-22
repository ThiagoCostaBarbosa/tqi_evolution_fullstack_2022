// eslint-disable-next-line

export const validateNewPurchase = {
	isValidAmount: inputAmount => !(inputAmount.toString().includes('e')),
	isValidUniteValue: inputUniteValue => !(inputUniteValue.toString().includes('e'))
}

export default validateNewPurchase;