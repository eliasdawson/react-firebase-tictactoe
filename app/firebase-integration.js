var url = require('url');

var FIREBASE_BASE_URL = 'https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/';
var FIREBASE_GAMES_PATH = 'games/';

var FirebaseIntegration = {

  /**
   * Return application Firebase URL.
   * @param  {!String} path Optional path
   * @return {String}       Firebase application URL
   */
  getFirebaseUrl: function(path) {
    var firebaseUrl = FIREBASE_BASE_URL;
    
    if (path !== '') {
      firebaseUrl = url.resolve(firebaseUrl, path);
    }

    return firebaseUrl;
  },

  /**
   * Get Firefbase URL for list of games
   * @return {String} Firebase URL of game list
   */
  getGamesPath: function() {
    return this.getFirebaseUrl(FIREBASE_GAMES_PATH);
  },

  /**
   * Get Firefbase URL for game with specified ID
   * @param  {String} id ID of game
   * @return {String}    Firebase URL of game with specified ID
   */
  getGameUrl: function(id) {
    return this.getFirebaseUrl(url.resolve(FIREBASE_GAMES_PATH, id) + '/');
  },

  /**
   * Bind game data to Firebase object
   * @param  {Object} component Game container component to bind to.
   * @param  {string} gameId    Firebase ID of the game
   */
  bindFirebaseGame: function(component, gameId) {
    component.gameRef = new Firebase(this.getGameUrl(gameId));
    component.gameRef.on('value', function(snapshot) {
      component.setState(snapshot.val());
    });
  }

};

module.exports = FirebaseIntegration;
