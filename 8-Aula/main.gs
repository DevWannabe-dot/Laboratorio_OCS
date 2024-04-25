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
  let planilha = SpreadsheetApp.openById("153gD1rZ_LdaHd7rQLMqN7-Yy5LmRyW0tfFGzY6NHn3E");
  let sheet = planilha.getSheetByName("Produtos");

  sheet.appendRow([produto, new Date()]);
}
