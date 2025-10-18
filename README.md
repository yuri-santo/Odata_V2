# Cadastro de Funcionário

Aplicação Fiori para o **cadastro e manutenção de funcionários** da empresa.  
Permite visualizar, adicionar, editar e excluir registros de funcionários conectando-se a um serviço **OData ABAP On-Premise**.

---

## Detalhes da Aplicação

| Item | Descrição |
|------|------------|
| **Título da Aplicação** | Cadastro de Funcionário |
| **Nome do Módulo** | funcionariocrud |
| **Gerador da App** | SAP Fiori Application Generator |
| **Versão do Gerador** | 1.18.6 |
| **Plataforma** | Visual Studio Code |
| **Template Utilizado** | Basic V2 |
| **Tipo de Serviço** | SAP System (ABAP On-Premise) |
| **Service URL** | `http://s4hana.ides.com:9222/sap/opu/odata/sap/ZGW_HELLOWORD24_SRV` |
| **Tema UI5** | sap_fiori_3 |
| **Versão UI5** | 1.60.0 |
| **Namespace** | *(não definido)* |
| **Assistência de Código (Code Assist)** | Desativado |
| **TypeScript** | Desativado |
| **ESLint** | Desativado |
| **Data de Geração** | Wed Oct 15 2025 10:31:48 GMT-0300 (Brasilia Standard Time) |

---

## Descrição do Projeto

O sistema **Cadastro de Funcionário** foi desenvolvido para facilitar o gerenciamento dos colaboradores da empresa.  
Com ele, é possível:

- Cadastrar novos funcionários;
- Consultar dados existentes;
- Editar informações como **nome**, **departamento** e **salário**;
- Excluir registros de forma prática.

A aplicação consome um **serviço OData** hospedado em um ambiente **SAP S/4HANA On-Premise**, permitindo integração direta com dados reais do sistema ERP.

---

## Telas da Aplicação

### Tela Inicial
Lista de funcionários cadastrados, com opções para **adicionar**, **editar** e **excluir**.

<img width="1780" height="797" alt="SAP tela inicial" src="https://github.com/user-attachments/assets/16db5f1a-496e-4aea-a700-2ab72dbdddd7" />

---

### Tela de Detalhes
Tela utilizada para inserir ou editar informações de um funcionário.

<img width="1778" height="947" alt="Detalhes" src="https://github.com/user-attachments/assets/6825ae43-7545-45f5-8fe9-40c2e0176b59" />


## funcionariocrud

Cadastro de Funcionarios da Empresa

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


