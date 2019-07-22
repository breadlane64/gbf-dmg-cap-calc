import React from 'react';

// Options for a select input generated automatically from a hashmap.
class SelectOptions extends React.Component {
  render() {
    let options = [];
    let nameProperty = this.props.nameProperty;
    for (let [key, elem] of Object.entries(this.props.hashmap)) {
      options.push(
        <option key={key} value={key}>{elem[nameProperty]}</option>
      );
    }

    return (
      <>{options}</>
    );
  }
}

SelectOptions.defaultProps = {
  nameProperty: "name",
};

export default SelectOptions;
