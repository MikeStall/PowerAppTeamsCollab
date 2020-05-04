Text(){
	"See Teams Context Variables"
} // End of Text

FocusedBorderThickness(){
	4
} // End of FocusedBorderThickness

Underline(){
	false
} // End of Underline

BorderThickness(){
	2
} // End of BorderThickness

Italic(){
	false
} // End of Italic

Visible(){
	Not(IsBlank(Param("teamId")))
} // End of Visible

RadiusBottomRight(){
	10
} // End of RadiusBottomRight

RadiusBottomLeft(){
	10
} // End of RadiusBottomLeft

RadiusTopRight(){
	10
} // End of RadiusTopRight

Size(){
	15
} // End of Size

RadiusTopLeft(){
	10
} // End of RadiusTopLeft

ZIndex(){
	AutoValue
} // End of ZIndex

Height(){
	49
} // End of Height

Width(){
	521
} // End of Width

Strikethrough(){
	false
} // End of Strikethrough

Y(){
	79
} // End of Y

X(){
	500
} // End of X

VerticalAlign(){
	VerticalAlign.Middle
} // End of VerticalAlign

Align(){
	Align.Center
} // End of Align

FontWeight(){
	FontWeight.Semibold
} // End of FontWeight

Font(){
	Font.'Open Sans'
} // End of Font

HoverFill(){
	ColorFade(RGBA(56, 96, 178, 1), -20%)
} // End of HoverFill

DisabledFill(){
	RGBA(244, 244, 244, 1)
} // End of DisabledFill

Fill(){
	RGBA(56, 96, 178, 1)
} // End of Fill

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

HoverColor(){
	RGBA(255, 255, 255, 1)
} // End of HoverColor

DisabledColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledColor

Color(){
	RGBA(255, 255, 255, 1)
} // End of Color

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedColor(){
	ButtonGotoContextVars.Fill
} // End of PressedColor

PressedBorderColor(){
	ButtonGotoContextVars.Fill
} // End of PressedBorderColor

BorderColor(){
	ColorFade(ButtonGotoContextVars.Fill, -15%)
} // End of BorderColor

PressedFill(){
	ButtonGotoContextVars.Color
} // End of PressedFill

FocusedBorderColor(){
	ButtonGotoContextVars.BorderColor
} // End of FocusedBorderColor

HoverBorderColor(){
	ColorFade(ButtonGotoContextVars.BorderColor, 20%)
} // End of HoverBorderColor

OnSelect(){
	Navigate(ScreenShowTeamsContent)
} // End of OnSelect

