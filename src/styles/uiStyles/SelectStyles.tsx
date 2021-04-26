export const customStyles = {
    //Parent
    container: (styles: any) => {
        return {
            ...styles,
            width: '100%',
            height: 'inherit',
            minHeight: 'inherit'
        }
    },
    //Children
    control: (styles: any, state: any) => {
        return {
            ...styles,
            zIndex: 0,
            minHeight: 'inherit',
            height: '40px',
            overflow: 'hidden',
            backgroundColor: state.isFocused ? '#FFFFFF' : '#F6F6F6',
            cursor: state.isFocused ? 'default' : 'pointer',
            caretColor: 'transparent',
            boxShadow: state.isFocused ? 0 : 0,
            boxSizing: 'content-box',
            border: state.isFocused ? '0.5px solid #D1D1D1' : '0.5px solid #D1D1D1',
            '&:hover': {
                border: state.isFocused ? '0.5px solid #D1D1D1' : '0.5px solid #D1D1D1'
            },
            '@media screen and (max-width: 470px)': {
                height: 'inherit'
            }
        }
    },
    //DropdownMenu
    menu: (styles: any) => {
        return {
            ...styles,
            margin: '3px 0'
        }
    },
    menuList: (styles: any) => {
        return {
            ...styles,
            padding: '0',
            borderRadius: '4px'
        }
    },
    option: (styles: any, state: any) => {
        return {
            ...styles,
            fontSize:'14px',
            color: state.isSelected && !state.isMulti ? '#FFFFFF' : '#9C9C9C',
            borderBottom: '0.5px solid #D1D1D1',
            backgroundColor: state.isSelected ? '#E4163A' : '#FFFFFF',
            ':last-child': {
                border: 'none'
            },
            ':hover': {
                backgroundColor: state.isMulti ? '#E4163A' : state.isSelected ? '#E4163A' : '#FF768E',
                color: state.isMulti ? '#FFFFFF' : '#FFFFFF',
                cursor: 'pointer'
            },
            '@media screen and (max-width: 470px)': {
                fontSize: '12px'
            }
        }
    },
    //Dropdown&ClearIndicators
    indicatorsContainer: (styles: any) => {
        return {
            ...styles,
            cursor: 'pointer',
            '@media screen and (max-width: 470px)': {
                height: 'inherit',
            }
        }
    },
    clearIndicator: (styles: any) => {
        return {
            ...styles,
            '@media screen and (max-width: 470px)': {
                width: '28px'
            }
        }
    },
    dropdownIndicator: (styles: any) => {
        return {
            ...styles,
            height: 'inherit',
            '@media screen and (max-width: 470px)': {
                width: '28px'
            }
        }
    },
    //CustomInput
    input: (styles: any) => {
        return {
            ...styles,
            margin: 0
        }
    },
    placeholder: (styles: any) => {
      return {
          ...styles,
          fontSize: '14px'
      }
    },
    //ValueContainer
    valueContainer: (styles: any) => {
        return {
            ...styles,
            flexWrap: 'no-wrap',
            height: 'inherit'
        }
    },
    //!IsMulti
    singleValue: (styles: any) => {
        return {
            ...styles,
            fontSize: '14px',
            '@media screen and (max-width: 470px)': {
                fontSize: '12px'
            }
        }
    },
    //IsMulti
    multiValue: (styles: any) => {
        return {
            ...styles,
            backgroundColor: '#E4163A',
            borderRadius: '4px',
            color: '#FFFFFF',
            fontSize: '14px',
            '@media screen and (max-width: 540px)': {
                fontSize: '14px'
            }
        }
    },
    multiValueLabel: (styles: any) => {
        return {
            ...styles,
            margin: 0,
            color: '#FFFFFF'
        }
    },
    multiValueRemove: (styles: any) => {
        return {
            ...styles,
            color: '#FFFFFF',
            cursor: 'pointer'
        }
    }
}