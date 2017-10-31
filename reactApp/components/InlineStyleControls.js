import React from 'react';
import StyleButton from './StyleButton';
import ColorDropDown from './ColorDropDown';
import FontSizeDropDown from './FontSizeDropDown';
var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'}

];


const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <span>
    <div className="RichEditor-controls" style={{display: 'inline'}}>
      {INLINE_STYLES.map(type => {
        return (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        );
      }
      )}
      <div style={{marginTop: '-3px', display: 'inline'}}>
        <ColorDropDown onToggle={props.onToggle}/>
      </div>
    </div>
      <FontSizeDropDown onToggle={props.onToggle} />
    </span>
  );
};

export default InlineStyleControls;