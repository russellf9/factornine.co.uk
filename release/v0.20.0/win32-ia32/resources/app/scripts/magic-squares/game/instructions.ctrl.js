(function() {
    'use strict';

    /**
     * A Controller for the games instructions
     */
    angular.module('magicsquares').controller('Instructions', ['Game', 'Text', function(Game, Text) {
        this.instructions = Text.instructions + Game.magicNumber() + '.';
    }]);
}());

