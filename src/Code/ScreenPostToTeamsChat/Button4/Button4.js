Text(){
	"Send!"
} // End of Text

BorderColor(){
	ColorFade(Button4.Fill, -15%)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	Button4.Fill
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Button4.BorderColor, 20%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Button4.BorderColor
} // End of FocusedBorderColor

Color(){
	RGBA(255, 255, 255, 1)
} // End of Color

DisabledColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledColor

PressedColor(){
	Button4.Fill
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
	Button4.Color
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
	37
} // End of X

Y(){
	565
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
	MicrosoftTeams.PostMessageToChannelV3(LabelTeamId.Text, LabelChannelId.Text, { content : TextInputMessage.Text, contentType : "text"} )
} // End of OnSelect

