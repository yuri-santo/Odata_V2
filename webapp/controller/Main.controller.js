sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("funcionariocrud.controller.Main", {
        onInit: function () {
            this.getView().attachModelContextChange(() => {
                this.oModel = this.getView().getModel();
            });

            this._configureSmartTable();
        },

        _configureSmartTable: function () {
            const oSmartTable = this.byId("LineItemsSmartTable");
            oSmartTable.attachInitialise(() => {
                const oTable = oSmartTable.getTable();

                if (oTable.isA("sap.m.Table")) {
                    oTable.setMode("SingleSelectLeft");
                    oTable.setIncludeItemInSelection(true);

                    oTable.attachItemPress(this.onItemPress, this);

                    oTable.attachUpdateFinished(() => {
                        oTable.getItems().forEach((oItem) => {
                            if (oItem.setType) oItem.setType("Navigation");
                        });
                    });
                }
            });
        },

        onItemPress: function (oEvent) {
            const oItem = oEvent.getParameter("listItem");
            const oCtx = oItem.getBindingContext();
            const sId = oCtx.getProperty("ID");

            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Edit", { ID: sId });
        },

        onAdd: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Create");
        },

        onDelete: function () {
            const oSmartTable = this.byId("LineItemsSmartTable");
            const oTable = oSmartTable.getTable();
            const aSelected = oTable.getSelectedContexts();
            if (!aSelected.length) {
                return MessageBox.warning("Selecione um registro para excluir");
            }
            const oModel = this.getView().getModel();
            const sPath = aSelected[0].getPath();
            MessageBox.confirm("Deseja realmente excluir este funcionário?", {
                onClose: (oAction) => {
                    if (oAction === "OK") {
                        oModel.remove(sPath, {
                            success: () => MessageToast.show("Registro excluído com sucesso"),
                            error: (oError) => {
                                console.error(oError);
                                MessageBox.error("Erro ao excluir registro");
                            }
                        });
                    }
                }
            });
        }
    });
});