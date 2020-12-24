module.exports = function(err, req, res, next) {
  console.error(err.message, { meta: err });
  res.status(500).send("Internal Server Error");
};
