var moment = require('moment');

module.exports = function(app){
  var unix, natural;

  app.get('/:query', function(req, res){
    var val = req.params.query;
    if (val > 0) {
      unix = val;
      natural = convertToNatural(unix);
    }
    else if (isNaN(val) && moment(val, 'MMMM D, YYYY').isValid()){
      unix = convertToUnix(val);
      natural = convertToNatural(unix);
    }

    var date = {
      "unix": unix,
      "natural": natural
    };

    res.send(JSON.stringify(date));
  });

  function convertToUnix(timestamp){
    return moment(timestamp, 'MMMM D, YYYY').format('X');
  }

  function convertToNatural(timestamp){
    return moment.unix(timestamp).format('MMMM D, YYYY');
  }
};
