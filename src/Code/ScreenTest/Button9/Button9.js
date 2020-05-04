Text(){
	"Button"
} // End of Text

BorderColor(){
	ColorFade(Button9.Fill, -15%)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	Button9.Fill
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Button9.BorderColor, 20%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Button9.BorderColor
} // End of FocusedBorderColor

Color(){
	RGBA(255, 255, 255, 1)
} // End of Color

DisabledColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledColor

PressedColor(){
	Button9.Fill
} // End of PressedColor

HoverColor(){
	RGBA(255, 255, 255, 1)
} // End of HoverColor

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

Fill(){
	RGBA(56, 96, 178, 1)
} // End of Fill

DisabledFill(){
	RGBA(244, 244, 244, 1)
} // End of DisabledFill

PressedFill(){
	Button9.Color
} // End of PressedFill

HoverFill(){
	ColorFade(RGBA(56, 96, 178, 1), -20%)
} // End of HoverFill

Font(){
	Font.'Open Sans'
} // End of Font

FontWeight(){
	FontWeight.Semibold
} // End of FontWeight

Align(){
	Align.Center
} // End of Align

VerticalAlign(){
	VerticalAlign.Middle
} // End of VerticalAlign

X(){
	1012
} // End of X

Y(){
	600
} // End of Y

Width(){
	160
} // End of Width

Height(){
	40
} // End of Height

ZIndex(){
	AutoValue
} // End of ZIndex

RadiusTopLeft(){
	10
} // End of RadiusTopLeft

RadiusTopRight(){
	10
} // End of RadiusTopRight

RadiusBottomLeft(){
	10
} // End of RadiusBottomLeft

RadiusBottomRight(){
	10
} // End of RadiusBottomRight

BorderThickness(){
	2
} // End of BorderThickness

FocusedBorderThickness(){
	4
} // End of FocusedBorderThickness

Size(){
	15
} // End of Size

Italic(){
	false
} // End of Italic

Underline(){
	false
} // End of Underline

Strikethrough(){
	false
} // End of Strikethrough

OnSelect(){
	Set(_x2, MicrosoftTeams.GetChannelsForGroup(_groupId).value)
} // End of OnSelect

