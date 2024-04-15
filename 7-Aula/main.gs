/* Back-end: JS/Google Apps Script */

function doGet(e)
{
  return HtmlService.createHtmlOutputFromFile("index");
}

function escreverProduto(produto)
{
  let planilha = SpreadsheetApp.openById("153gD1rZ_LdaHd7rQLMqN7-Yy5LmRyW0tfFGzY6NHn3E");
  let sheet = planilha.getSheetByName("Produtos");

  sheet.appendRow([produto, new Date()]);
}
