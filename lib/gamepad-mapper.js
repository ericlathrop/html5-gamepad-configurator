export default class GamedpadMapper {
  constructor(gamepad) {
    this.gamepad = gamepad;
    this.centeredAxes = gamepad.gamepad.axes.slice(0);
  }

  beginMappingButton(name) {
    this.mappingButton = name;
  }

  cancelMappingButton() {
    this.mappingButton = undefined;
  }

  update() {
    if (this.mappingButton) {
      var mapping = this.detectButtonMapping();
      if (mapping) {
        if (mapping.index) {
          this.clearMappingButton(mapping.index);
        } else if (mapping.axis) {
          this.clearMappingAxis(mapping.axis, mapping.direction);
        }
        this.gamepad.mapping.buttons[this.mappingButton] = mapping;
        this.cancelMappingButton();
      }
    }
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

  clearMappingAxis(axis, direction) {
    var mappings = this.gamepad.mapping.buttons;
    var names = Object.keys(mappings);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (mappings[name].axis === axis && mappings[name].direction === direction) {
        delete mappings[name];
      }
    }
  }

  clearMappingButton(index) {
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
