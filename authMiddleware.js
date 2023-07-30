
// Basic Authentication Middleware
const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const credentials = authHeader && authHeader.split(' ')[1];
  let result = '';
  if (credentials) {
    result = Buffer.from(credentials, 'base64').toString('utf-8');
  }

  const auth = process.env.AUTH_USER+":"+process.env.AUTH_PASS;

  if (!credentials || result !== auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="API Authentication"');
    res.sendStatus(401);
    return;
  }

  next();
};

module.exports = basicAuth;
