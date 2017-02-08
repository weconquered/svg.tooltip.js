/**
 * Created by weconquered on 17/2/8.
 */
;(function () {
    "use strict";
    SVG.extend(SVG.Element, {
        /**
         *
         * @param tooltipText  {String}  tooltip显示的内容,可以是文本或者是html文本
         * @param position {String} {"left"} 必须为: top,right,bottom,left
         * @returns {SVG.Element}
         */
        tooltip: function (tooltipText, position) {
            var me = this;

            //tooltip相关的数据,不要污染上层对象
            me._toolTipObj = me._toolTipObj || {};
            me._toolTipObj.title = tooltipText;
            me._toolTipObj.position = position || "top";

            function getToolTipPos(mouse_x, mouse_y) {
                var tooltip_width = $(".strategy-tooltip").width();
                var tooltip_height = $(".strategy-tooltip").height();

                let x_delta = 8;
                let y_delta = 8;

                var result = {
                    x: 0,
                    y: 0
                }

                switch (me._toolTipObj.position) {
                    case "top":
                        result.x = mouse_x - 0.5 * tooltip_width;
                        result.y = mouse_y - tooltip_height - y_delta;
                        break;
                    case "bottom":
                        result.x = mouse_x - 0.5 * tooltip_width;
                        result.y = mouse_y + tooltip_height + y_delta;
                        break;
                    case "left":
                        result.x = mouse_x - tooltip_width - x_delta;
                        result.y = mouse_y - 0.5 * tooltip_height;
                        break;
                    case "right":
                        result.x = mouse_x + tooltip_width + x_delta;
                        result.y = mouse_y - 0.5 * tooltip_height;
                        break;
                }

                return result;
            }

            me.on("mouseover", function (event) {

                if (!me._toolTipObj.title) {
                    return;
                }

                if ($(".strategy-tooltip").length == 0) {

                    var div = `<div class="strategy-tooltip"></div>`;
                    $("body").append(div);
                    $(".strategy-tooltip").css({
                            "position": "fixed",
                            "background-color": "black",
                            "color": "white",
                            "padding": "2px",
                            "border-radius": "2px"
                        }
                    );
                }

                $(".strategy-tooltip").html(me._toolTipObj.title);

                var pos = getToolTipPos(event.x, event.y);

                $(".strategy-tooltip").css({
                    left: pos.x,
                    top: pos.y
                })
            });

            me.on("mousemove", function (event) {

                if (!me._toolTipObj.title) {
                    return;
                }

                if ($(".strategy-tooltip").length != 0) {
                    var pos = getToolTipPos(event.x, event.y);
                    $(".strategy-tooltip").css({
                        left: pos.x,
                        top: pos.y
                    })
                }
            });

            me.on("mouseout", function () {

                if ($(".strategy-tooltip").length != 0) {
                    $(".strategy-tooltip").remove();
                }
            })

            return this;
        }
    });
})();