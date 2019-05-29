exports.catchErrors = fn =>
  function(req, res, next) {
    return fn(req, res, next).catch(next);
  };

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.developmentErrors = (error, req, res) => {
  res.status(error.status || 500);
  res.json(error);
};

exports.productionErrors = (error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {},
  });
};
