/**
 * @fileoverview 平面模型
 * @authors
	Tony.Liang <pillar0514@gmail.com>
 * @description 构成房间的平面的数据模型
 */
define('mods/model/plane',function(require,exports,module){

	var $ = require('lib');
	var $model = require('lib/mvc/model');

	var Plane = $model.extend({
		defaults : {
			name : 'plane',
			type : '',
			bePointed : false,
			distance : 0,
			width : 0,
			height : 0,
			hover : false
		},
		events : {

		},
		build : function(){

		}
	});

	module.exports = Plane;

});





