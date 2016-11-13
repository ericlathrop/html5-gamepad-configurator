export default class GamedpadMapper {
  constructor(gamepad) {
    this.gamepad = gamepad;
    this.centeredAxes = gamepad.gamepad.axes.slice(0);
    this.beginMappingAxis = this.beginMappingAxis.bind(this);
    this.beginMappingButton = this.beginMappingButton.bind(this);
    this.cancelMapping = this.cancelMapping.bind(this);
  }

  beginMappingAxis(name) {
    if (name === this.mappingTarget) {
      this.cancelMapping();
      return;
    }
    this.centeredAxes = this.gamepad.gamepad.axes.slice(0);
    this.mappingType = "axis";
    this.mappingTarget = name;
  }

  beginMappingButton(name) {
    if (name === this.mappingTarget) {
      this.cancelMapping();
      return;
    }
    this.centeredAxes = this.gamepad.gamepad.axes.slice(0);
    this.mappingType = "button";
    this.mappingTarget = name;
  }

  cancelMapping() {
    this.mappingType = undefined;
    this.mappingTarget = undefined;
  }

  update() {
    var mapping;
    if (this.mappingType === "button") {
      mapping = this.detectButtonMapping();
      if (mapping) {
        if (mapping.index !== undefined) {
          this.clearButtonMappingButton(mapping.index);
        } else if (mapping.axis !== undefined) {
          this.clearButtonMappingAxis(mapping.axis, mapping.direction);
        }
        this.gamepad.mapping.buttons[this.mappingTarget] = mapping;
        this.cancelMapping();
      }
    } else if (this.mappingType === "axis") {
      mapping = this.detectAxisMapping();
      if (mapping) {
        this.clearAxisMapping(mapping.index);
        this.gamepad.mapping.axes[this.mappingTarget] = mapping;
        this.cancelMapping();
      }
    }
  }

  detectAxisMapping() {
    var hardware = this.gamepad.gamepad;
    for (var i = 0; i < hardware.axes.length; i++) {
      var val = hardware.axes[i];
      var changeFromCentered = Math.abs(val - this.centeredAxes[i]);
      if (val < -0.75 && changeFromCentered > 0.5) {
        return { index: i };
      } else if (val > 0.75 && changeFromCentered > 0.5) {
        return { index: i };
      }
    }
    return undefined;
  }

  detectButtonMapping() {
    var hardware = this.gamepad.gamepad;
    for (var i = 0; i < hardware.buttons.length; i++) {
      if (hardware.buttons[i].pressed) {
        return { index: i };
      }
    }
    for (i = 0; i < hardware.axes.length; i++) {
      var val = hardware.axes[i];
      var changeFromCentered = Math.abs(val - this.centeredAxes[i]);
      if (val < -0.75 && changeFromCentered > 0.5) {
        return { axis: i, direction: -1 };
      } else if (val > 0.75 && changeFromCentered > 0.5) {
        return { axis: i, direction: 1 };
      }
    }
    return undefined;
  }

  clearAxisMapping(axis) {
    var mappings = this.gamepad.mapping.axes;
    var names = Object.keys(mappings);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (mappings[name].index === axis) {
        delete mappings[name];
      }
    }
  }

  clearButtonMappingAxis(axis, direction) {
    var mappings = this.gamepad.mapping.buttons;
    var names = Object.keys(mappings);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (mappings[name].axis === axis && mappings[name].direction === direction) {
        delete mappings[name];
      }
    }
  }

  clearButtonMappingButton(index) {
    var mappings = this.gamepad.mapping.buttons;
    var names = Object.keys(mappings);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (mappings[name].index === index) {
        delete mappings[name];
      }
    }
  }
}
