const JwtStrategy = require('passport-jwt').Strategy,
   ExtractJwt = require('passport-jwt').ExtractJwt;

const Teacher = require('../models/teacher');

const opts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
   passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
         Teacher.findById(jwt_payload.id)
            .then(teacher => {
               if (teacher) {
                  return done(null, teacher);
               }
               return done(null, false);
            })
            .catch(err => {
               return done(err, false, { message: 'Server Error' });
            });
      })
   );
};