/**
 * Visual Blocks Language
 *
 * Copyright 2021 openblock.cc.
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

goog.provide("Blockly.Python.microPython");

goog.require("Blockly.Python");

Blockly.Python["microPython_pins_setDigitalOutput"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var level =
    Blockly.Python.valueToCode(
      block,
      "LEVEL",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "LOW";

  var code = "pin" + pin + ".write_digital(" + level + ")\n";
  return code;
};

// Blockly.Python["microPython_pins_menu_level"] = function (block) {
//   var code = block.getFieldValue("level") || "0";
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python["microPython_pins_setPwmOutput"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var out =
    Blockly.Python.valueToCode(
      block,
      "OUT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";

  var code = "pin" + pin + ".write_analog(" + out + ")\n";
  return code;
};

Blockly.Python["microPython_pins_readDigitalPin"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".read_digital()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_pins_readAnalogPin"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".read_analog()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_DCMotor_dc_motor_run"] = function (block) {
  // Retrieve the motor pin and speed values
  var pin = block.getFieldValue("STATE") || "1"; // Default to Motor 1
  var speed =
    Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  Blockly.Python.imports_["dcMotor"] = "from WeDCMotor import *";

  Blockly.Python.imports_[
    "dc_motor_var_" + pin
  ] = `dc_${pin} = WeDCMotor(${pin})`;

  // Generate the code to run the motor
  var code = `dc_${pin}.run(${speed})\n`;
  return code;
};

Blockly.Python["microPython_lcd_lcd_init"] = function (block) {
  var frq =
    Blockly.Python.valueToCode(
      block,
      "FREQUENCY",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var color_cod =
    Blockly.Python.valueToCode(
      block,
      "COLOR_CODE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  color_cod = color_cod.replace(/['"]/g, "");
  Blockly.Python.imports_["lcd"] = "import lcd";
  var code = "lcd.init(freq=" + frq + ",color=0x" + color_cod + ")\n";
  return code;
};

Blockly.Python["microPython_lcd_lcd_color"] = function (block) {
  var arg0 = block.getFieldValue("COLOR") || " ";
  arg0 = arg0.replace(/['"()]/g, "");
  var code = `lcd.${arg0}`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python["microPython_lcd_lcd_clear"] = function (block) {
  var color_cod =
    Blockly.Python.valueToCode(
      block,
      "COLOR",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0000";
  color_cod = color_cod.replace(/['"]/g, "");
  Blockly.Python.imports_["lcd"] = "import lcd";
  var code = "lcd.clear(0x" + color_cod + ")\n";
  return code;
};

Blockly.Python["microPython_lcd_lcd_display_image"] = function (block) {
  var imagePath =
    Blockly.Python.valueToCode(
      block,
      "IMAGE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || " ";

  Blockly.Python.imports_["lcd"] = "import lcd";
  var code = `lcd.display(${imagePath})\n`;
  return code;
};

Blockly.Python["microPython_lcd_lcd_screen_rotate"] = function (block) {
  // var arg0 = Blockly.Python.valueToCode(block,"DEGREE",Blockly.Python.ORDER_FUNCTION_CALL) || "0";
  var arg0 = block.getFieldValue("DEGREE") || "0";
  // arg0 = arg0.replace(/['"]/g, "");
  Blockly.Python.imports_["lcd"] = "import lcd";
  var code = "lcd.rotation(" + arg0 + ")\n";
  return code;
};

Blockly.Python["microPython_lcd_lcd_screen_mirror"] = function (block) {
  var arg0 = block.getFieldValue("MIRROR") || "1";
  Blockly.Python.imports_["lcd"] = "import lcd";
  var code = "lcd.mirror(" + arg0 + ")\n";
  return code;
};

Blockly.Python["microPython_lcd_lcd_text_display"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "Hello";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "COLOR_CODE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0000";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "BG_COLOR",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "FFFF";

  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  Blockly.Python.imports_["lcd"] = "import lcd";
  var code =
    "lcd.draw_string(" +
    arg1 +
    "," +
    arg2 +
    "," +
    arg3 +
    ",0x" +
    arg4 +
    ",0x" +
    arg5 +
    ")\n";
  return code;
};

Blockly.Python["microPython_lcd_lcd_get_resolution"] = function (block) {
  var arg0 = block.getFieldValue("SIDE") || "width";
  var code = "lcd." + arg0 + "()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_Sequence_getlistIndex"] = function (block) {
  var list_name =
    Blockly.Python.valueToCode(block, "LIST_NAME", Blockly.Python.ORDER_NONE) ||
    "List_Name";
  var index =
    Blockly.Python.valueToCode(block, "INDEX", Blockly.Python.ORDER_NONE) || "";
  var code = list_name + "[" + index + "]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_Sequence_getValue"] = function (block) {
  var value =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE) ||
    "Value";

  var code = value;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_camera_camera_init"] = function (block) {
  var arg1 = block.getFieldValue("FORMAT") || "RGB565";
  var arg2 = block.getFieldValue("FRAMESIZE") || "QVGA";
  var arg3 = block.getFieldValue("STATE") || "1";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "FRAMES",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";

  Blockly.Python.imports_["sensor"] = "import sensor";
  var code =
    "sensor.reset()\n" +
    "sensor.set_pixformat(sensor." +
    arg1 +
    ")\n" +
    "sensor.set_framesize(sensor." +
    arg2 +
    ")\n" +
    "sensor.run(" +
    arg3 +
    ")\n" +
    "sensor.skip_frames(" +
    arg4 +
    ")\n";
  return code;
};

Blockly.Python["microPython_camera_camera_images"] = function (block) {
  Blockly.Python.imports_["sensor"] = "import sensor";
  var code = "sensor.snapshot()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_camera_camera_mode"] = function (block) {
  var arg0 = block.getFieldValue("CMODE") || "set_auto_gain";
  var arg1 = block.getFieldValue("CCON") || "True";
  arg0 = arg0.replace(/['"]/g, "");
  arg1 = arg1.replace(/['"]/g, "");
  Blockly.Python.imports_["sensor"] = "import sensor";
  var code = "sensor." + arg0 + "(" + arg1 + ")\n";
  return code;
};
Blockly.Python["microPython_camera_camera_contrast"] = function (block) {
  var arg0 = block.getFieldValue("CONTRAST") || "brightness";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "True",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "100";

  arg0 = arg0.replace(/['"]/g, "");
  arg1 = arg1.replace(/['"]/g, "");
  Blockly.Python.imports_["sensor"] = "import sensor";
  var code = "sensor.set_" + arg0 + "(" + arg1 + ")\n";
  return code;
};

Blockly.Python["microPython_camera_camera_window_size"] = function (block) {
  var X =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var Y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  Blockly.Python.imports_["sensor"] = "import sensor";
  var code = `sensor.set_windowing(${X},${Y})`;
  return code;
};

Blockly.Python["microPython_camera_camera_settings"] = function (block) {
  var arg0 = block.getFieldValue("SETTING") || "width";
  Blockly.Python.imports_["sensor"] = "import sensor";
  var code = `sensor.${arg0}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// camera end
Blockly.Python["microPython_WiFi_WiFi_Init"] = function (block) {
  var code =
    "from fpioa_manager import fm\n" +
    "import network\n" +
    "\n" +
    "fm.register(25,fm.fpioa.GPIOHS10, force=True)#cs\n" +
    "fm.register(8,fm.fpioa.GPIOHS11, force=True)#rst\n" +
    "fm.register(9,fm.fpioa.GPIOHS12, force=True)#rdy\n" +
    "fm.register(28,fm.fpioa.GPIOHS13, force=True)#mosi\n" +
    "fm.register(26,fm.fpioa.GPIOHS14, force=True)#miso\n" +
    "fm.register(27,fm.fpioa.GPIOHS15, force=True)#sclk\n" +
    "nic = network.ESP32_SPI(cs=fm.fpioa.GPIOHS10,rst=fm.fpioa.GPIOHS11,rdy=fm.fpioa.GPIOHS12, mosi=fm.fpioa.GPIOHS13,miso=fm.fpioa.GPIOHS14,sclk=fm.fpioa.GPIOHS15)\n";
  return code;
};

Blockly.Python["microPython_WiFi_WiFi_Scan"] = function (block) {
  var code = "nic.scan()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_WiFi_WiFi_Op_mode"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "SSID",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "ABC";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "PASSWORD",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "12345678";

  var code = "nic.enable_ap(" + arg0 + "," + arg1 + ")\n";
  return code;
};

Blockly.Python["microPython_WiFi_WiFi_Connect"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "SSID",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "ABC";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "PASSWORD",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "12345678";

  var code = "nic.connect(" + arg0 + "," + arg1 + ")\n";
  return code;
};

Blockly.Python["microPython_WiFi_WiFi_Disconnect"] = function (block) {
  var code = "nic.disconnect()\n";
  return code;
};

Blockly.Python["microPython_WiFi_WiFi_Connection_info"] = function (block) {
  var arg0 = block.getFieldValue("INFORMATION") || "config";
  arg0 = arg0.replace(/['"]/g, "");
  var code = "nic." + arg0 + "()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_WiFi_WiFi_ping"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "ADDRESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "ABC";
  var code = "nic.ping(" + arg0 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_Audio_sound_init"] = function (block) {
  var arg0 = block.getFieldValue("STATE") || "1";
  var code =
    "from fpioa_manager import fm\n" +
    "from Maix import GPIO\n" +
    "\n" +
    "fm.register(32, fm.fpioa.GPIO1)\n" +
    "voice_en = GPIO(GPIO.GPIO1, GPIO.OUT)\n" +
    "voice_en.value(" +
    arg0 +
    ")\n";
  return code;
};

Blockly.Python["microPython_Audio_Audio_Volume"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "VOLUME",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "50";

  var code = "myAudio.volume(" + arg0 + ")\n";
  return code;
};

Blockly.Python["microPython_Audio_Audio_Play"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "SOUND_NAME",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "50";

  var code =
    "from fpioa_manager import fm\n" +
    "from Maix import I2S\n" +
    "import audio\n" +
    "fm.register(33, fm.fpioa.I2S0_WS)\n" +
    "fm.register(34, fm.fpioa.I2S0_OUT_D1)\n" +
    "fm.register(35, fm.fpioa.I2S0_SCLK)\n" +
    "i2s = I2S(I2S.DEVICE_0)\n" +
    "i2s.channel_config(I2S.CHANNEL_1, I2S.TRANSMITTER, resolution=I2S.RESOLUTION_16_BIT, cycles=I2S.SCLK_CYCLES_32, align_mode=I2S.RIGHT_JUSTIFYING_MODE)\n" +
    "myAudio = audio.Audio(path=" +
    arg0 +
    ")\n" +
    "i2s.set_sample_rate(myAudio.play_process(i2s)[1])\n";
  return code;
};

Blockly.Python["microPython_Audio_Audio_Play_Status"] = function (block) {
  var code = "myAudio.play()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_Audio_Audio_Play_end"] = function (block) {
  var code = "myAudio.finish()\n";
  return code;
};

Blockly.Python["microPython_Video_Video_Volume"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "VOLUME",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "50";
  var code = "myVideo.volume(" + arg0 + ")\n";
  return code;
};

Blockly.Python["microPython_Video_Video_Play"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "VIDEO_NAME",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.avi";
  var code =
    "from fpioa_manager import fm\n" +
    "from Maix import I2S\n" +
    "from Maix import GPIO\n" +
    "import video\n" +
    "\n" +
    "fm.register(2, fm.fpioa.GPIO1)\n" +
    "GPIO(GPIO.GPIO1, GPIO.OUT).value(1)\n" +
    "fm.register(33, fm.fpioa.I2S0_WS)\n" +
    "fm.register(34, fm.fpioa.I2S0_OUT_D1)\n" +
    "fm.register(35, fm.fpioa.I2S0_SCLK)\n" +
    "i2s = I2S(I2S.DEVICE_0)\n" +
    "i2s.channel_config(I2S.CHANNEL_1, I2S.TRANSMITTER, resolution=I2S.RESOLUTION_16_BIT, cycles=I2S.SCLK_CYCLES_32, align_mode=I2S.RIGHT_JUSTIFYING_MODE)\n" +
    "myVideo = video.open(" +
    arg0 +
    ")\n";
  return code;
};

Blockly.Python["microPython_Video_Video_Play_Status"] = function (block) {
  var code = "myVideo.play()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_Video_Video_Play_end"] = function (block) {
  var code = "myVideo.__del__()\n";
  return code;
};

Blockly.Python["microPython_Video_Video_recording"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "PATH",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "/sd/main.avi";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "FPS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "RATIO",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";
  var arg4 = block.getFieldValue("STATE") || "1";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "FRE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "44100";

  var code =
    "import video\n" +
    "\n" +
    "myRecord = video.open(" +
    arg1 +
    ", record=True, interval=1000000 // " +
    arg2 +
    ", quality=" +
    arg3 +
    ", audio=" +
    arg4 +
    ", sample_rate=" +
    arg5 +
    ")\n";
  return code;
};
Blockly.Python["microPython_Video_Video_rec_obj"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "OBJ",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "None";
  var code = "myRecord.record(" + arg1 + ")\n";
  return code;
};

Blockly.Python["microPython_Video_Video_rec_end"] = function (block) {
  var code = "myRecord.record_finish()\n";
  return code;
};

Blockly.Python["microPython_ImageProcess_getImagePath"] = function (block) {
  var filePath =
    Blockly.Python.valueToCode(
      block,
      "FILE_PATH",
      Blockly.Python.ORDER_ATOMIC
    ) || " ";
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${filePath})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_saveImage"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var f_path =
    Blockly.Python.valueToCode(
      block,
      "FILE_PATH",
      Blockly.Python.ORDER_ATOMIC
    ) || "'test.jpg'";
  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.save(${f_path})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_clearImage"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "TARGET", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.clear()\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_getImagePoint"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var xCordinate =
    Blockly.Python.valueToCode(
      block,
      "xCordinate",
      Blockly.Python.ORDER_ATOMIC
    ) || " ";
  var yCordinate =
    Blockly.Python.valueToCode(
      block,
      "yCordinate",
      Blockly.Python.ORDER_ATOMIC
    ) || " ";
  xCordinate = xCordinate.replace(/['"]/g, "");
  yCordinate = yCordinate.replace(/['"]/g, "");

  var code = `${img}.get_pixel(${xCordinate},${yCordinate})\n`;
  Blockly.Python.imports_["image"] = "import image";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_getModification"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var x =
    Blockly.Python.valueToCode(block, "x", Blockly.Python.ORDER_ATOMIC) || " ";
  var y =
    Blockly.Python.valueToCode(block, "y", Blockly.Python.ORDER_ATOMIC) || " ";
  var R =
    Blockly.Python.valueToCode(block, "R", Blockly.Python.ORDER_ATOMIC) || " ";
  var G =
    Blockly.Python.valueToCode(block, "G", Blockly.Python.ORDER_ATOMIC) || " ";
  var B =
    Blockly.Python.valueToCode(block, "B", Blockly.Python.ORDER_ATOMIC) || " ";

  x = x.replace(/['"]/g, "");
  y = y.replace(/['"]/g, "");
  R = R.replace(/['"]/g, "");
  G = G.replace(/['"]/g, "");
  B = B.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.set_pixel(${x},${y},(${R},${G},${B}))\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_copyxywh"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var x =
    Blockly.Python.valueToCode(block, "x", Blockly.Python.ORDER_ATOMIC) || " ";
  var y =
    Blockly.Python.valueToCode(block, "y", Blockly.Python.ORDER_ATOMIC) || " ";
  var w =
    Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_ATOMIC) || " ";
  var h =
    Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_ATOMIC) || " ";
  Blockly.Python.imports_["image"] = "import image";
  x = x.replace(/['"]/g, "");
  y = y.replace(/['"]/g, "");
  w = w.replace(/['"]/g, "");
  h = h.replace(/['"]/g, "");
  var code = `${img}.copy(${x},${y},${w},${h})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_imageCompression"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var Ratio =
    Blockly.Python.valueToCode(block, "Ratio", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.compress(quality = ${Ratio}),1\n`;
  // return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_getImageByte"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.to_bytes(),1\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_getImageWidth"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  Blockly.Python.imports_["image"] = "import image";
  var STATE = block.getFieldValue("STATE");
  var code = `${img}.${STATE}(),1\n`;
  // return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_changeColor"] = function (block) {
  var img =
    Blockly.Python.valueToCode(block, "Clear", Blockly.Python.ORDER_ATOMIC) ||
    " ";
  var STATE = block.getFieldValue("STATE");
  Blockly.Python.imports_["image"] = "import image";
  var code = `${img}.to_${STATE}()\n`;
  // return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_aprilTagParse"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "None";
  var arg2 = block.getFieldValue("STATE") || "rect";
  var code = `(${arg1}).${arg2}()`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_qrcodeParse"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "None";
  var arg2 = block.getFieldValue("STATE") || "rect";
  var code = `(${arg1}).${arg2}()`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python["microPython_ImageProcess_barcodeParse"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "None";
  var arg2 = block.getFieldValue("STATE") || "rect";
  var code = `(${arg1}).${arg2}()`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_aprilTagRec"] = function (block) {
  var clear =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "image";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  Blockly.Python.imports_["image"] = "import image";
  arg1 = arg2.replace(/['"]/g, "");
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  // var code = "image.Image().find_apriltags(("+arg1+","+arg2+","+arg3+","+arg4+"))"
  var code = `${clear}.find_apriltags((${arg1},${arg2},${arg3},${arg4}))`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_qrCodeRec"] = function (block) {
  var clear =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "image";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  Blockly.Python.imports_["image"] = "import image";
  arg1 = arg2.replace(/['"]/g, "");
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  // var code = "image.Image().find_qrcodes(("+arg1+","+arg2+","+arg3+","+arg4+"))"
  var code = `${clear}.find_qrcodes((${arg1},${arg2},${arg3},${arg4}))`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_barCodeRec"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";

  arg1 = arg2.replace(/['"]/g, "");
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image().find_barcodes((${arg1},${arg2},${arg3},${arg4}))`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_colorResolution"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "P1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0.5";
  arg2 = arg2.replace(/['"]/g, "");

  var arg3 = block.getFieldValue("STATE") || "GRAYSCALE";

  var code = `${arg1}.get_percentile(${arg2}).${arg3}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_traceParse"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 = block.getFieldValue("STATE") || "";
  var code = `${arg1}.${arg2}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_colorRecognition"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "w",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "h",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");

  var code = `image.Image(${arg1}).get_histogram(roi=(${arg2},${arg3},${arg4},${arg5}))`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_colorTracking"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "a",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "b",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "c",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "d",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "e",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "f",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg10 =
    Blockly.Python.valueToCode(
      block,
      "w",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "2000";
  var arg11 =
    Blockly.Python.valueToCode(
      block,
      "h",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "2000";
  var arg12 =
    Blockly.Python.valueToCode(
      block,
      "fr",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";
  var arg13 =
    Blockly.Python.valueToCode(
      block,
      "fp",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";
  var arg14 =
    Blockly.Python.valueToCode(
      block,
      "merged",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg15 = block.getFieldValue("STATE") || "close";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  arg9 = arg9.replace(/['"]/g, "");
  arg10 = arg10.replace(/['"]/g, "");
  arg11 = arg11.replace(/['"]/g, "");
  arg12 = arg12.replace(/['"]/g, "");
  arg13 = arg13.replace(/['"]/g, "");
  arg14 = arg14.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  // var code = "image.Image("+arg1+").find_blobs([("+arg2+","+arg3+","+arg4+","+arg5+","+arg6+","+arg7+")], roi=("+arg8+","+arg9+","+arg10+","+arg11+"), area_threshold="+arg12+", pixels_threshold="+arg13+", merge="+arg15+", margin="+arg14+")"
  var code = `image.Image(${arg1}).find_blobs([(${arg2},${arg3},${arg4},${arg5},${arg6},${arg7})], roi=(${arg8},${arg9},${arg10},${arg11}), area_threshold=${arg12}, pixels_threshold=${arg13}, merge=${arg15}, margin=${arg14})`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_circleRecognition"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "width",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "height",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "threshold",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "2000";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "Rmin",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "2000";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "Rmax",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "2";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "stepsize",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "100";
  var arg10 =
    Blockly.Python.valueToCode(
      block,
      "xMerge",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";
  var arg11 =
    Blockly.Python.valueToCode(
      block,
      "yMerge",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "100";
  var arg12 =
    Blockly.Python.valueToCode(
      block,
      "rMerge",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "10";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  arg9 = arg9.replace(/['"]/g, "");
  arg10 = arg10.replace(/['"]/g, "");
  arg11 = arg11.replace(/['"]/g, "");
  arg12 = arg12.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  // var code = "image.Image("+arg1+").find_circles(("+arg2+","+arg3+","+arg4+","+arg5+"0, threshold="+arg6+", r_min="+arg7+", r_max="+arg8+", r_step="+arg9+", x_margin="+arg10+", y_margin="+arg11+", r_margin="+arg12+")"
  var code = `image.Image(${arg1}).find_circles((${arg2},${arg3},${arg4},${arg5}0), threshold=${arg6}, r_min=${arg7}, r_max=${arg8}, r_step=${arg9}, x_margin=${arg10}, y_margin=${arg11}, r_margin=${arg12})`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_rectangleRecognition"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "threshold",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1000";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");

  // var code = "image.Image("+arg1+").find_rects(("+arg2+","+arg3+","+arg4+","+arg5+"), "+arg6+")"
  var code = `image.Image(${arg1}).find_rects((${arg2},${arg3},${arg4},${arg5}), ${arg6})`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_segmentRecognition"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "spacing",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "angle",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "25";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");

  // var code = "image.Image("+arg1+").find_line_segments(("+arg2+","+arg3+","+arg4+","+arg5+"), merge_distance="+arg6+", max_theta_difference="+arg7+")"
  var code = `image.Image(${arg1}).find_line_segments((${arg2},${arg3},${arg4},${arg5}), merge_distance=${arg6}, max_theta_difference=${arg7})`;

  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python["microPython_ImageProcess_lineRecognition"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "spacing",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "angle",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "25";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "slope",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "25";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");

  // var code = "image.Image("+arg1+").find_lines(("+arg2+", "+arg3+", "+arg4+", "+arg5+"),  threshold="+arg6+", theta_margin="+arg7+", rho_margin="+arg8+")"
  var code = `image.Image(${arg1}).find_lines((${arg2}, ${arg3}, ${arg4}, ${arg5}), threshold=${arg6}, theta_margin=${arg7}, rho_margin=${arg8})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ImageProcess_fuzzyfilterConvolution"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "kernel",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 = block.getFieldValue("STATE") || "open";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "compensation",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "3";
  Blockly.Python.imports_["image"] = "import image";
  arg2 = arg2.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  // var code = "image.Image("+arg1+").mean("+arg2+", threshold="+arg3+", offset="+arg4+")\n";
  var code = `image.Image(${arg1}).mean(${arg2}, threshold=${arg3}, offset=${arg4})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_histogramEqualizationAdaptive"] =
  function (block) {
    var arg1 =
      Blockly.Python.valueToCode(
        block,
        "Clear",
        Blockly.Python.ORDER_FUNCTION_CALL
      ) || "";
    var arg2 =
      Blockly.Python.valueToCode(
        block,
        "contrast",
        Blockly.Python.ORDER_FUNCTION_CALL
      ) || "3";
    var arg3 = block.getFieldValue("STATE") || "open";
    arg2 = arg2.replace(/['"]/g, "");

    Blockly.Python.imports_["image"] = "import image";
    var code = `image.Image(${arg1}).histeq(adaptive=${arg3}, clip_limit=${arg2})\n`;
    return code;
  };

Blockly.Python["microPython_ImageProcess_corruptedConvolution"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "P1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "P2",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).erode(${arg2}, ${arg3})\n`;

  return code;
};

Blockly.Python["microPython_ImageProcess_dilatedConvolution"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "P1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "P2",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).dilate(${arg2}, ${arg3})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_correctionScalling"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "P1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "P2",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1.0";
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).lens_corr(${arg2}, ${arg3})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_getImageFlipPosition"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 = block.getFieldValue("STATE") || "open";
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).linpolar(reverse=${arg2})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_getImageReverse"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).invert()\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_filterDiffrence"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "P1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0.05";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "P2",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0.05";
  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).cartoon(seed_threshold=${arg2}, floating_threshold=${arg3})\n`;

  return code;
};

Blockly.Python["microPython_ImageProcess_drawCircle"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "radius",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "7";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  var arg9 = block.getFieldValue("STATE") || "open";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");

  var code = `image.Image(${arg1}).draw_circle(${arg2}, ${arg3}, ${arg4}, (${arg5}, ${arg6}, ${arg7}), ${arg8}, ${arg9})\n`;

  return code;
};

Blockly.Python["microPython_ImageProcess_drawCross"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "extend",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "5";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  Blockly.Python.imports_["image"] = "import image";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  var code = `image.Image(${arg1}).draw_cross((${arg2},${arg3}), (${arg4}),${arg5},${arg6}), ${arg7}, ${arg8})`;
  return code;
};

Blockly.Python["microPython_ImageProcess_drawArrow"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "5";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  arg9 = arg9.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).draw_arrow((${arg2},${arg3},${arg4},${arg5}),(${arg6},${arg7},${arg8}),${arg9})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_drawCharacter"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "content",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "Hello";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "fontSize",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "x_spacing",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg10 =
    Blockly.Python.valueToCode(
      block,
      "y_spacing",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg11 = block.getFieldValue("STATE") || "open";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  arg9 = arg9.replace(/['"]/g, "");
  arg10 = arg10.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${arg1}).draw_string(${arg2}, ${arg3}, "${arg4}", (${arg5}, ${arg6}, ${arg7}), ${arg8}, ${arg9}, ${arg10}, ${arg11})\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_ImageFreeFont"] = function (block) {
  Blockly.Python.imports_["image"] = "import image";
  var code = "image.font_free()\n";
  return code;
};

Blockly.Python["microPython_ImageProcess_loadImage"] = function (block) {
  var arg1 = block.getFieldValue("STATE") || "open";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "path",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 = arg1.slice(0, 2);
  arg2 = arg2.replace(/['"]/g, "");
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.font_load(image.UTF8, ${arg3}, ${arg3}, "${arg2}")\n`;
  return code;
};

Blockly.Python["microPython_ImageProcess_drawImage"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "IMAGEFIRST",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "IMAGESECOND ",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "xZoom",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "yZoom",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";

  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code =
    "image.Image(" +
    arg1 +
    ").draw_image(image.Image(" +
    arg2 +
    "), " +
    arg3 +
    ", " +
    arg4 +
    ", " +
    arg5 +
    ", " +
    arg6 +
    ")\n";
  return code;
};
Blockly.Python["microPython_ImageProcess_drawline"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "Clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y0",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "x1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "y1",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");
  arg9 = arg9.replace(/['"]/g, "");
  Blockly.Python.imports_["image"] = "import image";
  var code =
    "image.Image(" +
    arg1 +
    ").draw_line((" +
    arg2 +
    ", " +
    arg3 +
    ", " +
    arg4 +
    ", " +
    arg5 +
    "), (" +
    arg6 +
    ", " +
    arg7 +
    ", " +
    arg8 +
    "), " +
    arg9 +
    ")\n";
  return code;
};
Blockly.Python["microPython_ImageProcess_drawRectangle"] = function (block) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "image.Image()";
  var arg2 =
    Blockly.Python.valueToCode(
      block,
      "x",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg3 =
    Blockly.Python.valueToCode(
      block,
      "y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "0";
  var arg4 =
    Blockly.Python.valueToCode(
      block,
      "w",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "320";
  var arg5 =
    Blockly.Python.valueToCode(
      block,
      "h",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "240";
  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || 1;

  var arg10 = block.getFieldValue("STATE") || "open";

  arg2 = arg2.replace(/['"]/g, "");
  arg3 = arg3.replace(/['"]/g, "");
  arg4 = arg4.replace(/['"]/g, "");
  arg5 = arg5.replace(/['"]/g, "");
  arg6 = arg6.replace(/['"]/g, "");
  arg7 = arg7.replace(/['"]/g, "");
  arg8 = arg8.replace(/['"]/g, "");

  Blockly.Python.imports_["image"] = "import image";
  var code =
    arg1 +
    ".draw_rectangle((" +
    arg2 +
    ", " +
    arg3 +
    ", " +
    arg4 +
    ", " +
    arg5 +
    "), (" +
    arg6 +
    ", " +
    arg7 +
    ", " +
    arg8 +
    "), thickness=" +
    arg9 +
    ", fill=" +
    arg10 +
    ")\n";
  return code;
};
Blockly.Python["microPython_ImageProcess_drawRectangleVaribleType"] = function (
  block
) {
  var arg1 =
    Blockly.Python.valueToCode(
      block,
      "clear",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "image.Image()";
  var arg2 = Blockly.Python.valueToCode(
    block,
    "var",
    Blockly.Python.ORDER_FUNCTION_CALL
  ); // Default to "240"

  var arg6 =
    Blockly.Python.valueToCode(
      block,
      "R",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg7 =
    Blockly.Python.valueToCode(
      block,
      "G",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg8 =
    Blockly.Python.valueToCode(
      block,
      "B",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "255";
  var arg9 =
    Blockly.Python.valueToCode(
      block,
      "THICKNESS",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "1";

  // Retrieve fill state (dropdown field or similar)
  var arg10 = block.getFieldValue("STATE") || "open";
  Blockly.Python.imports_["image"] = "import image";
  var code = `${arg1}.draw_rectangle(${arg2}, (${arg6}, ${arg7}, ${arg8}), thickness=${arg9}, fill=${arg10})\n`;
  return code;
};

// Blockly.Python["microPython_pins_april"] = function (block) {
//   var pin = block.getFieldValue("PIN");
//   var level =Blockly.Python.valueToCode(block,"LEVEL",Blockly.Python.ORDER_FUNCTION_CALL) || "LOW";
//   var code = "pin" + pin + ".write_digital(" + level + ")\n";
//   return code;
// };

Blockly.Python["microPython_ai_loadAiModel"] = function (block) {
  var address =
    Blockly.Python.valueToCode(block, "ADDRESS", Blockly.Python.ORDER_NONE) ||
    "";
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.load(0x${address})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL]; // Return as a REPORTER block
};

Blockly.Python["microPython_ai_loadModelFromPath"] = function (block) {
  var path =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) ||
    '"/sd/test.kmodel"';
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.load(${path})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL]; // Return as a REPORTER block
};

Blockly.Python["microPython_ai_openImage"] = function (block) {
  var filePath =
    Blockly.Python.valueToCode(block, "FILE_PATH", Blockly.Python.ORDER_NONE) ||
    '""';
  Blockly.Python.imports_["image"] = "import image";
  var code = `image.Image(${filePath})`;
  return [code, Blockly.Python.ORDER_ATOMIC]; // Return as a REPORTER block
};

Blockly.Python["microPython_ai_deinit"] = function (block) {
  var model =
    Blockly.Python.valueToCode(block, "MODEL", Blockly.Python.ORDER_NONE) ||
    "None";
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.deinit(${model}),1\n`;
  return code; // Return as a COMMAND block
};

Blockly.Python["microPython_ai_yoloInit"] = function (block) {
  var path =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) || "";
  var THRESHOLD =
    Blockly.Python.valueToCode(block, "THRESHOLD", Blockly.Python.ORDER_NONE) ||
    "0";
  var IOU =
    Blockly.Python.valueToCode(block, "IOU", Blockly.Python.ORDER_NONE) || "0";
  var APO =
    Blockly.Python.valueToCode(block, "APO", Blockly.Python.ORDER_NONE) || "0";
  var ModelData =
    Blockly.Python.valueToCode(block, "ModelData", Blockly.Python.ORDER_NONE) ||
    "[]";
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.init_yolo2(${path}, ${THRESHOLD}, ${IOU}, ${APO},${ModelData}),`;
  return [code, Blockly.Python.ORDER_ATOMIC]; // Return as a COMMAND block
};

Blockly.Python["microPython_ai_yoloRunning"] = function (block) {
  var model =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) ||
    "None";
  var image =
    Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_NONE) || "";
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.run_yolo2(${model}, ${image})`;
  return [code, Blockly.Python.ORDER_ATOMIC]; // Return as a COMMAND block
};

Blockly.Python["microPython_ai_anchor"] = function (block) {
  var modeldata =
    Blockly.Python.valueToCode(block, "ModelData", Blockly.Python.ORDER_NONE) ||
    "1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437, 6.92275, 6.718375, 9.01025";
  Blockly.Python.imports_["KPU"] = "import KPU";
  modeldata = modeldata.replace(/['"]/g, "");
  var code = `(${modeldata})`;
  // return code; // Return as a COMMAND block
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ai_forwardOP"] = function (block) {
  var image =
    Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_NONE) ||
    "None";
  var path =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) || "";
  Blockly.Python.imports_["KPU"] = "import KPU";
  var code = `KPU.run_yolo2(${path}, ${image}),1`;
  return code;
};

Blockly.Python["microPython_ai_resolveObj"] = function (block) {
  var value = block.getFieldValue("STATE");
  var model =
    Blockly.Python.valueToCode(block, "MODEL", Blockly.Python.ORDER_NONE) || "";
  var code = `${model}.${value}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ai_objDet20Init"] = function (block) {
  var model_address =
    Blockly.Python.valueToCode(
      block,
      "MODEL_ADDRESS",
      Blockly.Python.ORDER_NONE
    ) || "None";
  var font_address =
    Blockly.Python.valueToCode(
      block,
      "FONT_ADDRESS",
      Blockly.Python.ORDER_NONE
    ) || "";
  Blockly.Python.imports_["ObjectDetection"] =
    "from ObjectDetection_20 import *";
  var code = `\nObjectDetection_20(${model_address}, ${font_address})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_ai_objDet20Target"] = function (block) {
  var init_model =
    Blockly.Python.valueToCode(
      block,
      "INIT_MODEL",
      Blockly.Python.ORDER_NONE
    ) || "";
  var image =
    Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_NONE) || "";
  var code = `${init_model}.object_detection(${image})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// AI Blocks End

// Speech Recognition Start

Blockly.Python["microPython_SpeechRecognition_asrInit"] = function (block) {
  var address =
    Blockly.Python.valueToCode(block, "ADDRESS", Blockly.Python.ORDER_NONE) ||
    "";
  Blockly.Python.imports_["SpeechRec"] = "from ASR import *";
  if (block.outputConnection && block.outputConnection.targetBlock()) {
    var code = `asr_init(0x${address})`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  } else {
    var code = `asr_init(0x${address}),1`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};

Blockly.Python["microPython_SpeechRecognition_asrConfig"] = function (block) {
  var address =
    Blockly.Python.valueToCode(block, "ADDRESS", Blockly.Python.ORDER_NONE) ||
    "";
  var value =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE) || "";
  var code = `${address}.config(${value})`;
  return code;
};

Blockly.Python["microPython_SpeechRecognition_asrRecognize"] = function (
  block
) {
  var address =
    Blockly.Python.valueToCode(block, "ADDRESS", Blockly.Python.ORDER_NONE) ||
    "";
  if (block.outputConnection && block.outputConnection.targetBlock()) {
    var code = `${address}.recognize()`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  } else {
    var code = `${address}.recognize(),1`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};

Blockly.Python["microPython_SpeechRecognition_speechSelfLearning"] = function (
  block
) {
  Blockly.Python.imports_["SpeechRec"] = "from ASR import *";
  if (block.outputConnection && block.outputConnection.targetBlock()) {
    var code = `maix_isolated_word()`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  } else {
    var code = `maix_isolated_word(),1`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};

Blockly.Python["microPython_SpeechRecognition_loadModelCorpus"] = function (
  block
) {
  var object =
    Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_NONE) ||
    "";
  var corpus =
    Blockly.Python.valueToCode(block, "CORPUS", Blockly.Python.ORDER_NONE) ||
    "";
  var path =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) ||
    "/sd/isolated_word.asr";
  var code = `${object}.loading(${corpus}, ${path})`;
  return code;
};

Blockly.Python["microPython_SpeechRecognition_TrainModelCorpus"] = function (
  block
) {
  var object =
    Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_NONE) ||
    "";
  var corpus =
    Blockly.Python.valueToCode(block, "CORPUS", Blockly.Python.ORDER_NONE) ||
    "";
  var path =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_NONE) ||
    "/sd/isolated_word.asr";
  var code = `${object}.training(${corpus}, ${path})`;
  return code;
};

Blockly.Python["microPython_SpeechRecognition_featureLearningObj"] = function (
  block
) {
  Blockly.Python.imports_["SpeechRec"] = "from ASR import *";
  var address =
    Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_NONE) ||
    "";
  if (block.outputConnection && block.outputConnection.targetBlock()) {
    var code = `${address}.get_result()`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  } else {
    var code = `${address}.get_result(),1`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL]; // Return as a REPORTER block
  }
};

Blockly.Python["microPython_pins_setDigitalOutput"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var level = block.getFieldValue("LEVEL");
  var code = "pin" + pin + ".write_digital(" + level + ")\n";
  return code;
};

Blockly.Python["microPython_pins_pinTouched"] = function (block) {
  var pin = block.getFieldValue("PIN") || "0";
  var code = "pin" + pin + ".is_touched()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_display_showImage"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  arg0 = arg0.replace(/1/g, "9");
  arg0 =
    arg0.slice(0, 5) +
    ":" +
    arg0.slice(5, 10) +
    ":" +
    arg0.slice(10, 15) +
    ":" +
    arg0.slice(15, 20) +
    ":" +
    arg0.slice(20, 25);
  var code = "display.show(Image('" + arg0 + "'))\n";
  return code;
};

Blockly.Python["microPython_display_showImageUntil"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC) ||
    "0";
  var arg1 =
    Blockly.Python.valueToCode(block, "TIME", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  arg0 = arg0.replace(/1/g, "9");
  arg0 =
    arg0.slice(0, 5) +
    ":" +
    arg0.slice(5, 10) +
    ":" +
    arg0.slice(10, 15) +
    ":" +
    arg0.slice(15, 20) +
    ":" +
    arg0.slice(20, 25);

  var code =
    "display.show(Image('" +
    arg0 +
    "'))\n" +
    "sleep(float(" +
    arg1 +
    ") * 1000)\n" +
    "display.clear()\n";
  return code;
};

Blockly.Python["microPython_display_show"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "display.scroll(str(" + arg0 + "), wait=False, loop=False)\n";
  return code;
};

Blockly.Python["microPython_display_showUntilScrollDone"] = function (block) {
  var arg0 =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "display.scroll(str(" + arg0 + "), wait=True, loop=False)\n";
  return code;
};

Blockly.Python["microPython_display_clearDisplay"] = function () {
  var code = "display.clear()\n";
  return code;
};

Blockly.Python["microPython_display_lightPixelAt"] = function (block) {
  var sta = block.getFieldValue("STATE");
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";

  if (sta === "off") {
    sta = 0;
  } else {
    sta = 9;
  }

  var code = "display.set_pixel(int(" + x + "), int(" + y + "), " + sta + ")\n";
  return code;
};

Blockly.Python["microPython_display_showOnPiexlbrightness"] = function (block) {
  var brt =
    Blockly.Python.valueToCode(
      block,
      "BRT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "9";
  var x =
    Blockly.Python.valueToCode(
      block,
      "X",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var y =
    Blockly.Python.valueToCode(
      block,
      "Y",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";

  var code = "display.set_pixel(int(" + x + "), int(" + y + "), " + brt + ")\n";
  return code;
};

Blockly.Python["microPython_display_menu_ledBrightness"] = function (block) {
  var code = block.getFieldValue("ledBrightness") || "9";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_buttonIsPressed"] = function (block) {
  var key = block.getFieldValue("KEY");

  var code = "button_" + key + ".is_pressed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_gestureIsX"] = function (block) {
  var sta = block.getFieldValue("STA");

  var code = "accelerometer.is_gesture('" + sta + "')";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_axisAcceleration"] = function (block) {
  var axis = block.getFieldValue("AXIS");

  var code = "accelerometer.get_" + axis + "()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_compassAngle"] = function () {
  var code = "compass.heading()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_compassMagneticDensity"] = function () {
  var code = "compass.get_field_strength()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_calibrateCompass"] = function () {
  var code = "compass.calibrate()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_lightLevel"] = function () {
  var code = "display.read_light_level()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_temperature"] = function () {
  var code = "temperature()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_sensor_runningTime"] = function () {
  var code = "running_time()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_wireless_openWirelessCommunication"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.on()\n";
  return code;
};

Blockly.Python["microPython_wireless_closeWirelessCommunication"] =
  function () {
    Blockly.Python.imports_["radio"] = "import radio";
    var code = "radio.off()\n";
    return code;
  };

Blockly.Python["microPython_wireless_resetWirelessCommunication"] =
  function () {
    Blockly.Python.imports_["radio"] = "import radio";
    var code = "radio.reset()\n";
    return code;
  };

Blockly.Python["microPython_wireless_sendWirelessMessage"] = function (block) {
  Blockly.Python.imports_["radio"] = "import radio";

  var msg =
    Blockly.Python.valueToCode(
      block,
      "TEXT",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "";
  var code = "radio.send(str(" + msg + "))\n";
  return code;
};

Blockly.Python["microPython_wireless_receiveWirelessMessage"] = function () {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.receive()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["microPython_wireless_setWirelessCommunicationChannel"] =
  function (block) {
    Blockly.Python.imports_["radio"] = "import radio";

    var ch = block.getFieldValue("CH");
    var code = "radio.config(channel = " + ch + ")\n";
    return code;
  };

Blockly.Python["microPython_pins_valuePrint"] = function (block) {
  var Value =
    Blockly.Python.valueToCode(
      block,
      "VALUE",
      Blockly.Python.ORDER_FUNCTION_CALL
    ) || "hello bixcode";
  var code = "print(" + Value + ")\n";
  return code;
};
