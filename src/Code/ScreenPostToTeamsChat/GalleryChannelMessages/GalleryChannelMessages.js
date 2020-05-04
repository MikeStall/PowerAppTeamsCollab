WrapCount(){
	1
} // End of WrapCount

Items(){
	MicrosoftTeams.GetMessagesFromChannel(LabelTeamId.Text, LabelChannelId.Text).value
} // End of Items

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

DisabledBorderColor(){
	GalleryChannelMessages.BorderColor
} // End of DisabledBorderColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

LoadingSpinnerColor(){
	GalleryChannelMessages.BorderColor
} // End of LoadingSpinnerColor

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

LoadingSpinner(){
	LoadingSpinner.None
} // End of LoadingSpinner

TemplatePadding(){
	0
} // End of TemplatePadding

Transition(){
	Transition.None
} // End of Transition

Layout(){
	Layout.Vertical
} // End of Layout

ZIndex(){
	AutoValue
} // End of ZIndex

Height(){
	397
} // End of Height

TemplateSize(){
	Min(160, GalleryChannelMessages.Height - 60)
} // End of TemplateSize

Width(){
	762
} // End of Width

Y(){
	363
} // End of Y

X(){
	604
} // End of X

HoverFill(){
	GalleryChannelMessages.Fill
} // End of HoverFill

PressedFill(){
	GalleryChannelMessages.Fill
} // End of PressedFill

DisabledFill(){
	GalleryChannelMessages.Fill
} // End of DisabledFill

HoverBorderColor(){
	GalleryChannelMessages.BorderColor
} // End of HoverBorderColor

PressedBorderColor(){
	GalleryChannelMessages.BorderColor
} // End of PressedBorderColor

