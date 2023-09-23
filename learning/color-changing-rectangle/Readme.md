#understand

-create a rectangular box. When the mouse pointer moves towards the left to that box, the color of the box should be red
 when the mouse moves right to the box, the color of the box should be blue
-the more left we move of the box, the more red it becomes
-the more right we move of the box, the more blue it become
-when the mouse pointer moves outside of the box, the box color becomes white

#plan

-UI: this contains a rectangular box where the user will be able to hover his pointer
-input: there is no particular input that is being asked from the user, the user has to move
        the cursor inside the box and the color will change accordingly
-output: the color of the box will change according to cursor movements

#pseudocode

-Create a rectangular box,center it and listen to it while the cursor moves
-determine the position of the box (left position)
-determine the position of the cursor in the viewport
-to get the position of the cursor inside the box, boxposition-cursor position
-when the cursorLocation < boxwidth/2, the color should be red
-when the cursorLocation> boxwidth/2, the color should be blue
-to make the color transition gradual,
    map the rgb value of the red color with the position of the cursor
        cursorLocation=0; rgb red=255
        cursorLocation=middle rgb red=0
        cursorLocation=middle rgb blue=0
        cursorLocation=width rgb blue=255
        (use gsap map range for this)
