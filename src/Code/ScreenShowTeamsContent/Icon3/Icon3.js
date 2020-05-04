Icon(){
	Icon.BackArrow
} // End of Icon

Color(){
	RGBA(0, 18, 107, 1)
} // End of Color

DisabledColor(){
	RGBA(244, 244, 244, 1)
} // End of DisabledColor

PressedColor(){
	ColorFade(Icon3.Color, -20%)
} // End of PressedColor

HoverColor(){
	ColorFade(Icon3.Color, 20%)
} // End of HoverColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	Icon3.Fill
} // End of DisabledFill

PressedFill(){
	Icon3.Fill
} // End of PressedFill

HoverFill(){
	Icon3.Fill
} // End of HoverFill

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

X(){
	1185
} // End of X

Y(){
	16
} // End of Y

Width(){
	64
} // End of Width

Height(){
	64
} // End of Height

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(Icon3.BorderColor, -20%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Icon3.BorderColor, 20%)
} // End of HoverBorderColor

FocusedBorderColor(){
	Icon3.BorderColor
} // End of FocusedBorderColor

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

OnSelect(){
	Back()
} // End of OnSelect

