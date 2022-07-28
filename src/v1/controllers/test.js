exports.test = async (req, res) => {
  try {
    res.send('server is running');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
