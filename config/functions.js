module.exports = {
  handleError: (res, code, message) => {
    res.status(code || 500).json({
      ok: false,
      status: code,
      message
    });
  }
}