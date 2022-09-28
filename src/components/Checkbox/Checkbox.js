import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  label {
    display: flex;
    align-items: center;
    align-content: center;

    .CheckboxLabel {
      padding-left: 10px;
      color: ${(props) => props.theme.default.color};
    }
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.default.borderColor};
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.default.backgroundColor};

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Svg = styled.svg`
  display: block;
  margin: auto;
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.default.color};
  box-sizing: border-box;
`;

const Checkbox = ({ className, checked, label, ...props }) => {
  console.log('checked: ', checked);
  return (
    <CheckboxContainer className={className}>
      <label>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon>
            {props.indeterminate === true ? (
              <Svg
                viewbox="0 0 20 20"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <polyline points="7 12 18 12" />
              </Svg>
            ) : (
              <Svg
                viewBox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                {/* fontawesome */}
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </Svg>
            )}
          </Icon>
        </StyledCheckbox>
        <div className="CheckboxLabel">{label}</div>
      </label>
    </CheckboxContainer>
  );
};

export default Checkbox;
