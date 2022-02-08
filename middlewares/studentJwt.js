const JwtStrategy = require('passport-jwt').Strategy,
   ExtractJwt = require('passport-jwt').ExtractJwt;

const Student = require('../models/student');

const opts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
   passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
         Student .findById(jwt_payload.id)
            .then(student => {
               if (user) {
                  return done(null, student);
               }
               return done(null, false);
            })
            .catch(err => {
               return done(err, false, { message: 'Server Error' });
            });
      })
   );
};