Width(){
	Max(App.Width, App.DesignWidth)
} // End of Width

Height(){
	Max(App.Height, App.DesignHeight)
} // End of Height

ImagePosition(){
	ImagePosition.Fit
} // End of ImagePosition

Fill(){
	RGBA(255, 255, 255, 1)
} // End of Fill

LoadingSpinner(){
	LoadingSpinner.None
} // End of LoadingSpinner

LoadingSpinnerColor(){
	RGBA(56, 96, 178, 1)
} // End of LoadingSpinnerColor

Size(){
	1 + CountRows(App.SizeBreakpoints) - CountIf(App.SizeBreakpoints, Value >= ScreenPostToTeamsChat.Width)
} // End of Size

Orientation(){
	If(ScreenPostToTeamsChat.Width < ScreenPostToTeamsChat.Height, Layout.Vertical, Layout.Horizontal)
} // End of Orientation

