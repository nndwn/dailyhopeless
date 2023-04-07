---
title : "Using rem unit on font-size"
date : "2023-03-10"
lang: "en"
slug : "using-rem-unit-on-font-size"
head : "converter px and rem "
---

In CSS, there are many different units of measurement that can be used on a web page, such as px, vw, ch, em, rem, and others, but out of all these units, only the rem unit is suitable for setting font sizes in a responsive manner. Rem stands for "root em" and allows for responsive text styling based on the root HTML of a browser, meaning that this unit can adapt to the default font size of the browser.

Basically, all modern browsers have the same default font size value of 16px, but that default size still uses the pixel unit which is not recommended for setting sizes on a website because it has a fixed nature. This is different from the rem unit which has a relative nature, allowing the default size to become a single value when using rem units, as shown below:

    1 rem = 16px
    2 rem = 32 px

A font size of 16px does not have to be equivalent to 1 rem. Users can adjust the font size on their browser as they see fit, which could make 18px equivalent to 1 rem. This is related to user accessibility.

## Conclusion

So developers don't have to worry about font sizes on various user screens because, basically, rem follows the default size setting on the user's browser. Additionally, we no longer have to worry about changes in font size when the font is nested within a parent element, because rem sizes are based on the root HTML of the website page.
