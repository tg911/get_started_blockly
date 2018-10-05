// Blockly.JavaScript['print_text'] = function(block) {
//   var text_text = block.getFieldValue('text');
//   // TODO: Assemble JavaScript into code variable.
//   var code = "window.alert('" + text_text + "');";
//   return code;
// };
//
// Blockly.JavaScript['count_loop'] = function(block) {
//   var number_num = block.getFieldValue('num');
//   var statements_st1 = Blockly.JavaScript.statementToCode(block, 'st1');
//   // TODO: Assemble JavaScript into code variable.
//   var code = "for (var i = 0; i < " + number_num + "; i++) {\n" + statements_st1 + "\n}";
//   return code;
// };
//
// Blockly.JavaScript['if_else'] = function(block) {
//   var value_conditional = Blockly.JavaScript.valueToCode(block, 'conditional', Blockly.JavaScript.ORDER_ATOMIC);
//   var statements_true = Blockly.JavaScript.statementToCode(block, 'true');
//   var statements_false = Blockly.JavaScript.statementToCode(block, 'false');
//   // TODO: Assemble JavaScript into code variable.
//   var code = "if " + value_conditional + " {\n" + statements_true + "\n} else {\n" + statements_false + "\n}";
//   return code;
// };
//
// Blockly.JavaScript['conditional'] = function(block) {
//   var value_arg1 = Blockly.JavaScript.valueToCode(block, 'arg1', Blockly.JavaScript.ORDER_ATOMIC);
//   var dropdown_symbol = block.getFieldValue('symbol');
//   var value_arg2 = Blockly.JavaScript.valueToCode(block, 'arg2', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = value_arg1 + " " + dropdown_symbol + " " + value_arg2;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
//
// Blockly.JavaScript['number'] = function(block) {
//   var number_num = block.getFieldValue('num');
//   // TODO: Assemble JavaScript into code variable.
//   var code = number_num;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
//
// Blockly.JavaScript['variables_get'] = function(block) {
//   // Variable getter.
//   var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
//       Blockly.Variables.NAME_TYPE);
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
//
// Blockly.JavaScript['math_change'] = function(block) {
//   // Add to a variable in place.
//   var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
//       Blockly.JavaScript.ORDER_ADDITION) || '0';
//   var varName = Blockly.JavaScript.variableDB_.getName(
//       block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   return varName + ' = (typeof ' + varName + ' == \'number\' ? ' + varName +
//       ' : 0) + ' + argument0 + ';\n';
// };
//
// Blockly.JavaScript['variables_set'] = function(block) {
//   // Variable setter.
//   var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
//       Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
//   var varName = Blockly.JavaScript.variableDB_.getName(
//       block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   return varName + ' = ' + argument0 + ';\n';
// };
//
// Blockly.JavaScript['math_number'] = function(block) {
//   // Numeric value.
//   var code = parseFloat(block.getFieldValue('NUM'));
//   var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
//               Blockly.JavaScript.ORDER_UNARY_NEGATION;
//   return [code, order];
// };
//
// Blockly.JavaScript['procedures_defreturn'] = function(block) {
//   // Define a procedure with a return value.
//   var funcName = Blockly.JavaScript.variableDB_.getName(
//       block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
//   var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
//   if (Blockly.JavaScript.STATEMENT_PREFIX) {
//     var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
//     branch = Blockly.JavaScript.prefixLines(
//         Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
//         '\'' + id + '\''), Blockly.JavaScript.INDENT) + branch;
//   }
//   if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
//     branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
//         '\'' + block.id + '\'') + branch;
//   }
//   var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
//       Blockly.JavaScript.ORDER_NONE) || '';
//   if (returnValue) {
//     returnValue = Blockly.JavaScript.INDENT + 'return ' + returnValue + ';\n';
//   }
//   var args = [];
//   for (var i = 0; i < block.arguments_.length; i++) {
//     args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i],
//         Blockly.Variables.NAME_TYPE);
//   }
//   var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
//       branch + returnValue + '}';
//   code = Blockly.JavaScript.scrub_(block, code);
//   // Add % so as not to collide with helper functions in definitions list.
//   Blockly.JavaScript.definitions_['%' + funcName] = code;
//   return null;
// };
//
// // Defining a procedure without a return value uses the same generator as
// // a procedure with a return value.
// Blockly.JavaScript['procedures_defnoreturn'] =
//     Blockly.JavaScript['procedures_defreturn'];
//
// Blockly.JavaScript['procedures_callreturn'] = function(block) {
//   // Call a procedure with a return value.
//   var funcName = Blockly.JavaScript.variableDB_.getName(
//       block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
//   var args = [];
//   for (var i = 0; i < block.arguments_.length; i++) {
//     args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
//         Blockly.JavaScript.ORDER_COMMA) || 'null';
//   }
//   var code = funcName + '(' + args.join(', ') + ')';
//   return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
// };
//
// Blockly.JavaScript['procedures_callnoreturn'] = function(block) {
//   // Call a procedure with no return value.
//   var funcName = Blockly.JavaScript.variableDB_.getName(
//       block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
//   var args = [];
//   for (var i = 0; i < block.arguments_.length; i++) {
//     args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
//         Blockly.JavaScript.ORDER_COMMA) || 'null';
//   }
//   var code = funcName + '(' + args.join(', ') + ');\n';
//   return code;
// };
//
// Blockly.JavaScript['procedures_ifreturn'] = function(block) {
//   // Conditionally return value from a procedure.
//   var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION',
//       Blockly.JavaScript.ORDER_NONE) || 'false';
//   var code = 'if (' + condition + ') {\n';
//   if (block.hasReturnValue_) {
//     var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
//         Blockly.JavaScript.ORDER_NONE) || 'null';
//     code += Blockly.JavaScript.INDENT + 'return ' + value + ';\n';
//   } else {
//     code += Blockly.JavaScript.INDENT + 'return;\n';
//   }
//   code += '}\n';
//   return code;
// };
