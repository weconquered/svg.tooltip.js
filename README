# svg.tooltip.js

A plugin for the [svgdotjs.github.io](https://svgdotjs.github.io/) library to make elements has tooltip.

Svg.tooltip.js is licensed under the terms of the MIT License.

## Usage

Install the plugin:

    bower install svg.tooltip.js

Include this plugin after including the svg.js library in your html document.

```html
<script src="svg.js"></script>
<script src="svg.tooltip.js"></script>
```

To make an element has tooltip when mouse over just call `tooltip(title[,position])` in the element

```javascript
var draw = SVG('canvas').size(400, 400)
var rect = draw.rect(100, 100)

rect.tooltip("I'm a rect")
```
## Params

 - title
   tooltip显示的内容,可以是文本或者是html文本
 - position
   可以是："top","right","bottom","left"   默认是top

## Remove
The draggable functionality can be removed calling draggable again with false as argument:

```javascript
rect.tooltip(null)
```