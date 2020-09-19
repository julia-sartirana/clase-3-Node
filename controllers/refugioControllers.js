
const getRefugios = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada GET REFUGIOS',
	})
}

const getRefugio = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada GET REFUGIO',
	})
}

const postRefugio = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada POST REFUGIO',
	})
}

const deleteRefugio = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada DELETE REFUGIO',
	})
}

const putRefugio = (req, res) => {
	res.status(500).json({
		status: 'error',
		message: 'Ruta aun no implementada PUT REFUGIO',
	})
}

module.exports = { getRefugio, getRefugios, postRefugio, deleteRefugio, putRefugio }