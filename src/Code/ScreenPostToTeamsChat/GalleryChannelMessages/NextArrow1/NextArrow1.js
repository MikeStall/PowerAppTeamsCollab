Tooltip(){
	"View item details"
} // End of Tooltip

AccessibleLabel(){
	NextArrow1.Tooltip
} // End of AccessibleLabel

Icon(){
	Icon.ChevronRight
} // End of Icon

Color(){
	RGBA(0, 18, 107, 1)
} // End of Color

DisabledColor(){
	RGBA(244, 244, 244, 1)
} // End of DisabledColor

PressedColor(){
	ColorFade(NextArrow1.Color, -20%)
} // End of PressedColor

HoverColor(){
	ColorFade(NextArrow1.Color, 20%)
} // End of HoverColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	NextArrow1.Fill
} // End of DisabledFill

PressedFill(){
	NextArrow1.Fill
} // End of PressedFill

HoverFill(){
	NextArrow1.Fill
} // End of HoverFill

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

Y(){
	(Parent.TemplateHeight / 2) - (NextArrow1.Height / 2)
} // End of Y

Width(){
	60
} // End of Width

Height(){
	60
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
	ColorFade(NextArrow1.BorderColor, -20%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(NextArrow1.BorderColor, 20%)
} // End of HoverBorderColor

FocusedBorderColor(){
	NextArrow1.BorderColor
} // End of FocusedBorderColor

X(){
	Parent.TemplateWidth - NextArrow1.Width - 5
} // End of X

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

PaddingLeft(){
	10
} // End of PaddingLeft

PaddingRight(){
	10
} // End of PaddingRight

PaddingTop(){
	10
} // End of PaddingTop

PaddingBottom(){
	10
} // End of PaddingBottom

TabIndex(){
	0
} // End of TabIndex

OnSelect(){
	Select(Parent)
} // End of OnSelect

