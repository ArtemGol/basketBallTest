const size = {
    esm: "375px",
    sm: "540px",
    md: "721px",
    lg: "960px",
    xl: "1140px",
    xxl: "1320px"
}

export const deviceMax = {
    esm: `(max-width: ${size.esm})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`
}

export const deviceMin = {
    esm: `(min-width: ${size.esm})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`
}

export const verticalDeviceMax = {
    esm: `(max-height: ${size.esm})`
}