import {theme} from "../assets/constants/primitives";

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
            backgroundColor: state.isFocused ? `${theme.white}` : `${theme.lightestGrey1}`,
            cursor: state.isFocused ? 'default' : 'pointer',
            caretColor: 'transparent',
            boxShadow: state.isFocused ? 0 : 0,
            boxSizing: 'teamFormContent-box',
            border: state.isFocused ? `0.5px solid ${theme.lightestGrey}` : `0.5px solid ${theme.lightestGrey}`,
            '&:hover': {
                border: state.isFocused ? `0.5px solid ${theme.lightestGrey}` : `0.5px solid ${theme.lightestGrey}`
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
            color: state.isSelected && !state.isMulti ? `${theme.white}` : `${theme.lightGrey}`,
            borderBottom: `0.5px solid ${theme.lightestGrey}`,
            backgroundColor: state.isSelected ? `${theme.red}` : `${theme.white}`,
            ':last-child': {
                border: 'none'
            },
            ':hover': {
                backgroundColor: state.isMulti ? `${theme.red}` : state.isSelected ? `${theme.red}` : `${theme.lightestRed}`,
                color: state.isMulti ? `${theme.white}` : `${theme.white}`,
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
            backgroundColor: `${theme.red}`,
            borderRadius: '4px',
            color: `${theme.white}`,
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
            color: `${theme.white}`
        }
    },
    multiValueRemove: (styles: any) => {
        return {
            ...styles,
            color: `${theme.white}`,
            cursor: 'pointer'
        }
    }
}