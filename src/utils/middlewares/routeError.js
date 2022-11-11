const routeError = async (req, res) => {
  res.status(404).json({
    error: -1,
    description: `Error en la ruta ${req.url}, chequea que esté bien escrita. El método ${req.method} no fue implementado`,
  });
};
module.exports = routeError;
