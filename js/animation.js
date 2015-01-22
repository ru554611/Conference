$(document).ready(function(){
                $("#circle").click(function(){
                    
                    var leftSide = document.getElementById("leftSide");
                    var rightSide = document.getElementById("rightSide");
                    var circle = document.getElementById("circle");
                    
                    //calculate width for left and right sides
                    var circleTopPosition = window.getComputedStyle(circle).top;
                    circleTopPosition = parseInt(circleTopPosition.substr(0, circleTopPosition.length - 2));
                    
                    docWidth = document.documentElement.clientWidth;
                    docHeight = document.documentElement.clientHeight;
                    
                    var sideWidth = window.getComputedStyle(leftSide).width;
            sideWidth = parseInt(sideWidth.substr(0, sideWidth.length - 2));
                    var y = $('#circle').css('height');
                    y = parseInt(y.substr(0, y.length - 2)) / 2;
                    var x = Math.round(docHeight / 2) - y;
                    
                    if (circleTopPosition == 0)
                    {
                        $("#leftSide")
                            .animate(
                            { left: 0 }, 
                            { duration: 1500,
                            easing: 'easeOutBounce'
                            });
                        $("#rightSide")
                            .animate(
                            { right: 0 }, 
                            { duration: 1500,
                            easing: 'easeOutBounce'
                            });
                        $("#circle")
                            .animate(
                            { top: x }, 
                            { duration: 1500,
                            easing: 'easeOutBounce'
                            });
                    }
                    else
                    {
                        $("#leftSide")
                            .animate(
                            { left: -758 }, 
                            { duration: 'slow'});
                        $("#rightSide")
                            .animate(
                            { right: -758 }, 
                            { duration: 'slow'});
                        $("#circle")
                            .animate(
                            { top: 0 }, 
                            { duration: 'slow'});
                    }
                });
            });