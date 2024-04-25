/* Back-end: JS/Google Apps Script */

function doGet(e)
{
  return HtmlService.createTemplateFromFile('index')
  .evaluate();
  // Permite a integração com Scriptlets para separar o JavaScript
}

function include(filename)
{
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}

function escreverProduto(produto)
{
  let planilha = SpreadsheetApp.openById("1SYHTw0cbLDXk-1XsIPlYuzYLvAMbstpN9ne05wFcqxs");
  let sheet = planilha.getSheetByName("Produtos");

  sheet.appendRow([produto.nome, produto.quantidade, produto.tipo, new Date()]);
}
