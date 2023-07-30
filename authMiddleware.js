
// Basic Authentication Middleware
const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const credentials = authHeader && authHeader.split(' ')[1];
  let result = '';
  if (credentials) {
    result = Buffer.from(credentials, 'base64').toString('utf-8');
  }

  const auth = 'csg3Kn7o582w126296fo154rt8h31:csg2fil512li612ng6512do52or42s6';

  if (!credentials || result !== auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="API Authentication"');
    res.sendStatus(401);
    return;
  }

  next();
};

module.exports = basicAuth;
