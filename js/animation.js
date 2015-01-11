function move()
        {
            var leftSide = document.getElementById("leftSide");
            var rightSide = document.getElementById("rightSide");
            var circle = document.getElementById("circle");
            
            //calculate width for left and right sides
            var circleTopPosition = window.getComputedStyle(circle).top;
            circleTopPosition = parseInt(circleTopPosition.substr(0, circleTopPosition.length - 2));
            
            var sideWidth = window.getComputedStyle(leftSide).width;
            sideWidth = parseInt(sideWidth.substr(0, sideWidth.length - 2));
            
            var side = sideWidth;
            var decrementSide = side / 38;
            
            //if circle.style.top == 0 reverse animation
            if (circleTopPosition == 0)
            {
                var circleTop = 0;
                function frameReverse()
                {
                    circleTop++;
                    leftSide.style.left = (-side + decrementSide) + 'px' ;
                    rightSide.style.right = (-side + decrementSide) + 'px' ;
                    circle.style.top = circleTop + '%';
                    side = side-decrementSide;
                    if (circleTop == 38) 
                    {
                        clearInterval(timer);
                    }
                }
                var timer = setInterval(frameReverse, 20);
            }
            else
            {
                var circleTop = 38;
                function frame()
                {
                    side = side - decrementSide;
                    circleTop--;
                    leftSide.style.left = '-' + (sideWidth - side) + 'px' ;
                    rightSide.style.right = '-' + (sideWidth - side) + 'px' ;
                    circle.style.top = circleTop + '%';
                    if (circleTop == 0) 
                    {
                        clearInterval(timer);
                    }
                }
                var timer = setInterval(frame, 20);
            }
        }