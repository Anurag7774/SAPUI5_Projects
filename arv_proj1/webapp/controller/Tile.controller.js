sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.arv.arvproj1.controller.Tile", {
			onInit: function () {
				var myTileModel = new JSONModel("../model/tile.json");
				this.getView().setModel(myTileModel,"tile");


			},
			press: function(oEvt)
			{
				alert(oEvt);
			}
		});
	});
