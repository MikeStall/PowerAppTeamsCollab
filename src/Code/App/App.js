ConfirmExit(){
	false
} // End of ConfirmExit

OnStart(){
	If (IsBlank(Param("groupId")), 
	"ignore", 
	Set(_groupId, Param("groupId"));  Set(_channelId, Param("channelId")); 
	Reset(DropDownSelectTeam); Reset(DropDownSelectChannel)
	)
	
} // End of OnStart

SizeBreakpoints(){
	[600, 900, 1200]
} // End of SizeBreakpoints

