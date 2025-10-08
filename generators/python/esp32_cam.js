/**
 * ESP32-CAM Blockly Python Generator
 *
 * This file defines custom blocks and generates corresponding Python code
 * for ESP32-CAM functionalities like camera initialization, image capture,
 * video streaming, GPIO control, and HTTP requests.
 */

"use strict";

goog.provide("Blockly.Python.esp32_cam");

goog.require("Blockly.Python");

// ESP32-CAM Camera Initialization Block
Blockly.Python["esp32_cam_init"] = function (block) {
  var code = `
# Initialize ESP32-CAM
from esp_camera import ESP32Camera

camera = ESP32Camera()
camera.init()
  `;
  return code;
};

// Capture Image Block
Blockly.Python["esp32_cam_capture"] = function (block) {
  var imagePath =
    Blockly.Python.valueToCode(block, "PATH", Blockly.Python.ORDER_ATOMIC) ||
    "'/image.jpg'";

  var code = `
# Capture an image and save to file
img = camera.capture()
with open(${imagePath}, 'wb') as img_file:
    img_file.write(img)
  `;
  return code;
};

// Stream Video Block
Blockly.Python["esp32_cam_stream"] = function (block) {
  var streamPath =
    Blockly.Python.valueToCode(
      block,
      "STREAM_PATH",
      Blockly.Python.ORDER_ATOMIC
    ) || "'/stream'";

  var code = `
# Start video stream from ESP32-CAM
camera.stream(${streamPath})
  `;
  return code;
};

// Set Digital Output (GPIO Control)
Blockly.Python["esp32_cam_set_digital_output"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var level =
    Blockly.Python.valueToCode(block, "LEVEL", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  var code = `
# Set GPIO pin output on ESP32-CAM
pin${pin}.value(${level})
  `;
  return code;
};

// Read Digital Input (GPIO)
Blockly.Python["esp32_cam_read_digital_input"] = function (block) {
  var pin = block.getFieldValue("PIN");

  var code = `
# Read digital input from GPIO pin on ESP32-CAM
pin_value = pin${pin}.value()
  `;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Read Analog Input Block
Blockly.Python["esp32_cam_read_analog_input"] = function (block) {
  var pin = block.getFieldValue("PIN");

  var code = `
# Read analog input from GPIO pin on ESP32-CAM
pin_value = adc${pin}.read()
  `;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Control Flashlight/LED Block
Blockly.Python["esp32_cam_control_flashlight"] = function (block) {
  var pin = block.getFieldValue("PIN");
  var state =
    Blockly.Python.valueToCode(block, "STATE", Blockly.Python.ORDER_ATOMIC) ||
    "0";

  var code = `
# Control LED or Flashlight on ESP32-CAM
pin${pin}.value(${state})
  `;
  return code;
};

// Wi-Fi Setup Block
Blockly.Python["esp32_cam_wifi_setup"] = function (block) {
  var ssid =
    Blockly.Python.valueToCode(block, "SSID", Blockly.Python.ORDER_ATOMIC) ||
    "'SSID'";
  var password =
    Blockly.Python.valueToCode(
      block,
      "PASSWORD",
      Blockly.Python.ORDER_ATOMIC
    ) || "'PASSWORD'";

  var code = `
# Connect ESP32-CAM to Wi-Fi network
import network

wifi = network.WLAN(network.STA_IF)
wifi.active(True)
wifi.connect(${ssid}, ${password})

while not wifi.isconnected():
    pass  # Wait for connection
  `;
  return code;
};

// HTTP POST Request Block
Blockly.Python["esp32_cam_http_post"] = function (block) {
  var url =
    Blockly.Python.valueToCode(block, "URL", Blockly.Python.ORDER_ATOMIC) ||
    "'http://example.com'";
  var data =
    Blockly.Python.valueToCode(block, "DATA", Blockly.Python.ORDER_ATOMIC) ||
    "'{}'";

  var code = `
# Send HTTP POST request
import urequests

response = urequests.post(${url}, data=${data})
print(response.text)
response.close()
  `;
  return code;
};

// HTTP GET Request Block
Blockly.Python["esp32_cam_http_get"] = function (block) {
  var url =
    Blockly.Python.valueToCode(block, "URL", Blockly.Python.ORDER_ATOMIC) ||
    "'http://example.com'";

  var code = `
# Send HTTP GET request
import urequests

response = urequests.get(${url})
print(response.text)
response.close()
  `;
  return code;
};

// Set Camera Resolution Block
Blockly.Python["esp32_cam_set_resolution"] = function (block) {
  var resolution = block.getFieldValue("RESOLUTION") || "640x480";

  var code = `
# Set camera resolution
camera.set_resolution('${resolution}')
  `;
  return code;
};

// Set Camera Frame Rate Block
Blockly.Python["esp32_cam_set_frame_rate"] = function (block) {
  var frameRate = block.getFieldValue("FRAME_RATE") || "30";

  var code = `
# Set camera frame rate
camera.set_frame_rate(${frameRate})
  `;
  return code;
};

// Set Camera Brightness Block
Blockly.Python["esp32_cam_set_brightness"] = function (block) {
  var brightness =
    Blockly.Python.valueToCode(
      block,
      "BRIGHTNESS",
      Blockly.Python.ORDER_ATOMIC
    ) || "0";

  var code = `
# Adjust camera brightness
camera.set_brightness(${brightness})
  `;
  return code;
};
