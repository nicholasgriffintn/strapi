module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93e5373a2dab6818f08ca4074f10cfb2'),
  },
});
