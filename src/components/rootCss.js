import alpha from 'color-alpha'
const dark = "#131313"
export const color = {
    white : "#fff",
    dark : dark,
    dark80 : alpha(dark, "80%"),
    dark50 : alpha(dark, "50%"),
    dark20 : alpha(dark,"20%"),
    yellow : "#FFD400"
}
const breakpoints = [576, 768, 992, 1200]
const breakpointsmax = [575, 767, 991, 1199]
export const mx = breakpointsmax.map(bp => `@media (max-width: ${bp}px)`)
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)