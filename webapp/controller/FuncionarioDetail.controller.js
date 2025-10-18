sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
  ],
  function (Controller, History, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("funcionariocrud.controller.FuncionarioDetail", {
      onInit: function () {
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute("Edit")
          .attachPatternMatched(this._onEditMatched, this);
        oRouter
          .getRoute("Create")
          .attachPatternMatched(this._onCreateMatched, this);

        this.oModel = this.getView().getModel();
      },

      _onEditMatched: function (oEvent) {
        const sId = oEvent.getParameter("arguments").ID;
        const sPath = `/FuncionarioSet(${sId})`;
        const oView = this.getView();

        oView.bindElement({
          path: sPath,
          parameters: {
            expand: "", 
            updateGroupId: "update", 
          },
          events: {
            dataRequested: () => oView.setBusy(true),
            dataReceived: () => oView.setBusy(false),
          },
        });

        const oModel = oView.getModel();
        oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
      },

      _onBindingChange: function () {
        const oContext = this.getView().getBindingContext();
        if (!oContext) {
          MessageBox.error("Registro não encontrado");
          const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("Main");
        }
      },

      _onCreateMatched: function () {
        this.getView().byId("inputName").setValue("");
        this.getView().byId("inputDepartment").setValue("");
        this.getView().byId("inputSalary").setValue("");
      },

      onSave: function (oEvent) {
        const oModel = this.getView().getModel();
        const that = this;

        // Dados novos
        const oData = {
          NAME: this.getView().byId("inputName").getValue(),
          DEPARTMENT: this.getView().byId("inputDepartment").getValue(),
          SALARY: this.getView().byId("inputSalary").getValue(),
        };

        // Caminho da entidade a ser atualizada
        let sPath = "/FuncionarioSet";
        const oContext = this.getView().getBindingContext();
        if (oContext) {
          sPath = oContext.getPath();
          oModel.update(sPath, oData, {
            success: async function () {
              await MessageToast.show("Registro atualizado com sucesso!");
              that.onNavBack();
            },
            error: function (oError) {
              MessageBox.error("Erro ao atualizar: " + oError.message);
            },
          });
        } else {
          oModel.create(sPath, oData, {
            success: async () => {
              await MessageToast.show("Registro incluído com sucesso!");
              this.onNavBack();
            },
            error: function (oError) {
              MessageBox.error("Erro ao incluir: " + oError.message);
            },
          });
        }
      },

      onCancel: function () {
        const oModel = this.getView().getModel();

        if (oModel.hasPendingChanges()) {
          oModel.resetChanges();
        }
        this.onNavBack();
      },

      onNavBack: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          oRouter.navTo("Main", {}, true);
        }
      },
    });
  }
);
