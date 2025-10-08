/**
 * Visual Blocks Language
 *
 * Copyright 2020 openblock.cc.
 * https://github.com/openblockcc/openblock-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

goog.provide("Blockly.Arduino.arduino");

goog.require("Blockly.Arduino");

Blockly.Arduino["arduino_pin_setPinMode"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("MODE") || "INPUT";
  var code = "pinMode(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_modularBegin"] = function (block) {
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  return "";
};

Blockly.Arduino["arduino_pin_setBoardLed"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("LEVEL") || "setOn";
  // var arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'setOn';

  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";

  var code = "mybot.boardLed" + "(" + arg0 + "," + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_proximityread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_proximityread" + arg0] =
    "mybot.proximityBegin(2);\n";

  var code = "mybot.proximityRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_soilread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_soilread" + arg0] = "mybot.moistBegin(2);\n";

  var code = "mybot.moistRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_lightread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_lightread" + arg0] = "mybot.lightBegin(2);\n";

  var code = "mybot.lightRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// hive_usb
Blockly.Arduino["arduino_hiveOutput_setOutputPort"] = function (block) {
  var arg0 = block.getFieldValue("PORT") || "1";
  var arg1 = block.getFieldValue("LEVEL") || "1";
  Blockly.Arduino.setups_["setups_outputPort" + arg0] =
    "pinMode(" + arg0 + ",OUTPUT);\n";

  var code = "digitalWrite(" + arg0 + "," + arg1 + ");\n";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_soundread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_soundread" + arg0] = "mybot.soundBegin(2);\n";

  var code = "mybot.soundRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_dhtbegin"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";

  var code = "mybot.dhtBegin" + "(" + arg0 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_humread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  var code = "mybot.humidityRead()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_temread"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  var code = "mybot.temRead()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_motionbegin"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";

  var code = "mybot.motionBegin" + "(" + arg0 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_motionread"] = function (block) {
  var arg0 = block.getFieldValue("TYPE") || "acc";
  var arg1 = block.getFieldValue("DIM") || "x";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  var code = "mybot." + arg0 + arg1 + "Read()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_sonarsensor"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_sonarsensor" + arg0] =
    "mybot.sonarBegin(" + arg0 + ");\n";

  var code = "mybot.sonarRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_pushbutton"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_pushbutton" + arg0] =
    "mybot.switchBegin(" + arg0 + ");\n";

  var code = "mybot.switchRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["arduino_pin_relay"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  var arg1 = block.getFieldValue("VAL") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_relay" + arg0 + "_" + arg1] =
    "mybot.relayBegin(" + arg0 + ");\n";

  var code = "mybot.relaySet" + "(" + arg0 + "," + arg1 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_pumpdriver"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  var arg1 = block.getFieldValue("VAL") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_pumpdriver" + arg0 + "_" + arg1] =
    "mybot.pumpBegin(" + arg0 + ");\n";

  var code = "mybot.pumpSet" + "(" + arg0 + "," + arg1 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_buzzer"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  var arg1 = block.getFieldValue("VAL") || "0";
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "VAL2",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_buzzer" + arg0 + "_" + arg1] =
    "mybot.buzzerBegin(" + arg0 + ");\n";

  var code = "mybot.buzzerSet" + "(" + arg0 + "," + arg1 + "," + arg2 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_RGBLed"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  var arg1 = block.getFieldValue("VAL") || "CA";
  // var arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'setOn';

  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";

  var code = "mybot.rgbBegin" + "(" + arg0 + "," + arg1 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_setRGBLed"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  var arg1 = block.getFieldValue("MODE") || "CC";
  // var arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'setOn';

  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";

  var code = "mybot.rgbBegin" + "(" + arg0 + "," + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setBuzzer"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";

  var code = "mybot.buzzerBegin" + "(" + arg0 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setBOTBegin"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";

  var code = "mybot.steerBotbegin" + "(" + arg0 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setRGBLedOUT"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("MODE") || "RED";
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "LEVEL",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "LOW";
  var arg3 =
    Blockly.Arduino.valueToCode(
      block,
      "INT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  var code =
    "mybot.rgbSet" + arg1 + "(" + arg0 + ", " + arg2 + ", " + arg3 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_RGBLedOUT"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("VAL") || "RED";
  var arg2 = block.getFieldValue("VAL2") || "LOW";
  var code = "mybot.rgbSet" + arg1 + "(" + arg0 + ", " + arg2 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_setsingleBOT"] = function (block) {
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("VAL") || "One";
  var code = "mybot.motor" + arg1 + "Begin(" + arg0 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_setsingleBOTMotion"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 = block.getFieldValue("VAL") || "One";
  var arg2 = block.getFieldValue("MDIR") || "Two";
  var arg3 =
    Blockly.Arduino.valueToCode(
      block,
      "SP",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;

  // var arg3 = block.getFieldValue("SP") || '0';
  var code =
    "mybot.motor" + arg1 + "Rotate" + arg2 + "(" + arg0 + "," + arg3 + ");\n";
  return code;
};
Blockly.Arduino["arduino_pin_servodriverintellecto"] = function (block) {
  var arg0 = block.getFieldValue("ONE") || "ONE";
  var arg1 = block.getFieldValue("PIN") || "1";
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  // var arg1 = block.getFieldValue('OUT') || '90';
  Blockly.Arduino.includes_["include_modular"] = "#include <intellecto.h>";
  Blockly.Arduino.definitions_["definitions_modular"] =
    "Intellecto mybot" + ";";
  Blockly.Arduino.setups_["setups_servo" + arg1 + "_" + arg0] =
    "mybot.servo" + arg0 + "Begin" + "(" + arg1 + ");\n";
  // var code = 'mybot.servo' + arg0 + 'Begin' + '(' + arg1 + ');\n' ;
  var code = "mybot.servo" + arg0 + "Move" + "(" + arg2 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setBuzzerOUT"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 1;
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "LEVEL",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "LOW";
  var code = "mybot.buzzerSet(" + arg0 + ", " + arg2 + "," + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setBOTMotion"] = function (block) {
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  var arg0 = block.getFieldValue("PIN") || "3";
  var arg1 = block.getFieldValue("MODE") || "Forward";
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "1";
  Blockly.Arduino.setups_["setups_mybot" + arg0] =
    "mybot.steerBotBegin" + "(" + arg0 + ");";
  var code = "mybot.steerBot" + arg1 + "(" + arg0 + ", " + arg2 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setBOTHalt"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "3";
  var code = "mybot.haltBot" + "(" + arg0 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_servoDriver"] = function (block) {
  var arg0 = block.getFieldValue("ONE") || "ONE";
  var arg1 = block.getFieldValue("PIN") || "1";
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  // var arg1 = block.getFieldValue('OUT') || '90';
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  Blockly.Arduino.setups_["setups_servo" + arg1 + "_" + arg0] =
    "mybot.servo" + arg0 + "Begin" + "(" + arg1 + ");\n";
  // var code = 'mybot.servo' + arg0 + 'Begin' + '(' + arg1 + ');\n' ;
  var code = "mybot.servo" + arg0 + "Move" + "(" + arg2 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_setDigitalOutput"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "LEVEL",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "LOW";
  var code = "digitalWrite(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_menu_level"] = function (block) {
  var code = block.getFieldValue("level") || "LOW";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_setPwmOutput"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  var code = "analogWrite(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_readDigitalPin"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "0";
  var code = "digitalRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_readAnalogPin"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "A1";
  var code = "analogRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_sonarRead"] = function (block) {
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  var arg0 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.setups_["setups_sonar" + arg0] =
    "mybot.sonarBegin" + "(" + arg0 + ");\n";
  var code = "mybot.sonarRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_proximityBegin"] = function (block) {
  var arg0 = block.getFieldValue("MODE") || "One";
  var arg1 = block.getFieldValue("PIN") || "1";
  Blockly.Arduino.includes_["include_modular"] = "#include <modular.h>";
  Blockly.Arduino.definitions_["definitions_modular"] = "Modular mybot" + ";";
  Blockly.Arduino.setups_["setups_mybot" + arg0 + arg1] =
    "mybot.proximity" + arg0 + "Begin" + "(" + arg1 + ");";
  var code = "mybot.proximity" + arg0 + "Read(" + arg1 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_pin_setServoOutput"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "A1";
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "OUT",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;

  Blockly.Arduino.includes_["include_servo"] = "#include <Servo.h>";
  Blockly.Arduino.definitions_["definitions_servo" + arg0] =
    "Servo servo_" + arg0 + ";";
  Blockly.Arduino.setups_["setups_servo" + arg0] =
    "servo_" + arg0 + ".attach" + "(" + arg0 + ", 544, 2400);";

  var code = "servo_" + arg0 + ".write" + "(" + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_attachInterrupt"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "2";
  var arg1 = block.getFieldValue("MODE") || "RISING";

  var branch = Blockly.Arduino.statementToCode(block, "SUBSTACK");
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);

  Blockly.Arduino.definitions_["definitions_ISR_" + arg1 + arg0] =
    "void ISR_" + arg1 + "_" + arg0 + "() {\n" + branch + "}";

  var code =
    "attachInterrupt(digitalPinToInterrupt(" +
    arg0 +
    "), ISR_" +
    arg1 +
    "_" +
    arg0 +
    ", " +
    arg1 +
    ");\n";
  return code;
};

Blockly.Arduino["arduino_pin_detachInterrupt"] = function (block) {
  var arg0 = block.getFieldValue("PIN") || "2";

  var code = "detachInterrupt(digitalPinToInterrupt(" + arg0 + "));\n";
  return code;
};

Blockly.Arduino["arduino_serial_serialBegin"] = function (block) {
  var arg0 = block.getFieldValue("VALUE") || "9600";

  var code = "Serial.begin(" + arg0 + ");\n";
  return code;
};

Blockly.Arduino["arduino_serial_serialPrint"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "VALUE",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "";
  var eol = block.getFieldValue("EOL") || "warp";
  var code = "";
  if (eol === "warp") {
    code = "Serial.println(" + arg0 + ");\n";
  } else {
    code = "Serial.print(" + arg0 + ");\n";
  }
  return code;
};

Blockly.Arduino["arduino_serial_serialAvailable"] = function () {
  var code = "Serial.available()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_serial_serialReadData"] = function () {
  var code = "Serial.read()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_serial_multiSerialBegin"] = function (block) {
  var arg0 = block.getFieldValue("NO") || "0";
  var arg1 = block.getFieldValue("VALUE") || "9600";

  var code;
  if (arg0 === "0") {
    arg0 = "";
  }
  code = "Serial" + arg0 + ".begin(" + arg1 + ");\n";
  return code;
};

Blockly.Arduino["arduino_serial_multiSerialPrint"] = function (block) {
  var arg0 = block.getFieldValue("NO") || "0";
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "VALUE",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "";
  var eol = block.getFieldValue("EOL") || "warp";

  var code;
  if (arg0 === "0") {
    arg0 = "";
  }
  if (eol === "warp") {
    code = "Serial" + arg0 + ".println(" + arg1 + ");\n";
  } else {
    code = "Serial" + arg0 + ".print(" + arg1 + ");\n";
  }
  return code;
};

Blockly.Arduino["arduino_serial_multiSerialAvailable"] = function (block) {
  var arg0 = block.getFieldValue("NO") || "0";
  var code;
  if (arg0 === "0") {
    arg0 = "";
  }

  var code = "Serial" + arg0 + ".available()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_serial_multiSerialReadAByte"] = function (block) {
  var arg0 = block.getFieldValue("NO") || "0";
  var code;
  if (arg0 === "0") {
    arg0 = "";
  }

  var code = "Serial" + arg0 + ".read()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_data_dataMap"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "DATA",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG0",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 1;
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG1",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 100;
  var arg3 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG2",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 1;
  var arg4 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG3",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 1000;

  var code =
    "map(" + arg0 + ", " + arg1 + ", " + arg2 + ", " + arg3 + ", " + arg4 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_data_dataConstrain"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "DATA",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  var arg1 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG0",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 1;
  var arg2 =
    Blockly.Arduino.valueToCode(
      block,
      "ARG1",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 100;

  var code = "constrain(" + arg0 + ", " + arg1 + ", " + arg2 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_data_dataConvert"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "DATA",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || 0;
  var arg1 = block.getFieldValue("TYPE") || "INTEGER";

  var code;

  switch (arg1) {
    case "INTEGER":
      code = "String(" + arg0 + ").toInt()";
      break;
    case "DECIMAL":
      code = "String(" + arg0 + ").toFloat()";
      break;
    case "STRING":
      code = "String(" + arg0 + ")";
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_data_dataConvertASCIICharacter"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "DATA",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "0";

  var code = "String(char(" + arg0 + "))";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_data_dataConvertASCIINumber"] = function (block) {
  var arg0 =
    Blockly.Arduino.valueToCode(
      block,
      "DATA",
      Blockly.Arduino.ORDER_UNARY_POSTFIX
    ) || "0";

  var code = "toascii(String(" + arg0 + ")[0])";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_CameraControl_cameraInit"] = function (block) {
  // Add required headers
  Blockly.Arduino.includes_["include_camera"] =
    "#include <esp_camera.h>\n#include <esp_err.h>";

  // Add serial initialization
  Blockly.Arduino.setups_["setup_serial"] = "Serial.begin(115200);\n";

  // XIAO ESP32S3-Specific Camera Configuration
  Blockly.Arduino.setups_["setup_camera"] =
    "camera_config_t config;\n" +
    "config.ledc_channel = LEDC_CHANNEL_0;\n" +
    "config.ledc_timer = LEDC_TIMER_0;\n" +
    "// XIAO ESP32S3 Camera Pins\n" +
    "config.pin_d0 = 13;  // Y2_GPIO_NUM\n" +
    "config.pin_d1 = 15;  // Y3_GPIO_NUM\n" +
    "config.pin_d2 = 17;  // Y4_GPIO_NUM\n" +
    "config.pin_d3 = 18;  // Y5_GPIO_NUM\n" +
    "config.pin_d4 = 12;  // Y6_GPIO_NUM\n" +
    "config.pin_d5 = 14;  // Y7_GPIO_NUM\n" +
    "config.pin_d6 = 16;  // Y8_GPIO_NUM\n" +
    "config.pin_d7 = 11;  // Y9_GPIO_NUM\n" +
    "config.pin_xclk = 10;\n" +
    "config.pin_pclk = 47;\n" +
    "config.pin_vsync = 21;\n" +
    "config.pin_href = 38;\n" +
    "config.pin_sscb_sda = 40;\n" +
    "config.pin_sscb_scl = 39;\n" +
    "config.pin_pwdn = -1;\n" +
    "config.pin_reset = -1;\n" +
    "config.xclk_freq_hz = 20000000;\n" +
    "config.pixel_format = PIXFORMAT_JPEG;\n\n" +
    "// PSRAM Configuration\n" +
    "if(psramFound()){\n" +
    "  config.frame_size = FRAMESIZE_UXGA;\n" +
    "  config.jpeg_quality = 10;\n" +
    "  config.fb_count = 2;\n" +
    '  Serial.println("PSRAM detected - Using high resolution mode");\n' +
    "} else {\n" +
    "  config.frame_size = FRAMESIZE_SVGA;\n" +
    "  config.jpeg_quality = 12;\n" +
    "  config.fb_count = 1;\n" +
    '  Serial.println("No PSRAM detected - Using lower resolution");\n' +
    "}\n\n" +
    "// Camera Initialization with Error Handling\n" +
    "esp_err_t cam_err = esp_camera_init(&config);\n" +
    "if (cam_err != ESP_OK) {\n" +
    '  Serial.printf("Camera init failed: 0x%x (%s)\\n", cam_err, esp_err_to_name(cam_err));\n' +
    "  while(1); // Halt on critical error\n" +
    "}\n" +
    'Serial.println("Camera initialized successfully");\n';

  return "";
};

Blockly.Arduino["arduino_CameraControl_cameraCaptureImage"] = function (block) {
  var code =
    "camera_fb_t * fb = esp_camera_fb_get();\n" +
    "if (!fb) {\n" +
    '  Serial.println("Camera capture failed");\n' +
    "  return;\n" +
    "}\n" +
    "// Use fb->buf to access image data\n" +
    "esp_camera_fb_return(fb);\n";
  return code;
};

Blockly.Arduino["arduino_WiFiControl_wifiInit"] = function (block) {
  var ssid =
    Blockly.Arduino.valueToCode(block, "SSID", Blockly.Arduino.ORDER_ATOMIC) ||
    '""';
  var password =
    Blockly.Arduino.valueToCode(
      block,
      "PASSWORD",
      Blockly.Arduino.ORDER_ATOMIC
    ) || '""';

  Blockly.Arduino.includes_["include_Control"] = "#include <WiFi.h>";
  Blockly.Arduino.setups_["setup_wifi"] =
    "WiFi.begin(" +
    ssid +
    ", " +
    password +
    ");\n" +
    "while (WiFi.status() != WL_CONNECTED) {\n" +
    "  delay(1000);\n" +
    '  Serial.println("Connecting to WiFi...");\n' +
    "}\n" +
    'Serial.println("Connected to WiFi");\n';

  return "";
};

Blockly.Arduino["arduino_WiFiControl_wifiConnect"] = function (block) {
  var code =
    "if (WiFi.status() != WL_CONNECTED) {\n" +
    '  Serial.println("Reconnecting to WiFi...");\n' +
    "  WiFi.reconnect();\n" +
    "}\n";
  return code;
};

Blockly.Arduino["arduino_WiFiControl_wifiDisconnect"] = function (block) {
  var code =
    "WiFi.disconnect();\n" + 'Serial.println("Disconnected from WiFi");\n';
  return code;
};

Blockly.Arduino["arduino_WiFiControl_wifistatus"] = function (block) {
  var code = "WiFi.status()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["arduino_camera_wifi_stream"] = function (block) {
  var ssid =
    Blockly.Arduino.valueToCode(block, "SSID", Blockly.Arduino.ORDER_ATOMIC) ||
    '""';
  var password =
    Blockly.Arduino.valueToCode(
      block,
      "PASSWORD",
      Blockly.Arduino.ORDER_ATOMIC
    ) || '""';

  Blockly.Arduino.includes_["include_wifi"] = "#include <WiFi.h>";
  Blockly.Arduino.includes_["include_camera"] = "#include <esp_camera.h>";
  Blockly.Arduino.includes_["include_http_server"] = "#include <WebServer.h>";

  Blockly.Arduino.definitions_["camera_server"] =
    "WebServer server(80);\n" +
    "void handleStream() {\n" +
    "  camera_fb_t * fb = esp_camera_fb_get();\n" +
    "  if (!fb) {\n" +
    '    server.send(500, "text/plain", "Camera capture failed");\n' +
    "    return;\n" +
    "  }\n" +
    '  server.sendHeader("Content-Type", "image/jpeg");\n' +
    '  server.sendHeader("Content-Length", String(fb->len));\n' +
    '  server.send(200, "image/jpeg", (const char *)fb->buf, fb->len);\n' +
    "  esp_camera_fb_return(fb);\n" +
    "}\n";

  Blockly.Arduino.setups_["setup_wifi"] =
    "WiFi.begin(" +
    ssid +
    ", " +
    password +
    ");\n" +
    "while (WiFi.status() != WL_CONNECTED) {\n" +
    "  delay(1000);\n" +
    '  Serial.println("Connecting to WiFi...");\n' +
    "}\n" +
    'Serial.println("Connected to WiFi");\n' +
    'Serial.print("IP Address: ");\n' +
    "Serial.println(WiFi.localIP());\n";

  Blockly.Arduino.setups_["setup_server"] =
    'server.on("/stream", handleStream);\n' + "server.begin();\n";

  var loopCode = "server.handleClient();\n";
  Blockly.Arduino.loops_["loop_server"] = loopCode;

  return "";
};

Blockly.Arduino["arduino_CameraControl_cameraServerStart"] = function (block) {
  var ssid =
    Blockly.Arduino.valueToCode(block, "SSID", Blockly.Arduino.ORDER_ATOMIC) ||
    '"YOUR_WIFI_SSID"';
  var password =
    Blockly.Arduino.valueToCode(
      block,
      "PASSWORD",
      Blockly.Arduino.ORDER_ATOMIC
    ) || '"YOUR_WIFI_PASSWORD"+';

  Blockly.Arduino.includes_["include_wifi"] = "#include <WiFi.h>";
  Blockly.Arduino.includes_["include_camera"] = "#include <esp_camera.h>";
  Blockly.Arduino.includes_["include_web_server"] = "#include <WebServer.h>";

  Blockly.Arduino.definitions_["camera_server"] =
    "WebServer server(80);\n" +
    "void handleJPGStream() {\n" +
    "  WiFiClient client = server.client();\n" +
    '  String response = "HTTP/1.1 200 OK\\r\\n";\n' +
    '  response += "Content-Type: multipart/x-mixed-replace; boundary=frame\\r\\n\\r\\n";\n' +
    "  server.sendContent(response);\n" +
    "  while (1) {\n" +
    "    camera_fb_t * fb = esp_camera_fb_get();\n" +
    "    if (!fb) {\n" +
    '      Serial.println("Camera capture failed");\n' +
    "      return;\n" +
    "    }\n" +
    '    response = "--frame\\r\\n";\n' +
    '    response += "Content-Type: image/jpeg\\r\\n\\r\\n";\n' +
    "    server.sendContent(response);\n" +
    "    server.sendContent((const char *)fb->buf, fb->len);\n" +
    '    server.sendContent("\\r\\n");\n' +
    "    esp_camera_fb_return(fb);\n" +
    "    if (!client.connected()) break;\n" +
    "  }\n" +
    "}\n" +
    "void startCameraServer() {\n" +
    '  server.on("/", HTTP_GET, []() {\n' +
    '    server.send(200, "text/html", "<img src=\'/stream\'>");\n' +
    "  });\n" +
    '  server.on("/stream", HTTP_GET, handleJPGStream);\n' +
    "  server.begin();\n" +
    "}\n";

  Blockly.Arduino.setups_["setup_camera_wifi"] =
    "Serial.begin(115200);\n" +
    "camera_config_t config;\n" +
    "config.ledc_channel = LEDC_CHANNEL_0;\n" +
    "config.ledc_timer = LEDC_TIMER_0;\n" +
    "config.pin_d0 = 5;\n" +
    "config.pin_d1 = 18;\n" +
    "config.pin_d2 = 19;\n" +
    "config.pin_d3 = 21;\n" +
    "config.pin_d4 = 36;\n" +
    "config.pin_d5 = 39;\n" +
    "config.pin_d6 = 34;\n" +
    "config.pin_d7 = 35;\n" +
    "config.pin_xclk = 0;\n" +
    "config.pin_pclk = 22;\n" +
    "config.pin_vsync = 25;\n" +
    "config.pin_href = 23;\n" +
    "config.pin_sscb_sda = 26;\n" +
    "config.pin_sscb_scl = 27;\n" +
    "config.pin_pwdn = -1;\n" +
    "config.pin_reset = -1;\n" +
    "config.xclk_freq_hz = 20000000;\n" +
    "config.pixel_format = PIXFORMAT_JPEG;\n" +
    "if(psramFound()){\n" +
    "  config.frame_size = FRAMESIZE_QVGA;\n" +
    "  config.jpeg_quality = 10;\n" +
    "  config.fb_count = 2;\n" +
    "} else {\n" +
    "  config.frame_size = FRAMESIZE_QQVGA;\n" +
    "  config.jpeg_quality = 12;\n" +
    "  config.fb_count = 1;\n" +
    "}\n" +
    "esp_err_t err = esp_camera_init(&config);\n" +
    "if (err != ESP_OK) {\n" +
    '  Serial.printf("Camera init failed with error 0x%x", err);\n' +
    "  return;\n" +
    "}\n" +
    "WiFi.begin(" +
    ssid +
    ", " +
    password +
    ");\n" +
    "while (WiFi.status() != WL_CONNECTED) {\n" +
    "  delay(500);\n" +
    '  Serial.print(".");\n' +
    "}\n" +
    'Serial.println("\nWiFi connected");\n' +
    'Serial.print("Camera Stream Ready! Go to: http://");\n' +
    "Serial.println(WiFi.localIP());\n" +
    "startCameraServer();\n";

  return "";
};
