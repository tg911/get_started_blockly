// Blockly.Blocks['print_text'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldTextInput("Hello World"), "text")
//         .appendField("を表示する");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['count_loop'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldNumber(3, 0, Infinity, 1), "num")
//         .appendField("回繰り返す");
//     this.appendStatementInput("st1")
//         .setCheck(null);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(45);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['if_else'] = {
//   init: function() {
//     this.appendValueInput("conditional")
//         .setCheck("Boolean")
//         .appendField("もし");
//     this.appendDummyInput()
//         .appendField("なら");
//     this.appendStatementInput("true")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField("そうでなければ");
//     this.appendStatementInput("false")
//         .setCheck(null);
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(0);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['conditional'] = {
//   init: function() {
//     this.appendValueInput("arg1")
//         .setCheck("Number");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["＝","=="], ["≠","!="], ["<","<"], ["≦","≦"], [">",">"], ["≧","≧"]]), "symbol");
//     this.appendValueInput("arg2")
//         .setCheck("Number");
//     this.setOutput(true, "Boolean");
//     this.setColour(300);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['number'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldNumber(0), "num");
//     this.setOutput(true, "Number");
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
