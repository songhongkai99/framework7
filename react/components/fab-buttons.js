import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7FabButtons extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  get classes() {
    const self = this;
    return Utils.classNames(self.props.className, {
      'fab-buttons': true,
      [`fab-buttons-${ self.props.position }`]: true
    }, Mixins.colorClasses(self));
  }
  render() {
    return React.createElement('div', {
      id: this.props.id,
      style: this.props.style,
      className: this.classes
    }, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
}
__reactComponentSetProps(F7FabButtons, {
  id: [
    String,
    Number
  ],
  position: {
    type: String,
    default: 'top'
  },
  ...Mixins.colorProps
});
export default F7FabButtons;