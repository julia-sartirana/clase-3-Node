const getUsers = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada GET USERS',
	})
}

const getUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada GET USER',
	})
}

const postUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada POST USER',
	})
}

const deleteUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada DELETE USER',
	})
}

const putUser = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada PUT USER',
	})
}

module.exports = { getUser, getUsers, postUser, deleteUser, putUser }